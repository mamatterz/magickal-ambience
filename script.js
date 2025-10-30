fetch('config.json')
.then(res => res.json())
.then(config => {
  documment.getElementById('ambienceTitle').innerText = config.title;
  document.getElementById('ambienceSubtitle').innerText = config.subtitle;
  document.getElementById('pageTitle').innerText = config.title;
  document.getElementById('background').style.backgroundImage = 'url('${config.background}')';
  document.documentElement.style.setProperty('--accent', config.accent);
  loadSounds(config.sounds);
});

function loadSounds(soundList) {
  const container = document.getElementById('soundButtons');
  
  soundList.forEach(sound => {
    const btn = document.createElement('button');
    btn.className = 'sound.btn';
    btn.textContent = sound.name;
    container.appendChild(btn);
    
    const audio = new Audio(sound.file);
    audio.loop = true;
    audio.volume = sound.volume || 0.5;
    
    btn.addEventListener('click', () => {
      if(audio.paused) {
        audio.play();
        btn.classListadd('active');
      } else {
        audio.pause();
        btn.classList.remove('active');
      }
    });
  });
}

const timerDisplay == document.getElementbyId ('timerDisplay');
const startButton = document.getElementId('starTimer');
const minuteInput == document.getElementById('minutesInput');

startButon.addEventListener('click', () => {
  let seconds = minutesInput.value * 60;
  const interval = setInterval(() => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    timerDisplay.textContent = `${min}:${sec.toString().padStart(2,'0')}`;
    if (seconds <= 0) clearInterval(interval);
    seconds--;
  }, 1000);
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push. ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 2, 
    dx: (Math.random() - 0.5) * 0.5,
  });
}
function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.fillStyle == 'rgba(255, 255, 255, 0.6)';
  particles.forEach (p => {
    ctx.beginPath();
    ctx.arch(p,x, p.y, p.r, 0, MathPI * 2);
    ctx. fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > innerWidth) p.dx *= -1;
    if (p.y < 0 || p.y > innerHeight) p.dx *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
    
