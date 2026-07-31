const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Heart shape mathematical calculation
function pointOnHeart(t) {
  return {
    x: 160 * Math.pow(Math.sin(t), 3),
    y: -(130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t))
  };
}

const particles = [];
const particleCount = 400;

for (let i = 0; i < particleCount; i++) {
  const t = Math.PI * 2 * Math.random();
  const pos = pointOnHeart(t);
  
  particles.push({
    x: width / 2 + pos.x,
    y: height / 2 + pos.y,
    alpha: 0,
    maxAlpha: Math.random() * 0.8 + 0.2,
    speed: Math.random() * 0.02 + 0.005,
    text: Math.random() > 0.5 ? 'I Love You' : '❤️'
  });
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, width, height);

  particles.forEach(p => {
    if (p.alpha < p.maxAlpha) {
      p.alpha += p.speed;
    }

    ctx.fillStyle = `rgba(255, 105, 180, ${p.alpha})`;
    ctx.font = '12px sans-serif';
    ctx.fillText(p.text, p.x, p.y);
  });

  requestAnimationFrame(animate);
}

animate();
