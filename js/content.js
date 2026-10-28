/**
 * content.js - Central Data, Copy, Photo Manifest & Audio Metadata for Project Radha
 * Celebrates Payal Patil (Queen Radha) on her milestone 18th Birthday
 */

export const RECIPIENT_DATA = {
  fullName: "Payal Patil",
  nickname: "Radha",
  affectionateName: "Queen Radhe",
  dob: "2008-10-29",
  birthdayDisplay: "October 29, 2008",
  celebrationDate: "2026-10-29",
  milestoneAge: 18,
  tagline: "For the world, Payal. For me, Queen Radha 👑",
  heroQuote: "A little magic, infinite smiles, and all the love in the world for our Queen Radha! Celebrating 18 glorious years of beauty, grace, laughter, and that royal charm."
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
 * Intelligent section to audio track mapping
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
 * Curated 14 Editorial Photographs Manifest with Romantic & Respectful Hinglish Captions
 */
export const PHOTO_GALLERY = [
  {
    id: "photo-01",
    src: "./assets/images/gallery/radha_01.jpg",
    title: "The Royal Smile 🌸",
    tag: "Queen Radha • Khushi 💫",
    caption: "Radhe, teri smile mein ek alag hi noor hai. Jab tu hasti hai na, poori jagah roshan ho jaati hai! Always keep smiling like the queen you are. 🌷👑",
    tone: "smiling",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-02",
    src: "./assets/images/gallery/radha_02.jpg",
    title: "Simplicity & Grace ✨",
    tag: "Natural Charm • Saadgi 💖",
    caption: "Sundar toh bohot log hote hain, lekin teri simplicity aur calm vibes ka apna hi royal charm hai. Effortless elegance at its finest! ✨🌸",
    tone: "elegant",
    aspect: "portrait"
  },
  {
    id: "photo-03",
    src: "./assets/images/gallery/radha_03.jpg",
    title: "The Dreamy Pari 🧚‍♀️",
    tag: "Masoomiyat & Glow 💫",
    caption: "Pari hone ke liye pankh nahi chahiye hote, bas aisi ek pyaari si smile aur pure golden heart kaafi hai. Radiating pure sweetness! 🧚‍♀️💖",
    tone: "portrait",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-04",
    src: "./assets/images/gallery/radha_04.jpg",
    title: "Pure & Unfiltered 🌿",
    tag: "100% Original Radhe 🌸",
    caption: "No filters, no pretenses — bas Radha ka apna sweet aur bindaas andaaz. True beauty lies in being genuinely, unapologetically yourself! 🌿💫",
    tone: "natural",
    aspect: "portrait"
  },
  {
    id: "photo-05",
    src: "./assets/images/gallery/radha_05.jpg",
    title: "Mischief & Cuteness 😜",
    tag: "Cute Nakhre • Drama Queen 🎀",
    caption: "Thodi si masoom, thodi si mischievous! Teri naughty laughter aur cute expressions are literally the best mood-lifter in this world. 🤭👑",
    tone: "playful",
    aspect: "portrait"
  },
  {
    id: "photo-06",
    src: "./assets/images/gallery/radha_06.jpg",
    title: "Grace Personified 🌸",
    tag: "Royal Poise • Adaa 🌷",
    caption: "The way you carry yourself with so much dignity, warmth, and sweetness… ek dum classy queen vibes! Grace in every single breath. 🌸✨",
    tone: "elegant",
    aspect: "portrait"
  },
  {
    id: "photo-07",
    src: "./assets/images/gallery/radha_07.jpg",
    title: "The Sweet 18 Queen 👑",
    tag: "Milestone 18 • Royalty 🎂",
    caption: "Officially stepping into 18 with total confidence and grace! Aaj ki Queen Radha ko poora haq hai to rule hearts and shine brighter than stars. 👑💖",
    tone: "milestone",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-08",
    src: "./assets/images/gallery/radha_08.jpg",
    title: "Sunshine Energy ☀️",
    tag: "Golden Aura • Positive Vibes 🌻",
    caption: "Teri positive energy pure sunshine jaisi hai. One glimpse of your bright smile and all gloomy days turn into golden memories. Keep glowing! ☀️💛",
    tone: "happy",
    aspect: "portrait"
  },
  {
    id: "photo-09",
    src: "./assets/images/gallery/radha_09.jpg",
    title: "The Sweet Bachpana 🎈",
    tag: "Innocent Joy • Dil Se Khush 💖",
    caption: "Apna woh pyaara sa bachpana kabhi mat khona, Radhe. Teri woh carefree hassi aur chhoti baaton pe khushi is your purest superpower! 🎈🌸",
    tone: "candid",
    aspect: "portrait"
  },
  {
    id: "photo-10",
    src: "./assets/images/gallery/radha_10.jpg",
    title: "Effortless Magic 💫",
    tag: "Timeless Charm • Noor 🌷",
    caption: "Kuch log bina kuch special kiye bhi moments ko unforgettable bana dete hain. That is the rare, timeless magic of Queen Radha! 💫✨",
    tone: "candid",
    aspect: "portrait"
  },
  {
    id: "photo-11",
    src: "./assets/images/gallery/radha_11.jpg",
    title: "Radiant Warmth 💖",
    tag: "Dil Ko Chhoo Lene Wali 🌸",
    caption: "Chehre pe aisi masoom muskaan jo dil ko sukoon aur chehre pe muskaan la de. May your life be filled with as much sweetness as your smile! 💖🌷",
    tone: "smiling",
    aspect: "portrait"
  },
  {
    id: "photo-12",
    src: "./assets/images/gallery/radha_12.jpg",
    title: "Queen In Saree 🥻👑",
    tag: "Royal Saree Look • Breathtaking ✨",
    caption: "The iconic traditional look that stole everyone's breath away! Royal jewelry, stunning saree, and that mesmerizing Queen Radha smile. Pure royalty! 🥻👑💖",
    tone: "portrait",
    aspect: "portrait",
    featured: true
  },
  {
    id: "photo-13",
    src: "./assets/images/gallery/radha_13.jpg",
    title: "Golden Hour Glow 🌅",
    tag: "Golden Radiance • Chamak 💫",
    caption: "Dhoop se zyada roshan aur warm toh teri smile lagti hai. May your 18th year and all coming days shine brighter than golden sunshine! 🌅✨",
    tone: "portrait",
    aspect: "portrait"
  },
  {
    id: "photo-14",
    src: "./assets/images/gallery/radha_14.jpg",
    title: "Radha's Little Universe 🌷",
    tag: "Forever Queen • Endless Love 👑",
    caption: "Hasti raho, muskuraati raho, aur hamesha aisi hi bindaas aur pyaari raho. You deserve all the love, respect, and infinite happiness in this universe! 🌷👑💖",
    tone: "candid",
    aspect: "portrait"
  }
];

/**
 * Radha Ke Cute Nakhre Data - Enhanced Drama Meter & 36 Royal Compliments
 */
export const NAKHRE_DATA = {
  title: "Radha Ke Cute Nakhre 🤭",
  subtitle: "Thodi si filmy, thodi si innocent… aur 100% hamari Queen Radha! 👑",
  dramaMeter: {
    buttonText: "Check Radhe's Drama Level 🎭",
    finalTitle: "100% Certified Queen Radha! 👑",
    finalMessage: "Drama ho ya na ho, entertainment and cuteness toh full guaranteed hai! 😂💖",
    stages: [
      { percent: 25, label: "Sweet Innocent Masoom Ladki 😇 (Bholi Bhali Queen)", color: "#A8D5BA" },
      { percent: 50, label: "Thodi Si Filmy Heroine 🎬 (Bollywood Style Grace)", color: "#F3E2C5" },
      { percent: 75, label: "High Voltage Nakhre Alert! ⚡ (Royal Drama in Action)", color: "#E5A9B4" },
      { percent: 100, label: "100% Certified Queen Radha! 👑 (Pyaar Bhare Cute Nakhre!)", color: "#DCD5FF" }
    ]
  },
  compliments: [
    "Queen Radha, jab tu traditional saree pehanti hai na, toh poora crowd bas dekhta hi reh jaata hai! Pure royal elegance. 🥻👑",
    "Your smile isn't just pretty, Radhe — it has that magical superpower to turn any gloomy day into pure sunshine! ☀️✨",
    "Teri aankhon ki masoomiyat aur chehre ka noor is 100% divine. True definition of natural grace and beauty! 🌸💖",
    "Confidence, kindness, and royal charm — Queen Radha combines them all with effortless perfection. 👑✨",
    "Duniya chahe kitni bhi serious ho jaaye, teri sweet laughter is like an instant festival of happiness! 🎊🌷",
    "The way you smile with your whole heart is the most attractive and beautiful thing ever. Never stop smiling! 💖",
    "Ek taraf cute masoom nakhre, aur doosri taraf classy royal grace — only our Queen Radha can balance both so gorgeously! 🤭👑",
    "You don't need any spotlight, Radhe... jahan tu khadi ho jaati hai, wahi glow shuru ho jaata hai! ✨💫",
    "Teri saadgi hi teri sabse badi khoobsurati hai. Simple, soulful, yet breathtakingly attractive! 💖🌸",
    "Sweet 18 has never looked this graceful, poised, and full of positive vibes. Happy 18th to the true Queen! 🎂👑",
    "Radhe, teri ek pyaari si smile dekh ke kisi ka bhi din 10x better ho sakta hai! Pure golden energy. ☀️🌷",
    "Sundari toh bohot dekhi hongi duniya ne, par Queen Radha jaisi charm, respectful adaa aur sweetness kisi ke paas nahi! 👑",
    "Your heart is even more beautiful than your photos — and that's saying something because you look stunning in every single frame! 📸💖",
    "No filters, no pretenses — just 100% authentic Radha charm that wins everyone's admiration instantly! 🌿✨",
    "Tujhe dekh ke lagta hai ki Bollywood heroines bhi teri natural beauty aur grace ke aage fail hain! Filmy vibe + Royal Grace. 🎬👑",
    "Tere cute nakhre are not drama, they are premium entertainment! Always keep this joyful spirit alive! 🎭😂",
    "May your 18th milestone year bring you as much love, sparkle, and royalty as you bring into our lives! 🌟👑",
    "Radhe, tu sirf khoobsurat nahi hai, teri presence mein ek alag hi positive sukoon aur warmth hai. 🌷💖",
    "In a world full of temporary trends, Queen Radha remains an eternal classic. Timeless elegance! 👑💫",
    "Whenever life feels rushed, your calm, infectious smile reminds everyone to celebrate the sweet little moments. 🌸✨",
    "The crown looks completely natural on you because you rule hearts with your kindness and sweet warmth! 👑💖",
    "Teri hasi mein ek aisi positivity hai jo kisi ke bhi tension ko instantly gayab kar sakti hai! 🕊️✨",
    "Radhe, you are living proof that beauty and brains, cuteness and grace, can exist together in one extraordinary person! 🌷",
    "Today, tomorrow, and always — remember that you are deeply admired, respected, and treasured for the Queen you are. 👑💖",
    "Yeh jo saree wala look hai na, Radhe... this is straight out of a royal fairytale! Absolute perfection. 🥻✨",
    "May your laughter stay this loud, your dreams this big, and your heart this purely golden forever and ever! 💛🌸",
    "You don't just celebrate a birthday today, Queen Radha; the whole day celebrates having someone as radiant as you! 🎂🌷",
    "Kuch logon ki muskaan dil chhu leti hai, aur teri smile toh seedha dil mein ghar bana leti hai! 💖✨",
    "Keep shining with that unmatched Radha sparkle — you are truly one of a kind in this whole universe! 🌌👑",
    "Har photo mein tera ek alag hi roop hai, par har roop mein wahi same masoom aur charming Radhe chamakti hai! 📸🌷",
    "Radhe, your positive aura is so refreshing that even ordinary days feel special when you're smiling! 🌈✨",
    "You carry traditional wear like a royal princess and modern wear like a star — versatile, charming and iconic! 🥻👗👑",
    "Duniya chahe kitni bhi badal jaye, tera yeh pyaara sa dil aur sweet andaaz hamesha aisi hi chamakta rahe! 💖",
    "Tere chehre ki glow kisi makeup ki mohtaaj nahi — inner beauty shines right through your eyes! ✨🌷",
    "Queen Radha, you deserve all the bouquets of roses, all the sweet melodies, and the happiest moments in the universe! 🌹👑",
    "Happy 18th Birthday, our forever Queen Radha! Stay blessed, stay gorgeous, and keep ruling hearts! 👑🌷✨"
  ]
};

/**
 * Special Mini-Game: Find Radha's Magic ✨
 */
export const MAGIC_GAME_DATA = {
  title: "Find Radha's Magic ✨",
  subtitle: "Thoda sa magic, thodi si masti… ready, Queen Radhe?",
  pairs: [
    { type: "butterfly", name: "Butterfly", icon: "🦋", label: "Butterfly" },
    { type: "flower", name: "Flower", icon: "🌸", label: "Flower" },
    { type: "star", name: "Star", icon: "⭐", label: "Star" },
    { type: "heart", name: "Heart", icon: "💖", label: "Heart" },
    { type: "crown", name: "Crown", icon: "👑", label: "Crown" },
    { type: "ribbon", name: "Ribbon", icon: "🎀", label: "Ribbon" }
  ],
  victoryPhoto: "./assets/images/gallery/radha_02.jpg",
  victoryTitle: "Magic Unlocked! ✨👑",
  victoryQuote: "Dekha Radhe, thoda sa magic toh har jagah hota hai… aur aaj ka din toh waise bhi hamari Queen ka special day hai!\n\nHappy 18th Birthday, Queen Radha! 🌷👑"
};

/**
 * Birthday Cake Interactive Options & Wishes
 */
export const CAKE_DATA = {
  candlesCount: 18,
  wishOptions: [
    { id: "wish-joy", title: "Endless Joy & Royal Smiles 🌸", icon: "👑", text: "May Queen Radha's life be filled with sweet laughter and pure happiness every single day!" },
    { id: "wish-dreams", title: "Dreams Conquering the World ✨", icon: "✨", text: "May all your biggest dreams and royal ambitions soar to the highest skies with grace!" },
    { id: "wish-peace", title: "Peace, Love & Beautiful Health 🕊️", icon: "💖", text: "May your heart always be surrounded with warm love, great health, and peaceful contentment." },
    { id: "wish-adventure", title: "Magical Adventures & Success 🚀", icon: "🌟", text: "May this 18th year bring you thrilling adventures, immense success, and joyful milestones!" }
  ],
  celebrationWish: "Happy 18th Birthday, Queen Radhe! May all your secret wishes, grandest dreams, and royal moments come true ✨👑🎂"
};

/**
 * Little Things That Make You, YOU 🌸
 */
export const LITTLE_THINGS_DATA = [
  {
    icon: "👑",
    title: "That Royal Queen Smile",
    highlight: "Warm, radiant & heartwarming",
    text: "Teri smile mein ek alag hi noor hai — jab tu hasti hai na, the whole atmosphere lights up with pure positive energy! It is effortlessly magnetic."
  },
  {
    icon: "🥻",
    title: "Breathtaking Traditional Grace",
    highlight: "Saree Elegance & Royalty",
    text: "Traditional saree look ho ya casual andaaz, Queen Radha carries herself with a poise that leaves everyone in awe. Pure royal vibes!"
  },
  {
    icon: "✨",
    title: "Simple & Down To Earth",
    highlight: "Saadgi hi teri sabse badi shaan hai",
    text: "Radhe, asli khoobsurati teri simplicity mein hai. Badi badi baatein nahi, tera genuine aur humble behaviour hi tujhe sabse alag aur special banata hai."
  },
  {
    icon: "🎈",
    title: "The Sweetest Cute Bachpana",
    highlight: "Innocent spark that melts hearts",
    text: "Apna woh cute bachpana aur masti kabhi mat khona. Teri woh innocent laughter aur pyaare se expressions are the purest thing in this universe."
  },
  {
    icon: "🌿",
    title: "Natural & Unfiltered Beauty",
    highlight: "100% Pure & Authentic",
    text: "No pretenses, zero drama needed — just natural charm, sparkling eyes, and a heart full of warmth. You are completely one of a kind."
  },
  {
    icon: "💖",
    title: "The Magic You Bring Along",
    highlight: "Spreading sunshine everywhere",
    text: "You don't just celebrate 18 years today; you celebrate 18 years of spreading joy, smiles, and unforgettable sweet memories to everyone around you."
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

Kuch yaadein badi nahi hoti… bas dil mein hamesha ke liye reh jaati hain. 🌷👑`
};

/**
 * Secret Surprise Envelopes 💌
 */
export const SECRET_ENVELOPES_DATA = [
  {
    id: "env-smile",
    title: "Open When You Want to Smile",
    sealIcon: "🌸",
    color: "#F8DDE7",
    message: "Hey Queen Radhe, agar aaj smile karne ka koi reason na mile, toh bas mirror mein dekh le! Wahan ek stunning, charming Queen smile already wait kar rahi hai. Keep smiling, because your smile rules hearts! 🌷👑"
  },
  {
    id: "env-encouragement",
    title: "Open When You Need Encouragement",
    sealIcon: "✨",
    color: "#DCD5FF",
    message: "Radhe, you are born to shine! Kabhi agar life mein thoda doubt lage, toh yaad rakhna ki tera confidence, teri grace aur teri mehnat kisi se kam nahi hai. Walk like a queen — the universe is cheering for you! ✨👑"
  },
  {
    id: "env-birthday",
    title: "Open When It's Your Birthday",
    sealIcon: "🎂",
    color: "#E8C170",
    message: "HAPPY 18TH BIRTHDAY, QUEEN RADHA! 🎂👑 Today is all about YOU — the beauty, the charm, the laughter, and the royal milestones ahead. May your year be as extraordinary and lovely as you are! 💖✨"
  },
  {
    id: "env-sad",
    title: "Open When You're Feeling Low",
    sealIcon: "💙",
    color: "#C8E6FF",
    message: "Hey Radhe, kabhi kabhi badal suraj ko chhipa lete hain, but suraj ki chamak kabhi khatam nahi hoti. The girl who brightens everyone else's world deserves all the happiness in return. Sab theek ho jayega, aur tu phir se waise hi muskuraayegi. Promise! 🌷💖"
  },
  {
    id: "env-proud",
    title: "Open When You've Won or Succeeded",
    sealIcon: "👑",
    color: "#D5F5E3",
    message: "I ALWAYS KNEW YOU WOULD DO IT! 🎉 Queen Radha doesn't just aim, she conquers! This victory is proof of your hard work, talent, and dedication. Wear your crown high, celebrate with full energy, and keep inspiring! 👑🌟"
  },
  {
    id: "env-missing",
    title: "Open When You Miss Old Memories",
    sealIcon: "🎈",
    color: "#FFF0D5",
    message: "Growing up into 18 is wonderful, but Radhe, your sweet innocence, cute bachpana, and warm laughter will never fade. Always treasure the little moments — because you make every memory golden. 🎈🌷✨"
  }
];

/**
 * The Heartfelt Birthday Letter ❤️
 */
export const BIRTHDAY_LETTER_DATA = {
  title: "For You, Queen Radhe ❤️",
  subtitle: "A personal letter celebrating your milestone 18th birthday.",
  salutation: "Hey Queen Radhe,",
  paragraphs: [
    "Happy 18th Birthday, Payal! 🌷👑",
    "Aaj ke is milestone din par, I just want to celebrate the wonderful, charming, and graceful person you are.",
    "Duniya mein bohot saare log aate hain aur jaate hain, lekin kuch log apne noor, apni saadgi aur apni pyari si smile se dil mein ek permanent jagah bana lete hain — aur tu bilkul waisi hi hai.",
    "Tera woh traditional saree wala roop ho ya daily life ka mast-maula bachpana, teri aankhon ki masoomiyat ho ya teri contagious hasi — every single quality makes you the true Queen Radha.",
    "As you step into 18, I wish life blesses you with unlimited happiness, boundless love, inspiring achievements, and countless moments that make you smile ear-to-ear.",
    "Kabhi apne aap ko kisi aur ke liye change mat karna. You are rare, you are precious, and you are 100% iconic just the way you are.",
    "Thank you for bringing your warm light, your sweet laughter, and your lovely presence into our lives.",
    "Enjoy your special day to the absolute fullest, Queen! Happy 18th Birthday once again! ❤️👑✨"
  ],
  signoff: "— Mahesh"
};

/**
 * Magical Finale ✨
 */
export const FINALE_DATA = {
  title: "Keep Shining, Queen Radhe ✨👑",
  quote: `May your days be blessed with sweet laughter,
your dreams with infinite wings,
and your royal heart with everlasting joy.

Happy 18th Birthday to our one & only Queen Radha! 🌷👑💖`,
  credit: "Crafted with pure admiration & love, just to make you smile."
};
