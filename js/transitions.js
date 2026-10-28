/**
 * transitions.js - Ambient Petals & Confetti Canvas Engine, and Stage 1 Screen Transitions
 */

class AmbientParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.isPaused = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.colors = [
      'rgba(248, 221, 231, 0.45)', // blush
      'rgba(220, 213, 255, 0.40)', // lavender
      'rgba(243, 226, 197, 0.40)', // champagne
      'rgba(255, 255, 255, 0.55)'  // ivory glow
    ];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    if (!this.reducedMotion) {
      this.initParticles();
      this.animate();
    }
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = Math.min(35, Math.floor(window.innerWidth / 30));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: Math.random() * 8 + 5,
      speedY: Math.random() * 0.7 + 0.3,
      speedX: Math.sin(Math.random() * Math.PI) * 0.5,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      type: Math.random() > 0.4 ? 'petal' : 'star'
    };
  }

  drawPetal(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.rotate(p.angle);
    this.ctx.fillStyle = p.color;

    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.quadraticCurveTo(p.size, -p.size / 2, p.size * 1.5, 0);
    this.ctx.quadraticCurveTo(p.size, p.size / 2, 0, 0);
    this.ctx.fill();

    this.ctx.restore();
  }

  drawStar(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.fillStyle = p.color;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    if (this.isPaused || this.reducedMotion) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += Math.sin(p.angle) * 0.5;
      p.angle += p.angularSpeed;

      if (p.y > this.height + 20) {
        p.y = -20;
        p.x = Math.random() * this.width;
      }
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;

      if (p.type === 'petal') {
        this.drawPetal(p);
      } else {
        this.drawStar(p);
      }
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused && !this.reducedMotion) {
      this.animate();
    }
    return this.isPaused;
  }
}

/**
 * Confetti Cannon Canvas Emitter
 */
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.confettiPieces = [];
    this.animId = null;
    this.palette = ['#F8DDE7', '#DCD5FF', '#F3E2C5', '#E5A9B4', '#E8C170', '#A8D5BA'];

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(count = 90) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.resize();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.45;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      this.confettiPieces.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 8 + 6,
        color: this.palette[Math.floor(Math.random() * this.palette.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.18,
        drag: 0.98,
        alpha: 1
      });
    }

    if (!this.animId) {
      this.render();
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.confettiPieces.length - 1; i >= 0; i--) {
      const c = this.confettiPieces[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += c.gravity;
      c.vx *= c.drag;
      c.vy *= c.drag;
      c.rotation += c.rotSpeed;
      c.alpha -= 0.007;

      if (c.alpha <= 0 || c.y > this.canvas.height) {
        this.confettiPieces.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, c.alpha);
      this.ctx.translate(c.x, c.y);
      this.ctx.rotate((c.rotation * Math.PI) / 180);
      this.ctx.fillStyle = c.color;
      this.ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.65);
      this.ctx.restore();
    }

    if (this.confettiPieces.length > 0) {
      this.animId = requestAnimationFrame(() => this.render());
    } else {
      this.animId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

export { AmbientParticleEngine, ConfettiEngine };
