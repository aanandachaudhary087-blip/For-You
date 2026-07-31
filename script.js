const canvas = document.getElementById('heart');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Math formula for heart outline
function getHeartPoint(angle, scale) {
  const x = 16 * Math.pow(Math.sin(angle), 3) * scale;
  const y = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * scale;
  return { x: width / 2 + x, y: height / 2 + y };
}

let scale = 11;
let i = 0;
const maxScale = 17;
const totalSteps = 120;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

function drawNextStep() {
  if (scale < maxScale) {
    const angle = i * (Math.PI * 2) / totalSteps;
    const pos = getHeartPoint(angle, scale);

    ctx.fillStyle = '#ffb6c1';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('I love you', pos.x, pos.y);

    i++;
    if (i >= totalSteps) {
      i = 0;
      scale++;
    }

    // Set to 35ms — slightly slower and super smooth!
    setTimeout(drawNextStep, 35); 
  }
}

drawNextStep();
