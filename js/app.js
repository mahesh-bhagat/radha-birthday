/**
 * app.js - Main Application Orchestrator for Project Radha (Stage 3)
 * Full Interactive Multi-Chapter Birthday Experience:
 * - Intelligent 5-Track section-aware audio engine with smooth crossfading
 * - 18 Candles interactive cake cutting & blessing reveal
 * - 14-Photo polaroid scrapbook, filmstrip carousel & fullscreen lightbox
 * - Radha Ke Cute Nakhre mini-apps & happiness charms
 * - Radhe's Little Happiness Shop boutique & basket checkout
 * - Little Things appreciation cards
 * - Personal memory wax-sealed unfolding letter
 * - 6 Secret "Open When" envelopes
 * - Heartfelt letter from Mahesh
 * - Magical twilight finale with confetti cannon
 */

import {
  RECIPIENT_DATA,
  AUDIO_TRACKS,
  SECTION_AUDIO_MAP,
  PHOTO_GALLERY,
  NAKHRE_DATA,
  CAKE_DATA,
  LITTLE_THINGS_DATA,
  MEMORY_DATA,
  SECRET_ENVELOPES_DATA,
  BIRTHDAY_LETTER_DATA,
  FINALE_DATA
} from './content.js';

import { audioManager } from './audio.js';
import { AmbientParticleEngine, ConfettiEngine } from './transitions.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Visual Canvas Engines
  const ambientEngine = new AmbientParticleEngine('ambient-canvas');
  const confettiEngine = new ConfettiEngine('confetti-canvas');

  // 2. Core DOM Elements
  const introSection = document.getElementById('intro-screen');
  const heroSection = document.getElementById('hero-section');
  const modalOverlay = document.getElementById('surprise-modal');
  const wishModal = document.getElementById('wish-modal');
  const lightboxModal = document.getElementById('lightbox-modal');

  // Controls & Audio Pill
  const btnUnlock = document.getElementById('btn-unlock-surprise');
  const btnSkipIntro = document.getElementById('btn-skip-intro');
  const btnToggleMotion = document.getElementById('btn-toggle-motion');
  const btnAudioToggle = document.getElementById('btn-audio-toggle');
  const btnAudioMute = document.getElementById('btn-audio-mute');
  const audioVolumeSlider = document.getElementById('audio-volume-slider');
  const audioLabel = document.getElementById('audio-label');
  const audioTrackSub = document.getElementById('audio-track-sub');
  const audioIndicator = document.getElementById('audio-indicator');
  const btnHeroPlayMelody = document.getElementById('btn-hero-melody');

  const btnAudioWithMusic = document.getElementById('btn-modal-with-music');
  const btnAudioSilently = document.getElementById('btn-modal-silently');

  // --------------------------------------------------------------------------
  // 3. Audio Manager UI Sync & Controls
  // --------------------------------------------------------------------------
  audioManager.onStateChange(state => {
    if (state.isMuted) {
      btnAudioMute.textContent = '🔇';
      btnAudioMute.setAttribute('aria-label', 'Unmute audio');
      audioIndicator.classList.remove('playing');
    } else {
      btnAudioMute.textContent = '🔊';
      btnAudioMute.setAttribute('aria-label', 'Mute audio');
    }

    if (state.isPlaying && !state.isMuted) {
      audioLabel.textContent = state.trackTitle;
      audioTrackSub.textContent = state.trackArtist;
      btnAudioToggle.textContent = '⏸';
      btnAudioToggle.setAttribute('aria-label', 'Pause music');
      audioIndicator.classList.add('playing');
    } else {
      audioLabel.textContent = state.isUserPaused ? 'Paused' : 'Sound Ready';
      audioTrackSub.textContent = state.trackTitle;
      btnAudioToggle.textContent = '▶';
      btnAudioToggle.setAttribute('aria-label', 'Play music');
      audioIndicator.classList.remove('playing');
    }

    if (audioVolumeSlider && document.activeElement !== audioVolumeSlider) {
      audioVolumeSlider.value = state.volume;
    }
  });

  if (btnAudioToggle) {
    btnAudioToggle.addEventListener('click', () => {
      audioManager.togglePlayPause();
    });
  }

  if (btnAudioMute) {
    btnAudioMute.addEventListener('click', () => {
      audioManager.toggleMute();
    });
  }

  if (audioVolumeSlider) {
    audioVolumeSlider.addEventListener('input', (e) => {
      audioManager.setVolume(e.target.value);
    });
  }

  // --------------------------------------------------------------------------
  // 4. Motion Control & Intro Unlock Ceremony
  // --------------------------------------------------------------------------
  if (btnToggleMotion) {
    btnToggleMotion.addEventListener('click', () => {
      const isPaused = ambientEngine.togglePause();
      btnToggleMotion.textContent = isPaused ? '▶ Resume Motion' : '⏸ Pause Motion';
    });
  }

  function executeSurpriseUnlock(withMusic = true) {
    modalOverlay.classList.remove('active');
    introSection.classList.add('hidden-screen');

    setTimeout(() => {
      introSection.style.display = 'none';
      heroSection.classList.add('active-screen');
      heroSection.scrollIntoView({ behavior: 'smooth' });

      confettiEngine.fire(110);

      if (withMusic) {
        audioManager.startExperience('tere_pyaar_mein');
      } else {
        audioManager.setMuted(true);
      }
    }, 400);
  }

  if (btnUnlock) {
    btnUnlock.addEventListener('click', () => {
      modalOverlay.classList.add('active');
      confettiEngine.fire(50);
    });
  }

  if (btnAudioWithMusic) {
    btnAudioWithMusic.addEventListener('click', () => executeSurpriseUnlock(true));
  }

  if (btnAudioSilently) {
    btnAudioSilently.addEventListener('click', () => executeSurpriseUnlock(false));
  }

  if (btnSkipIntro) {
    btnSkipIntro.addEventListener('click', (e) => {
      e.preventDefault();
      executeSurpriseUnlock(false);
    });
  }

  if (btnHeroPlayMelody) {
    btnHeroPlayMelody.addEventListener('click', () => {
      audioManager.startExperience('tere_pyaar_mein');
      confettiEngine.fire(40);
    });
  }

  // --------------------------------------------------------------------------
  // 5. Intelligent Scroll Section Observer for Auto Music Crossfades
  // --------------------------------------------------------------------------
  let lastObservedSection = null;
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        const id = entry.target.id;
        if (id !== lastObservedSection) {
          lastObservedSection = id;
          audioManager.onSectionVisible(id);
        }
      }
    });
  }, {
    threshold: [0.35, 0.6]
  });

  const observedSections = [
    'hero-section',
    'section-cake',
    'section-gallery',
    'section-nakhre',
    'section-little-things',
    'section-memory',
    'section-envelopes',
    'section-letter',
    'section-finale'
  ];

  observedSections.forEach(secId => {
    const el = document.getElementById(secId);
    if (el) sectionObserver.observe(el);
  });

  // --------------------------------------------------------------------------
  // 6. CHAPTER 01: THE MIDNIGHT BIRTHDAY CAKE & 18 CANDLES
  // --------------------------------------------------------------------------
  const candlesContainer = document.getElementById('candles-container');
  const btnMakeWish = document.getElementById('btn-make-wish');
  const btnBlowCandles = document.getElementById('btn-blow-candles');
  const btnCutCake = document.getElementById('btn-cut-cake');
  const btnRelightCake = document.getElementById('btn-relight-cake');
  const cakeInstruction = document.getElementById('cake-instruction');
  const cakeKnife = document.getElementById('cake-knife-tool');
  const cakeSlice = document.getElementById('cake-slice-item');
  const cakeWishBanner = document.getElementById('cake-wish-banner');
  const userChosenWishDisplay = document.getElementById('user-chosen-wish-display');

  let chosenWish = "Hamesha aisi hi hasti, chamakti aur khush rehna! 🌷";
  let candlesBlownCount = 0;
  const totalCandles = CAKE_DATA.candlesCount || 18;

  function buildCandles() {
    if (!candlesContainer) return;
    candlesContainer.innerHTML = '';
    candlesBlownCount = 0;

    for (let i = 0; i < totalCandles; i++) {
      const candle = document.createElement('div');
      candle.className = 'candle-unit';
      candle.title = `Candle #${i + 1} - Click to blow out!`;
      candle.setAttribute('role', 'button');
      candle.setAttribute('tabindex', '0');
      candle.setAttribute('aria-label', `Birthday candle ${i + 1}`);

      candle.innerHTML = `
        <span class="candle-wick"></span>
        <span class="candle-flame"></span>
        <span class="candle-smoke"></span>
      `;

      candle.addEventListener('click', () => blowSingleCandle(candle));
      candle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          blowSingleCandle(candle);
        }
      });

      candlesContainer.appendChild(candle);
    }
  }

  function blowSingleCandle(candleEl) {
    if (candleEl.classList.contains('blown')) return;
    candleEl.classList.add('blown');
    candlesBlownCount++;
    audioManager.playWhoosh();

    if (candlesBlownCount >= totalCandles) {
      onAllCandlesBlown();
    } else {
      cakeInstruction.textContent = `${candlesBlownCount} of ${totalCandles} candles blown! Keep going or tap 'Blow Candles' 🌬️`;
    }
  }

  function onAllCandlesBlown() {
    cakeInstruction.textContent = "All 18 candles blown! 🌸 Now tap 'Cut the Cake' 🔪 to slice the celebration!";
    btnBlowCandles.disabled = true;
    btnBlowCandles.style.opacity = '0.6';
    audioManager.playPop();
    confettiEngine.fire(45);
  }

  function blowAllCandles() {
    const candles = document.querySelectorAll('.candle-unit:not(.blown)');
    if (candles.length === 0) return;

    audioManager.playWhoosh();
    candles.forEach((c, idx) => {
      setTimeout(() => {
        c.classList.add('blown');
      }, idx * 35);
    });

    candlesBlownCount = totalCandles;
    setTimeout(() => {
      onAllCandlesBlown();
    }, candles.length * 35 + 100);
  }

  function cutTheCake() {
    audioManager.playPop();

    cakeKnife.style.transform = 'translate(-30px, 45px) rotate(5deg) scale(1.15)';

    setTimeout(() => {
      cakeSlice.classList.add('served');
      cakeKnife.style.transform = 'translate(60px, -20px) rotate(-45deg) scale(0.9)';

      // Trigger London Thumakda celebration anthem
      confettiEngine.fire(120);
      audioManager.transitionToTrack('london_thumakda', true);

      cakeWishBanner.classList.add('revealed');
      cakeInstruction.textContent = "🎉 Cake cut successfully! Happy 18th Birthday, Radhe!";
      userChosenWishDisplay.textContent = `Wish Unlocked: "${chosenWish}" ✨`;
    }, 500);
  }

  function relightCandles() {
    const candles = document.querySelectorAll('.candle-unit');
    candles.forEach(c => c.classList.remove('blown'));
    candlesBlownCount = 0;
    btnBlowCandles.disabled = false;
    btnBlowCandles.style.opacity = '1';
    cakeSlice.classList.remove('served');
    cakeKnife.style.transform = 'rotate(-35deg)';
    cakeWishBanner.classList.remove('revealed');
    cakeInstruction.textContent = "Candles relit! Ready to make a wish and blow again ✨";
    audioManager.playPop();
  }

  // Wish Modal Controls
  const wishPresetsList = document.getElementById('wish-presets-list');
  const wishCustomInput = document.getElementById('wish-custom-input');
  const btnCloseWishModal = document.getElementById('btn-close-wish-modal');
  const btnConfirmWish = document.getElementById('btn-confirm-wish');

  if (wishPresetsList) {
    wishPresetsList.innerHTML = CAKE_DATA.wishOptions.map(opt => `
      <button class="wish-option-btn" data-wish="${opt.text}" type="button">
        <span class="wish-opt-icon">${opt.icon}</span>
        <div class="wish-opt-info">
          <span class="wish-opt-title">${opt.title}</span>
          <span class="wish-opt-sub">${opt.text}</span>
        </div>
      </button>
    `).join('');

    wishPresetsList.querySelectorAll('.wish-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        chosenWish = btn.getAttribute('data-wish');
        wishCustomInput.value = chosenWish;
      });
    });
  }

  if (btnMakeWish) btnMakeWish.addEventListener('click', () => wishModal.classList.add('active'));
  if (btnCloseWishModal) btnCloseWishModal.addEventListener('click', () => wishModal.classList.remove('active'));

  if (btnConfirmWish) {
    btnConfirmWish.addEventListener('click', () => {
      const customVal = wishCustomInput.value.trim();
      if (customVal) chosenWish = customVal;
      wishModal.classList.remove('active');
      cakeInstruction.textContent = `Wish locked: "${chosenWish.substring(0, 36)}..." ✨ Now blow the candles!`;
      audioManager.playPop();
    });
  }

  if (btnBlowCandles) btnBlowCandles.addEventListener('click', blowAllCandles);
  if (btnCutCake) btnCutCake.addEventListener('click', cutTheCake);
  if (cakeKnife) cakeKnife.addEventListener('click', cutTheCake);
  if (btnRelightCake) btnRelightCake.addEventListener('click', relightCandles);

  buildCandles();

  // --------------------------------------------------------------------------
  // 7. CHAPTER 02: EDITORIAL PHOTO STORY & LIGHTBOX
  // --------------------------------------------------------------------------
  const polaroidsContainer = document.getElementById('polaroids-container');
  const carouselTrack = document.getElementById('carousel-track');
  const btnCarouselPrev = document.getElementById('btn-carousel-prev');
  const btnCarouselNext = document.getElementById('btn-carousel-next');
  const btnGalleryMusic = document.getElementById('btn-gallery-music');
  const spotlightImgClick = document.getElementById('spotlight-img-click');

  const lightboxImg = document.getElementById('lightbox-main-img');
  const lightboxCaption = document.getElementById('lightbox-caption-text');
  const btnLightboxClose = document.getElementById('btn-lightbox-close');
  const btnLightboxPrev = document.getElementById('btn-lightbox-prev');
  const btnLightboxNext = document.getElementById('btn-lightbox-next');
  let currentLightboxIdx = 0;

  function openLightbox(index) {
    if (!PHOTO_GALLERY[index]) return;
    currentLightboxIdx = index;
    const photo = PHOTO_GALLERY[index];
    lightboxImg.src = photo.src;
    lightboxImg.alt = `${photo.title} - ${photo.tag}`;
    lightboxCaption.textContent = `${photo.title} • ${photo.caption}`;
    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
  }

  function navigateLightbox(dir) {
    let nextIdx = currentLightboxIdx + dir;
    if (nextIdx < 0) nextIdx = PHOTO_GALLERY.length - 1;
    if (nextIdx >= PHOTO_GALLERY.length) nextIdx = 0;
    openLightbox(nextIdx);
  }

  if (btnLightboxClose) btnLightboxClose.addEventListener('click', closeLightbox);
  if (btnLightboxPrev) btnLightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (btnLightboxNext) btnLightboxNext.addEventListener('click', () => navigateLightbox(1));

  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  if (spotlightImgClick) {
    spotlightImgClick.addEventListener('click', () => openLightbox(0));
    spotlightImgClick.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(0);
      }
    });
  }

  if (polaroidsContainer) {
    polaroidsContainer.innerHTML = PHOTO_GALLERY.map((p, idx) => `
      <article class="polaroid-card" data-index="${idx}" tabindex="0" role="button" aria-label="Polaroid: ${p.title}">
        <div class="polaroid-tape" aria-hidden="true"></div>
        <div class="polaroid-img-wrapper">
          <img src="${p.src}" alt="${p.title}" class="polaroid-img" loading="lazy">
        </div>
        <div class="polaroid-meta">
          <span class="polaroid-theme-tag">${p.tag}</span>
          <span style="font-size: 0.8rem; color: #a894aa;">#${idx + 1}</span>
        </div>
        <p class="polaroid-caption-text">"${p.caption}"</p>
      </article>
    `).join('');

    polaroidsContainer.querySelectorAll('.polaroid-card').forEach(card => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      card.addEventListener('click', () => openLightbox(idx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });
  }

  if (carouselTrack) {
    carouselTrack.innerHTML = PHOTO_GALLERY.map((p, idx) => `
      <div class="carousel-item-card" data-index="${idx}" tabindex="0" role="button" aria-label="Slide ${p.title}">
        <img src="${p.src}" alt="${p.title}" loading="lazy">
        <div class="carousel-item-caption">${p.title} 🌸</div>
      </div>
    `).join('');

    carouselTrack.querySelectorAll('.carousel-item-card').forEach(item => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      item.addEventListener('click', () => openLightbox(idx));
    });
  }

  if (btnCarouselPrev && carouselTrack) {
    btnCarouselPrev.addEventListener('click', () => carouselTrack.scrollBy({ left: -260, behavior: 'smooth' }));
  }

  if (btnCarouselNext && carouselTrack) {
    btnCarouselNext.addEventListener('click', () => carouselTrack.scrollBy({ left: 260, behavior: 'smooth' }));
  }

  if (btnGalleryMusic) {
    btnGalleryMusic.addEventListener('click', () => {
      audioManager.transitionToTrack('gallan_goodiyaan', true);
      confettiEngine.fire(40);
    });
  }

  // --------------------------------------------------------------------------
  // 8. CHAPTER 03: RADHA KE CUTE NAKHRE 🤭
  // --------------------------------------------------------------------------
  const btnCheckDrama = document.getElementById('btn-check-drama');
  const meterGaugeFill = document.getElementById('meter-gauge-fill');
  const meterStatusDisplay = document.getElementById('meter-status-display');
  const meterFunLine = document.getElementById('meter-fun-line');

  if (btnCheckDrama) {
    btnCheckDrama.addEventListener('click', () => {
      btnCheckDrama.disabled = true;
      meterFunLine.classList.remove('visible');
      const stages = NAKHRE_DATA.dramaMeter.stages;

      stages.forEach((stage, idx) => {
        setTimeout(() => {
          meterGaugeFill.style.width = `${stage.percent}%`;
          meterStatusDisplay.textContent = stage.label;
          audioManager.playPop();

          if (idx === stages.length - 1) {
            meterFunLine.classList.add('visible');
            confettiEngine.fire(70);
            btnCheckDrama.disabled = false;
            btnCheckDrama.textContent = "Check Again 🎭";
          }
        }, idx * 600);
      });
    });
  }

  const btnGetCompliment = document.getElementById('btn-get-compliment');
  const complimentDisplayText = document.getElementById('compliment-display-text');
  let lastComplimentIdx = -1;

  if (btnGetCompliment) {
    btnGetCompliment.addEventListener('click', () => {
      const pool = NAKHRE_DATA.compliments;
      let nextIdx = Math.floor(Math.random() * pool.length);
      while (nextIdx === lastComplimentIdx && pool.length > 1) {
        nextIdx = Math.floor(Math.random() * pool.length);
      }
      lastComplimentIdx = nextIdx;

      complimentDisplayText.style.opacity = '0';
      complimentDisplayText.style.transform = 'translateY(10px)';

      setTimeout(() => {
        complimentDisplayText.textContent = `"${pool[nextIdx]}"`;
        complimentDisplayText.style.opacity = '1';
        complimentDisplayText.style.transform = 'translateY(0)';
        audioManager.playPop();
      }, 200);
    });
  }

  // --------------------------------------------------------------------------
  // 9. CHAPTER 04: LITTLE THINGS THAT MAKE YOU, YOU 🌸
  // --------------------------------------------------------------------------
  const littleThingsGrid = document.getElementById('little-things-grid');
  if (littleThingsGrid) {
    littleThingsGrid.innerHTML = LITTLE_THINGS_DATA.map(item => `
      <article class="little-thing-card" tabindex="0">
        <div class="little-thing-top">
          <span class="little-thing-icon" aria-hidden="true">${item.icon}</span>
          <span class="little-thing-highlight">${item.highlight}</span>
        </div>
        <h3 class="little-thing-title">${item.title}</h3>
        <p class="little-thing-text">"${item.text}"</p>
      </article>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 10. CHAPTER 05: A MEMORY I STILL REMEMBER 💭
  // --------------------------------------------------------------------------
  const btnOpenMemoryEnvelope = document.getElementById('btn-open-memory-envelope');
  const memoryLetterSheet = document.getElementById('memory-letter-sheet');
  const memoryLetterBody = document.getElementById('memory-letter-body');

  if (memoryLetterBody) {
    memoryLetterBody.textContent = MEMORY_DATA.letterContent;
  }

  if (btnOpenMemoryEnvelope) {
    btnOpenMemoryEnvelope.addEventListener('click', () => {
      const isOpen = memoryLetterSheet.classList.toggle('open');
      audioManager.playPop();
      if (isOpen) {
        confettiEngine.fire(45);
        btnOpenMemoryEnvelope.querySelector('span').textContent = "Fold Letter Back ✉️";
      } else {
        btnOpenMemoryEnvelope.querySelector('span').textContent = "Tap to Unfold Letter ✉️";
      }
    });

    btnOpenMemoryEnvelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btnOpenMemoryEnvelope.click();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. CHAPTER 06: SECRET SURPRISE ENVELOPES 💌
  // --------------------------------------------------------------------------
  const envelopesGrid = document.getElementById('envelopes-grid');
  if (envelopesGrid) {
    envelopesGrid.innerHTML = SECRET_ENVELOPES_DATA.map((env, idx) => `
      <article class="envelope-card" data-index="${idx}" tabindex="0" role="button" aria-label="${env.title}">
        <div class="wax-seal-stamp" aria-hidden="true">${env.sealIcon}</div>
        <h3 class="envelope-card-title">${env.title}</h3>
        <span class="envelope-card-hint">Tap Wax Seal to Open 💌</span>
        <div class="envelope-revealed-letter">
          "${env.message}"
        </div>
      </article>
    `).join('');

    envelopesGrid.querySelectorAll('.envelope-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('opened');
        audioManager.playPop();
        confettiEngine.fire(35);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 12. CHAPTER 07: THE HEARTFELT BIRTHDAY LETTER ❤️
  // --------------------------------------------------------------------------
  const letterParagraphsContainer = document.getElementById('letter-paragraphs-container');
  const letterSalutation = document.getElementById('letter-salutation');
  const letterSignoff = document.getElementById('letter-signoff');

  if (letterSalutation) letterSalutation.textContent = BIRTHDAY_LETTER_DATA.salutation;
  if (letterSignoff) letterSignoff.textContent = BIRTHDAY_LETTER_DATA.signoff;

  if (letterParagraphsContainer) {
    letterParagraphsContainer.innerHTML = BIRTHDAY_LETTER_DATA.paragraphs.map(p => `
      <p class="letter-paragraph">${p}</p>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 13. CHAPTER 08: MAGICAL FINALE ✨
  // --------------------------------------------------------------------------
  const btnFinaleCelebrate = document.getElementById('btn-finale-celebrate');
  const btnReplayMagic = document.getElementById('btn-replay-magic');

  if (btnFinaleCelebrate) {
    btnFinaleCelebrate.addEventListener('click', () => {
      confettiEngine.fire(140);
      audioManager.playPop();
    });
  }

  if (btnReplayMagic) {
    btnReplayMagic.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      confettiEngine.fire(50);
    });
  }

});
