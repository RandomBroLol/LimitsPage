const words = [
    "Infinite", "Unknown", "Paradox", "Mystery", "Quantum", 
    "Singularity", "Eternity", "Vacuum", "Dimension", "Entropy",
    "Time Dilation", "Multiverse", "Dark Matter", "Supernova",
    "Gravity Well", "Event Horizon", "Cosmic String", "Wormhole",
    "The average cloud weighs 1.1 million pounds",
    "Honey never spoils",
    "Octopuses have three hearts",
    "Space is completely silent", "Nah but who still says that he is tuff", "Mr Freaky", "Mr Freaky Those Who Know.", "Coding is Fun!", "Color Code: 1a1a1a1a1a1a1a1a", "Cats are so pretty and dogs too!", "Fun Fact: JellyFishes are immortal", "I miss the old days of using KRNL😣", "Roblox cheating in 2021-2023 was peak", "Synapse X was the traitor all along", "3/6/2025 aka 6.3.2025 18:45 as of now writing this",
    "Limit was here", "Climatic Change Haunts me still", "I have fear of jesus", "Climatic Change https://climateclock.world/ IN 4 YEARS!!!", "Climatic Clock the most Important Clock in the world", "Why so serious?", "Why so sigma?", "i like Privacy Thats why i use Brave the browser!", "What happen to firefox why do you sell our data now? i thought we were friends", "Roblox is a fun game!",
    "🤑🤑🤑🤑 moneyzes", "( -_•)▄︻テحكـ━一", "(ᵕ—ᴗ—)", "⚔", "⏱", "ദ്ദി（• ˕ •マ.ᐟ", "sussyඞbaka", "▶• ılıılıılıılıılıılı. 0", "𝑩𝑴𝑾☢⬜🟦🟥", "/̵͇̿̿/'̿'̿ ̿ ̿̿ ̿̿ ̿", "↻◁ ||▷↺", "★ ★ ★ ★ ★", "(≖_≖ )", "▬▬ι═══════ﺤ", "「 ✦ Limit ✦ 」", "(⸝⸝⸝╸w╺⸝⸝⸝)", "(≧ヮ≦) 💕", "Skibidi skibidi hawk tuah gyat skibidi rizz",
    "im so sigma!", "🫷🥺🫸StAwP PlEasEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", "🫷🥺🫸StAwP PlEasEEEE", "################################ Roblox when you are trying to say something", "################################", "╾━╤デ╦︻(•⤙•)", "▀▄▀▄▀▄", "˗ˏˋ 𓅰 ˎˊ˗", "⸜(｡˃ ᵕ ˂ )⸝♡", "🕊️ 🅹🅴🆂🆄🆂 🕊️", "✐ᝰ.", "(っ'-')╮ =͟͟͞͞🏀", "૮ ˙Ⱉ˙ ა rawr!",
    "Nemám strach, zatim ten život ujde", "Did you know i made this because i was bored?", "𒅒𒈔𒅒𒇫𒄆", "🗽⃢⃢🗿", "𝕊𝕌𝕊𝕊𝕐 𝔹𝔸𝕂𝔸", "̤̮", "¯\_(ツ)_/¯", "Nah im sigma 👍", "𝖜𝖔𝖒𝖕 𝖜𝖔𝖒𝖕", "〇△☆☂", "BANG BANG BANG thanos fr", "My favorite or most used word is (FR)", "ඞ💨ඩ", "Skibidisigm🐺🥶", "R🅾️🅱️L🅾️❌", "📐e = ∑∞ⁿ⁼⁰ ¹ₙ🤓", "🫷🥺🫸StAwP",
    "Skončim v půdě, ty skončíš v půdě", "Is this infinite?", "Jesus is the way", "Check out The main website too!", "▶︎ •၊၊||၊|။||||| 0:10", "𓆝 𓆟 𓆞 𓆝 𓆟", "Bye🤫🧏🏻‍♂️Bye🗿",
    "ty skončíš v půdě", "what do you think about minecraft?", "did you know limits real name is Limit4Less?", "Did you know Limit4Less was made by my friend as a name idea?", "Beam NG is the best car game aside from forza i havent tried it yet",
    "Milion Plus!", "Roblox!",  "Proverbs 14:27 Says: The fear of the LORD is a fountain of life, turning a person from the snares of death.",
    "Viktor Sheen",  "Viktor",  "PainKillers", "𐐘🤝ඞ", "ඞ",
    "Bananas are berries"
];

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;
const wordCount = 500; // Fixed number of words
const spreadFactor = 4; // How far words are spread out (multiplier of screen size)

const content = document.getElementById('content');
let allWords = [];

// Create a word element
function createWord(x, y) {
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = words[Math.floor(Math.random() * words.length)];
    word.style.fontSize = Math.random() * 24 + 12 + 'px';
    word.style.color = colors[Math.floor(Math.random() * colors.length)];
    word.style.left = x + 'px';
    word.style.top = y + 'px';
    word.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
    return word;
}

// Generate all words initially
function generateWords() {
    for (let i = 0; i < wordCount; i++) {
        const x = Math.random() * window.innerWidth * spreadFactor - window.innerWidth * (spreadFactor / 2);
        const y = Math.random() * window.innerHeight * spreadFactor - window.innerHeight * (spreadFactor / 2);
        const word = createWord(x, y);
        content.appendChild(word);
        allWords.push(word);
    }
}

// Position ASCII art randomly
const asciiArt = document.getElementById('ascii-art');
asciiArt.style.left = Math.random() * window.innerWidth * spreadFactor - window.innerWidth * (spreadFactor / 2) + 'px';
asciiArt.style.top = Math.random() * window.innerHeight * spreadFactor - window.innerHeight * (spreadFactor / 2) + 'px';

// Mouse handlers
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    
    content.style.transform = `translate(${translateX}px, ${translateY}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'grab';
});

// Initial word generation
generateWords();

// Update word count
document.getElementById('count').textContent = wordCount;

// Handle window resize
window.addEventListener('resize', () => {
    content.style.transform = `translate(${translateX}px, ${translateY}px)`;
});