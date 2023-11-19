const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(250, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(277.5, 200, 60, 200);

ctx.arc(308, 170, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(295, 170, 5, Math.PI, 2 * Math.PI);
ctx.arc(321, 170, 5, Math.PI, 2 * Math.PI);
ctx.fill();
