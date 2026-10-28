/**
 * audio.js - Intelligent Section-Aware Audio Engine for Project Radha (Stage 3)
 * Features:
 * - Automatic smooth crossfades (0.8s–1.2s) between the 5 local songs based on scroll section
 * - Twin audio player architecture to ensure zero clicks, zero overlapping songs, zero abrupt cuts
 * - Respects user manual pause: if user paused, auto-transitions do NOT restart music
 * - Volume slider control, mute toggle, and localStorage persistence
 * - Web Audio API fallback for sound effects and melodic chimes
 * - Browser autoplay recovery with "Enable Music" one-tap fallback
 */

import { AUDIO_TRACKS, SECTION_AUDIO_MAP } from './content.js';

class AudioManager {
  constructor() {
    // Twin players for smooth seamless crossfades
    this.playerA = new Audio();
    this.playerB = new Audio();
    this.playerA.preload = 'auto';
    this.playerB.preload = 'auto';

    this.activePlayer = this.playerA;
    this.inactivePlayer = this.playerB;

    this.currentTrackId = null;
    this.pendingTrackId = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.isUserPaused = false;
    this.userStartedPlayback = false;
    this.masterVolume = 0.8;

    this.audioContext = null;
    this.listeners = [];
    this.fadeInterval = null;

    // Load persisted state
    const savedMute = localStorage.getItem('radha_audio_muted');
    if (savedMute !== null) {
      this.isMuted = savedMute === 'true';
    }
    const savedVol = localStorage.getItem('radha_audio_vol');
    if (savedVol !== null) {
      const v = parseFloat(savedVol);
      if (!isNaN(v) && v >= 0 && v <= 1) {
        this.masterVolume = v;
      }
    }

    this._setupPlayerEvents(this.playerA);
    this._setupPlayerEvents(this.playerB);

    // Listen for tab visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Tab hidden: don't alter userPaused, but keep audio smooth or pause if needed
      }
    });
  }

  _setupPlayerEvents(player) {
    player.addEventListener('ended', () => {
      if (player === this.activePlayer) {
        // Loop the current track or let it play
        player.currentTime = 0;
        player.play().catch(() => {});
      }
    });

    player.addEventListener('error', (e) => {
      console.warn('Audio track load error on player:', player.src, e);
      if (player === this.activePlayer && this.isPlaying && !this.isMuted) {
        this.playSyntheticMelody();
      }
    });
  }

  onStateChange(fn) {
    this.listeners.push(fn);
  }

  notifyState() {
    const track = AUDIO_TRACKS[this.currentTrackId];
    this.listeners.forEach(fn => fn({
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      isUserPaused: this.isUserPaused,
      userStartedPlayback: this.userStartedPlayback,
      currentTrackId: this.currentTrackId,
      trackTitle: track ? track.title : 'Ambient Melody',
      trackArtist: track ? track.artist : 'Project Radha',
      volume: this.masterVolume
    }));
  }

  initAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  /**
   * Sound effect: Pop / Bubble tap
   */
  playPop() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.audioContext) return;

    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  /**
   * Sound effect: Candle blow whoosh
   */
  playWhoosh() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.audioContext) return;

    try {
      const now = this.audioContext.currentTime;
      const bufferSize = this.audioContext.sampleRate * 0.4;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioContext.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(320, now + 0.35);

      const gain = this.audioContext.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioContext.destination);

      noise.start(now);
      noise.stop(now + 0.4);
    } catch (e) {}
  }

  /**
   * Web Audio Synthetic Chime Fallback
   */
  playSyntheticMelody() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.audioContext) return;

    try {
      const now = this.audioContext.currentTime;
      const notes = [
        { note: 523.25, time: 0, dur: 0.3 },     // C5
        { note: 659.25, time: 0.25, dur: 0.3 },  // E5
        { note: 783.99, time: 0.5, dur: 0.3 },   // G5
        { note: 1046.50, time: 0.75, dur: 0.5 }  // C6
      ];

      notes.forEach(n => {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.note, now + n.time);

        gain.gain.setValueAtTime(0.001, now + n.time);
        gain.gain.exponentialRampToValueAtTime(0.1, now + n.time + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now + n.time);
        osc.stop(now + n.time + n.dur + 0.05);
      });
    } catch (e) {}
  }

  /**
   * Transition to a specific track with smooth 1.0s crossfade
   */
  async transitionToTrack(trackId, force = false) {
    if (!AUDIO_TRACKS[trackId]) return;

    // If same track is already playing, do nothing
    if (this.currentTrackId === trackId && this.isPlaying && !force) {
      return;
    }

    this.pendingTrackId = trackId;

    // If user has not started playback yet or explicitly paused, update trackId but don't auto-start sound
    if (!this.userStartedPlayback || (this.isUserPaused && !force)) {
      this.currentTrackId = trackId;
      this.notifyState();
      return;
    }

    const targetTrack = AUDIO_TRACKS[trackId];
    const outgoingPlayer = this.activePlayer;
    const incomingPlayer = this.inactivePlayer;

    // Prepare incoming player
    incomingPlayer.src = targetTrack.file;
    incomingPlayer.volume = 0;
    incomingPlayer.currentTime = 0;

    try {
      const playPromise = incomingPlayer.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch (err) {
      console.warn('Autoplay blocked or playback error:', err);
      this.isPlaying = false;
      this.notifyState();
      return;
    }

    // Crossfade: fade out outgoing, fade in incoming over 1.2s
    const targetVol = this.isMuted ? 0 : this.masterVolume;
    const fadeSteps = 15;
    const stepDuration = 80; // ms, total ~1.2s
    let currentStep = 0;

    if (this.fadeInterval) clearInterval(this.fadeInterval);

    this.fadeInterval = setInterval(() => {
      currentStep++;
      const progress = currentStep / fadeSteps;

      if (!outgoingPlayer.paused) {
        outgoingPlayer.volume = Math.max(0, targetVol * (1 - progress));
      }
      incomingPlayer.volume = Math.min(targetVol, targetVol * progress);

      if (currentStep >= fadeSteps) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;

        outgoingPlayer.pause();
        outgoingPlayer.volume = 0;

        // Swap players
        this.activePlayer = incomingPlayer;
        this.inactivePlayer = outgoingPlayer;
        this.currentTrackId = trackId;
        this.isPlaying = true;
        this.notifyState();
      }
    }, stepDuration);

    this.currentTrackId = trackId;
    this.isPlaying = true;
    this.notifyState();
  }

  /**
   * Handle section change triggered by scroll IntersectionObserver
   */
  onSectionVisible(sectionId) {
    const trackId = SECTION_AUDIO_MAP[sectionId];
    if (trackId && trackId !== this.currentTrackId) {
      this.transitionToTrack(trackId);
    }
  }

  /**
   * User interaction kick-off (e.g. Tapping "Open My Surprise")
   */
  startExperience(trackId = "tere_pyaar_mein") {
    this.initAudioContext();
    this.userStartedPlayback = true;
    this.isUserPaused = false;
    this.transitionToTrack(trackId, true);
  }

  togglePlayPause() {
    this.initAudioContext();
    if (!this.userStartedPlayback) {
      this.startExperience(this.currentTrackId || "tere_pyaar_mein");
      return;
    }

    if (this.isPlaying) {
      // User pauses
      this.isUserPaused = true;
      this.isPlaying = false;
      this.activePlayer.pause();
      if (!this.inactivePlayer.paused) this.inactivePlayer.pause();
    } else {
      // User resumes
      this.isUserPaused = false;
      this.isMuted = false;
      this.isPlaying = true;
      const targetVol = this.masterVolume;
      this.activePlayer.volume = targetVol;
      this.activePlayer.play().catch(() => {});
    }
    this.notifyState();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('radha_audio_muted', this.isMuted.toString());

    if (this.isMuted) {
      this.activePlayer.volume = 0;
      this.inactivePlayer.volume = 0;
    } else {
      const vol = this.masterVolume;
      this.activePlayer.volume = vol;
      if (this.isUserPaused) {
        // If user un-mutes while paused, resume smoothly
        this.isUserPaused = false;
        this.isPlaying = true;
        this.activePlayer.play().catch(() => {});
      }
    }
    this.notifyState();
  }

  setVolume(newVol) {
    const val = Math.max(0, Math.min(1, parseFloat(newVol)));
    this.masterVolume = val;
    localStorage.setItem('radha_audio_vol', val.toString());

    if (!this.isMuted && this.isPlaying) {
      this.activePlayer.volume = val;
    }
    this.notifyState();
  }
}

export const audioManager = new AudioManager();
