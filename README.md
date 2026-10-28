# 🌸 Radha's Little Universe (Project Radha) — Stage 2 Release

A luxury, interactive birthday microsite created for **Payal Patil** (affectionately called **Radha / Radhe**), celebrating her milestone 18th birthday (**DOB: October 29, 2008**).

---

## 🌟 Stage 2 Implementation Overview

Stage 2 transforms the site into a rich, multi-chapter interactive experience adhering to all design, motion, and accessibility guardrails.

### 📁 Architecture & File Structure

```
project-radha/
├── index.html                   # Semantic HTML5 layout with Cake, Gallery, Nakhre, and Lightbox
├── README.md                    # Project documentation & Stage 2 release report
├── css/
│   ├── tokens.css               # Color tokens (Blush, Champagne, Lavender, Gold, Plum) & typography
│   ├── base.css                 # Smooth scroll, canvas backdrops, skip links, focus states
│   ├── components.css           # Glassmorphism panels, interactive buttons, modal dialogs
│   ├── sections.css             # 3D Tiered Cake, Polaroid Scrapbook, Filmstrip, Nakhre mini-apps
│   └── responsive.css           # Responsive breakpoints (320px, 375px, 768px, 1024px, 1440px)
├── js/
│   ├── app.js                   # Application coordinator for cake, candles, gallery, and nakhre interactions
│   ├── audio.js                 # Multi-melody Web Audio synth fallback, sound effects & local MP3 engine
│   ├── content.js               # Central data store, 14 curated photos manifest, compliments, and audio map
│   └── transitions.js           # Ambient rose petal canvas & multi-colored confetti cannon emitter
└── assets/
    ├── images/
    │   ├── hero_portrait.jpg    # Payal's high-res portrait for the birthday hero spotlight
    │   ├── hero-portrait.svg    # Editorial placeholder fallback
    │   ├── gallery/             # 14 Curated web-optimized photographs (EXIF stripped)
    │   │   ├── radha_01.jpg ... radha_14.jpg
    │   └── radha-photos/        # Original 28 high-resolution photographs preserved safely
    └── audio/
        └── README.md            # Placement directory for upcoming authorized MP3 audio tracks
```

---

## 🎂 How the Birthday Cake Works (Chapter 01)

1. **3D Tiered Visual**: Styled using Vanilla CSS gradients and shadows with piping swirls, strawberries, champagne wafer base, and ornate golden platter.
2. **18 Milestone Candles**: 18 individual candles placed along the top tier. Each candle features a flickering animated flame (`.candle-flame`) and realistic smoke particle animation (`.candle-smoke`).
3. **Make a Wish Modal**: Radhe can tap "Make a Wish ✨" to choose from 4 blessings (*Endless Joy & Smiles*, *Dreams Come True*, *Peace & Good Health*, *Unstoppable Adventures*) or type her own custom secret wish.
4. **Candle Blowing**: Radhe can tap individual candles or tap "Blow Candles 🌬️" to blow them all at once. Accompanied by a realistic whoosh sound effect and fading ember glow.
5. **Cake Cutting**: Tapping "Cut the Cake 🔪" triggers the knife cutting animation. A cake slice neatly separates and glides onto the platter, accompanied by a confetti cannon blast and the celebratory fanfare track (*London Thumakda* / chime).
6. **Blessing Reveal**: Unveils the celebratory blessing card showcasing her chosen wish with a relight option.

---

## 📸 Photo Selection System & Curation (Chapter 02)

- **Source Photos**: All 28 original photos in `assets/images/radha-photos/` were analyzed for resolution, orientation, clarity, lighting, and expression variety.
- **Privacy & Optimization**: 14 top photos were selected, resized to optimal web dimensions (max 1600px, 200–500 KB), and all camera/device EXIF metadata was completely stripped.
- **Editorial Presentation**:
  - **Spotlight Hero Portrait**: Grand gold filigree framed portrait.
  - **Polaroid Scrapbook Grid**: Realistic polaroids with organic tilt angles (`-2deg` to `+2.5deg`), washi-tape headers, and handwritten captions using Google Fonts `Caveat`.
  - **Memories Filmstrip Carousel**: Smooth horizontal scroll track with next/previous arrow navigation and touch swipe.
  - **Fullscreen Lightbox**: Click any photo to inspect full-size with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).

---

## 🤭 Radha Ke Cute Nakhre (Chapter 03)

- **The Drama Meter 🎭**: Animated gauge calculating Radhe's expression quotient, landing on *"100% Cute Nakhre Certified! 👑"* with the fun line *"Drama ho ya na ho, entertainment toh full guaranteed hai! 😂"*.
- **Chocolate vs. Ice Cream Duel 🍨**: Interactive choice between Silk Chocolate and Berry Ice Cream with playful reaction banners.
- **Surprise Compliment Generator 🌸**: Card revealing non-repeating heartfelt compliments (*"Your smile deserves its own fan club"*, *"Thodi si pari, thodi si sundari, aur 100% original"*).
- **Birthday Happiness Meter ✨**: 5 floating smile booster charms (⭐ Star, 🍫 Chocolate, 🌸 Rose, 🧁 Cupcake, 👑 Crown) that fill the happiness gauge to 100% upon collection.

---

## 🎶 Audio Experience & Song Setup

The site supports zero-friction playback with a built-in Web Audio synthesizer fallback when MP3s are absent, plus persistent mute state.

When you are ready to add the songs, place them in `assets/audio/`:

| Cue Key | Target File | Suggested Song |
| :--- | :--- | :--- |
| `surprise_unlocked` | `assets/audio/surprise_unlocked.mp3` | *Abhi Toh Party Shuru Hui Hai* |
| `birthday_celebration` | `assets/audio/birthday_celebration.mp3` | *London Thumakda* |
| `photo_slideshow` | `assets/audio/photo_slideshow.mp3` | *Gallan Goodiyaan* |
| `cute_nakhre` | `assets/audio/cute_nakhre.mp3` | *Sweety Tera Drama* |

---

## 🌐 Local Preview

The site is currently running live on:
**[http://localhost:3456/](http://localhost:3456/)**
