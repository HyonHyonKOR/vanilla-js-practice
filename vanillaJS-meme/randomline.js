const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

/* drawlines*/
const colors = [
  '#cd84f1',
  '#ffcccc',
  '#ff4d4d',
  '#ffaf40',
  '#fffa65',
  '#32ff7e',
  '#7efff5',
  '#18dcff',
  '#7d5fff',
  '#4b4b4b',
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  console.log(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener('mousemove', onClick);
