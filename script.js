const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const memeContainer = document.getElementById('memeContainer');
const memeSound = document.getElementById('memeSound');

let fontSize = 20;

// REAL FILIPINO WORKING MEMES 🔥
const memePool = [
  "https://media.tenor.com/Co2fI7SUg1gAAAAC/tangina-ka-meme.gif",
  "https://media.tenor.com/LfyhWyt9FtYAAAAC/crying-cat.gif",
  "https://media.tenor.com/jNEXHKePsyAAAAAC/gigachad-eyebrow.gif",
  "https://media.tenor.com/xsAVnllqulUAAAAC/wag-kana-meme.gif",
  "https://media.tenor.com/U9vvCU6F0S0AAAAC/nagulat-cat-surprised.gif",
  "https://media.tenor.com/Bq2ZAlzJz2wAAAAd/iyak-crying.gif",
  "https://media.tenor.com/z8CZ2dv03I0AAAAC/pasok-sa-banga.gif",
  "https://media.tenor.com/N0P5pg7XKdoAAAAC/luh-ano-nanaman-to.gif",
  "https://media.tenor.com/JTLcFTpHZK8AAAAC/bakla-ka-ha.gif"
];

let currentMemes = [];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function reloadMemes() {
  currentMemes = [...memePool];
  shuffle(currentMemes);
}

reloadMemes(); // First load

noBtn.addEventListener('click', () => {
  fontSize += 10;
  yesBtn.style.fontSize = `${fontSize}px`;

  if (currentMemes.length === 0) reloadMemes();

  const memeUrl = currentMemes.pop();
  const img = document.createElement('img');
  img.src = memeUrl;
  img.className = 'meme-float';
  memeContainer.appendChild(img);

  memeSound.currentTime = 0;
  memeSound.play();

  createHeart();
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I love you 😍");
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 4000);
}
