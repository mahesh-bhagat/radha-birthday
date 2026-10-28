/**
 * content.js - Central Data, Copy, Photo Manifest & Audio Metadata for Project Radha (Stage 3 Refined)
 */

export const RECIPIENT_DATA = {
  fullName: "Payal Patil",
  nickname: "Radha",
  affectionateName: "Radhe",
  dob: "2008-10-29",
  birthdayDisplay: "October 29, 2008",
  celebrationDate: "2026-10-29",
  milestoneAge: 18,
  tagline: "For the world, Payal. For me, Radha.",
  heroQuote: "A little magic. A lot of smiles. All for you. Celebrating 18 wonderful years of warmth, laughter, and your infectious sparkle."
};

/**
 * Five verified local songs in assets/audio/
 */
export const AUDIO_TRACKS = {
  heeriye: {
    id: "heeriye",
    title: "Heeriye",
    artist: "Jasleen Royal & Arijit Singh",
    file: "./assets/audio/heeriye.mp3",
    description: "Soulful acoustic melody for heartfelt chapters & emotional memories"
  },
  london_thumakda: {
    id: "london_thumakda",
    title: "London Thumakda",
    artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar",
    file: "./assets/audio/london_thumakda.mp3",
    description: "Celebration anthem triggered right after cake cutting"
  },
  gallan_goodiyaan: {
    id: "gallan_goodiyaan",
    title: "Gallan Goodiyaan",
    artist: "Yashita Sharma, Manish Kumar Tipu, Shankar Mahadevan",
    file: "./assets/audio/gallan_goodiyaan.mp3",
    description: "Upbeat joyful groove for the memories photo gallery"
  },
  tere_pyaar_mein: {
    id: "tere_pyaar_mein",
    title: "Tere Pyaar Mein",
    artist: "Arijit Singh & Nikhita Gandhi",
    file: "./assets/audio/tere_pyaar_mein.mp3",
    description: "Vibrant high-energy celebration kick-off for surprise unlock, hero & cute nakhre"
  },
  happy_birthday: {
    id: "happy_birthday",
    title: "Happy Birthday Celebration",
    artist: "Birthday Instrumental",
    file: "./assets/audio/happy_birthday.mp3",
    description: "Joyful celebratory track for lighting & blowing the 18 candles"
  }
};

/**
 * Intelligent section to audio track mapping (Stage 3 Refined)
 */
export const SECTION_AUDIO_MAP = {
  "intro-screen": "tere_pyaar_mein",
  "hero-section": "tere_pyaar_mein",
  "section-cake": "happy_birthday",
  "section-cake-cut": "london_thumakda",
  "section-gallery": "gallan_goodiyaan",
  "section-nakhre": "tere_pyaar_mein",
  "section-little-things": "heeriye",
  "section-memory": "heeriye",
  "section-envelopes": "heeriye",
  "section-letter": "heeriye",
  "section-finale": "heeriye"
};

/**
 * Curated 14 Editorial Photographs Manifest
 */
export const PHOTO_GALLERY = [
  {
    id: "photo-01",
    src: "./assets/images/gallery/radha_01.jpg",
    title: "The Smile",
    tag: "Signature Smile 🌷",
    caption: "Radhe, teri smile mein ek alag hi khushi hai. Bas aise hi hasti rehna. 🌷",
    tone: "smiling",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-02",
    src: "./assets/images/gallery/radha_02.jpg",
    title: "The Sundari",
    tag: "Simplicity ✨",
    caption: "Sundar toh bahut log hote hain, lekin teri simplicity ka apna hi charm hai.",
    tone: "elegant",
    aspect: "portrait"
  },
  {
    id: "photo-03",
    src: "./assets/images/gallery/radha_03.jpg",
    title: "The Pari",
    tag: "Dreamy Vibe 🧚‍♀️",
    caption: "Pari hone ke liye pankh nahi chahiye. Kabhi kabhi ek pyaari si smile hi kaafi hoti hai. ✨",
    tone: "portrait",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-04",
    src: "./assets/images/gallery/radha_04.jpg",
    title: "The Natural Beauty",
    tag: "Unfiltered 🌿",
    caption: "No filters needed. Just Radhe being Radhe.",
    tone: "natural",
    aspect: "portrait"
  },
  {
    id: "photo-05",
    src: "./assets/images/gallery/radha_05.jpg",
    title: "The Cute One",
    tag: "Too Cute 😜",
    caption: "Warning: Too much cuteness detected! 😜",
    tone: "playful",
    aspect: "portrait"
  },
  {
    id: "photo-06",
    src: "./assets/images/gallery/radha_06.jpg",
    title: "The Elegant One",
    tag: "Grace 🌸",
    caption: "Simple, graceful, aur bilkul apne andaaz mein.",
    tone: "elegant",
    aspect: "portrait"
  },
  {
    id: "photo-07",
    src: "./assets/images/gallery/radha_07.jpg",
    title: "The Birthday Queen",
    tag: "Milestone 18 👑",
    caption: "Aaj ki queen ko officially unlimited attention allowed hai! 👑",
    tone: "milestone",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-08",
    src: "./assets/images/gallery/radha_08.jpg",
    title: "The Happy Vibes",
    tag: "Golden Aura ☀️",
    caption: "Keep smiling, keep shining, and never lose your beautiful little spark.",
    tone: "happy",
    aspect: "portrait"
  },
  {
    id: "photo-09",
    src: "./assets/images/gallery/radha_09.jpg",
    title: "The Bachpana",
    tag: "Pure Joy 🎈",
    caption: "Apna woh cute sa bachpana kabhi mat khona. Duniya ko thodi aur khushi chahiye.",
    tone: "candid",
    aspect: "portrait"
  },
  {
    id: "photo-10",
    src: "./assets/images/gallery/radha_10.jpg",
    title: "The Magic",
    tag: "Effortless Sparkle 💫",
    caption: "Kuch log bina kuch special kiye bhi moments ko special bana dete hain.",
    tone: "candid",
    aspect: "portrait"
  },
  {
    id: "photo-11",
    src: "./assets/images/gallery/radha_11.jpg",
    title: "Pure Radiance",
    tag: "Warmth 💖",
    caption: "Chehre pe hamesha wahi masoom muskaan bani rahe.",
    tone: "smiling",
    aspect: "portrait"
  },
  {
    id: "photo-12",
    src: "./assets/images/gallery/radha_12.jpg",
    title: "Charming Poise",
    tag: "Signature Look 💫",
    caption: "Ek aisi presence jo har jagah thoda sa noor bikherti hai.",
    tone: "portrait",
    aspect: "portrait"
  },
  {
    id: "photo-13",
    src: "./assets/images/gallery/radha_13.jpg",
    title: "Golden Hour Glow",
    tag: "Shine ✨",
    caption: "May your 18th year be as bright and cheerful as your laughter.",
    tone: "portrait",
    aspect: "portrait"
  },
  {
    id: "photo-14",
    src: "./assets/images/gallery/radha_14.jpg",
    title: "Everlasting Smiles",
    tag: "Radha's Universe 🌷",
    caption: "Haste raho, muskuraate raho, aur hamesha aisi hi bindaas raho!",
    tone: "candid",
    aspect: "portrait"
  }
];

/**
 * Radha Ke Cute Nakhre Data (Cleaned up: Only Drama Meter & Compliment Generator)
 */
export const NAKHRE_DATA = {
  title: "Radha Ke Cute Nakhre 🤭",
  subtitle: "Thodi si cute, thodi si filmy… aur full-on Radhe!",
  dramaMeter: {
    buttonText: "Check Radhe's Drama Level 🎭",
    finalTitle: "100% Cute Nakhre Certified! 👑",
    finalMessage: "Drama ho ya na ho, entertainment toh full guaranteed hai! 😂",
    stages: [
      { percent: 25, label: "Sweet Innocent Masoom Ladki 😇", color: "#A8D5BA" },
      { percent: 50, label: "Thodi Si Filmy Heroine 🎬", color: "#F3E2C5" },
      { percent: 75, label: "High Voltage Nakhre On Alert! ⚡", color: "#E5A9B4" },
      { percent: 100, label: "100% Cute Nakhre Certified! 👑", color: "#DCD5FF" }
    ]
  },
  compliments: [
    // Original curated compliments
    "Your smile deserves its own fan club. 🌷",
    "Radhe, tu apne aap mein ek alag hi vibe hai. ✨",
    "Thodi si pari, thodi si sundari, aur 100% original. 👑",
    "Stay the same wonderfully unique person you are. 💖",
    "Teri simplicity bhi teri khoobsurati ka ek hissa hai. 🌸",
    "Aaj ka birthday crown officially tera hai! 👑",
    "Kuch log bina kuch special kiye bhi moments ko special bana dete hain. 🌟",
    "Duniya mein bohot log hain, par Radhe jaisi bas ek hi hai! 💫",
    "Teri hasi se pure room ka mood instantly brighten ho jata hai. ☀️",
    "Sweet 18 looks absolutely magical on you! 🎂",

    // Five requested new compliments
    "Radhe, teri smile ki ek special baat hai… woh simple hoke bhi bahut beautiful lagti hai. Bas aise hi muskurati rehna. 🌷",
    "Sundari sirf looks se nahi hoti, Radhe. Tera simple sa andaaz bhi tujhe alag banata hai. ✨",
    "Tujhe shayad pata bhi nahi hoga, but sometimes your simplest moments become someone's favorite memories. 🦋",
    "Duniya chahe kitni bhi serious ho jaaye, tu apna woh pyaara sa bachpana kabhi mat khona. 💗",
    "Na kisi se compare karna hai, na kisi jaisa banna hai. Radhe, tu apne aap mein hi special hai. 👑"
  ]
};

/**
 * Special Mini-Game: Find Radha's Magic ✨
 * 6 matching pairs (12 cards total)
 */
export const MAGIC_GAME_DATA = {
  title: "Find Radha's Magic ✨",
  subtitle: "Thoda sa magic, thodi si masti… ready, Radhe?",
  pairs: [
    { type: "butterfly", name: "Butterfly", icon: "🦋", label: "Butterfly" },
    { type: "flower", name: "Flower", icon: "🌸", label: "Flower" },
    { type: "star", name: "Star", icon: "⭐", label: "Star" },
    { type: "heart", name: "Heart", icon: "💖", label: "Heart" },
    { type: "crown", name: "Crown", icon: "👑", label: "Crown" },
    { type: "ribbon", name: "Ribbon", icon: "🎀", label: "Ribbon" }
  ],
  victoryPhoto: "./assets/images/gallery/radha_02.jpg",
  victoryTitle: "Magic Unlocked! ✨",
  victoryQuote: "Dekha Radhe, thoda sa magic toh har jagah hota hai… aur aaj ka din toh waise bhi special hai!\n\nHappy Birthday, Sundari! 🌷"
};

/**
 * Birthday Cake Interactive Options & Wishes
 */
export const CAKE_DATA = {
  candlesCount: 18,
  wishOptions: [
    { id: "wish-joy", title: "Endless Joy & Smiles", icon: "🌸", text: "May laughter fill every single day of your year!" },
    { id: "wish-dreams", title: "Dreams Come True", icon: "✨", text: "May all your biggest ambitions take flight with grace!" },
    { id: "wish-peace", title: "Peace & Good Health", icon: "🕊️", text: "May your heart be calm, content, and always surrounded by warmth." },
    { id: "wish-adventure", title: "Unstoppable Adventures", icon: "🚀", text: "May you explore new heights, new places, and thrilling moments!" }
  ],
  celebrationWish: "Happy 18th Birthday, Radhe! May all your secret wishes come true ✨"
};

/**
 * Little Things That Make You, YOU 🌸
 */
export const LITTLE_THINGS_DATA = [
  {
    icon: "🌷",
    title: "That Effortless Smile",
    highlight: "Real, warm & unposed",
    text: "Teri smile mein ek genuine warmth hai — not the posed camera smile, but the real one that lights up everything around you."
  },
  {
    icon: "✨",
    title: "Simple & Down To Earth",
    highlight: "Simplicity hi teri shaan hai",
    text: "Radhe, kabhi kabhi badi badi cheezein nahi, chhoti chhoti baatein hi kisi ko special banati hain. Your natural simplicity is rare."
  },
  {
    icon: "🎈",
    title: "Cute Bachpana",
    highlight: "Innocent spark that stays",
    text: "Apna woh bachpana kabhi mat khona. Teri woh khushi aur masti is duniya ko thodi aur khubsoorat banati hai."
  },
  {
    icon: "🌿",
    title: "Natural & Unfiltered",
    highlight: "100% Original Presence",
    text: "No pretenses, no filters needed. Just an effortless grace in the way you speak, laugh, and carry yourself."
  },
  {
    icon: "💫",
    title: "Love For Little Moments",
    highlight: "Magic in small things",
    text: "How you find happiness in simple things — peaceful vibes, a funny joke, sweet laughter. That innocence is your biggest superpower."
  },
  {
    icon: "🌸",
    title: "Your Dreams & Sparkle",
    highlight: "Ready to conquer 18",
    text: "Wishing you the courage to chase every single dream you hold close to your heart, without ever dimming your light."
  }
];

/**
 * A Memory I Still Remember 💭
 */
export const MEMORY_DATA = {
  title: "Ek Chhoti Si Yaad… 💭",
  subtitle: "A quiet, cherished memory locked in an interactive envelope.",
  letterContent: `Radhe, ek chhoti si baat hai jo shayad tujhe yaad bhi na ho.

Ek baar jab tu hamare ghar aayi thi, humne bas thodi si baat ki thi. Aur uss chhote se moment mein, jab tune meri taraf mudkar baat ki, mujhe teri aankhon mein aur teri smile mein kuch bahut hi pyaara laga.

Shayad tere liye woh ek normal sa moment tha, but mere liye woh ek beautiful memory ban gaya.

Kuch yaadein badi nahi hoti… bas dil mein reh jaati hain. 🌷`
};

/**
 * Secret Surprise Envelopes 💌 (Simplified to exactly three)
 */
export const SECRET_ENVELOPES_DATA = [
  {
    id: "env-smile",
    title: "Open When You Want to Smile",
    sealIcon: "🌸",
    color: "#F8DDE7",
    message: "Agar aaj smile karne ka koi reason nahi mil raha, toh bas mirror dekh le! Ek pyaari si smile wahan already wait kar rahi hai. Keep shining, Radhe! 🌷"
  },
  {
    id: "env-encouragement",
    title: "Open When You Need a Little Encouragement",
    sealIcon: "✨",
    color: "#DCD5FF",
    message: "You are capable of doing amazing things, Radhe. Kabhi agar thoda sa doubt ho, toh yaad rakhna ki tera potential kisi se kam nahi hai. Step forward with confidence — you've got this! ✨"
  },
  {
    id: "env-birthday",
    title: "Open When It's Your Birthday",
    sealIcon: "🎂",
    color: "#E8C170",
    message: "HAPPY 18TH BIRTHDAY! 🎂 Today the universe celebrates YOU. Unlimited cake, endless laughter, and all the happiest moments in the world belong to you today! 👑"
  },
  {
    id: "env-sad",
    title: "Open When You're Feeling Low",
    sealIcon: "💙",
    color: "#C8E6FF",
    message: "Hey Radhe, kuch din thode heavy hote hain — aur woh bilkul okay hai. But remember: the girl who makes everyone around her smile deserves to smile the most. This too shall pass, aur tum phir se chamkogi. Promise. 🌷"
  },
  {
    id: "env-proud",
    title: "Open When You've Achieved Something",
    sealIcon: "👑",
    color: "#D5F5E3",
    message: "I KNEW IT! I knew you'd do it! 🎉 Mujhe pehle se pata tha ki tu kar legi. This is YOUR moment, Radhe — own it completely. You worked for this, you deserve every bit of it. Now go celebrate properly! 👑✨"
  },
  {
    id: "env-missing",
    title: "Open When You Miss Being a Kid",
    sealIcon: "🎈",
    color: "#FFF0D5",
    message: "Bachpan ka woh carefree feeling… ek dum special tha, hai na? But Radhe, growing up doesn't mean losing that spark. Tumhari woh innocent khushi, woh genuine laughter — those never have to go away. Apna woh bachpana kabhi mat khona. 🎈🌷"
  }
];

/**
 * The Heartfelt Birthday Letter ❤️
 */
export const BIRTHDAY_LETTER_DATA = {
  title: "For You, Radhe ❤️",
  subtitle: "A personal letter on your milestone 18th birthday.",
  salutation: "Hey Radhe,",
  paragraphs: [
    "Happy 18th Birthday! 🌷",
    "Aaj bas ek chhoti si baat kehni thi.",
    "Life mein bahut log milte hain, lekin kuch log apne simple se andaaz se hi special ban jaate hain.",
    "Teri smile, tera bachpana, teri simplicity — these are the little things I genuinely appreciate about you.",
    "I hope life gives you beautiful opportunities, wonderful friendships, countless reasons to laugh, and the courage to chase every dream you have.",
    "Aur haan, kabhi apne aap ko kisi aur ke liye badalne ki zarurat mat samajhna. Be the wonderful person you are.",
    "Thank you for being a lovely part of my life.",
    "I hope this little surprise makes you smile.",
    "Happy Birthday once again, Radhe! ❤️"
  ],
  signoff: "— Mahesh"
};

/**
 * Magical Finale ✨
 */
export const FINALE_DATA = {
  title: "Keep Shining, Radhe ✨",
  quote: `May your days be filled with laughter,
your dreams with possibilities,
and your heart with endless happiness.

Happy 18th Birthday, Radhe! 🌷`,
  credit: "Made with care, just to make you smile."
};
