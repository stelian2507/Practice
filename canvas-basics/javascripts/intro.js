// javascripts/intro.js
const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

// ****************************
// draw rectangle:
// ****************************
 
ctx.fillStyle = 'purple';
ctx.fillRect(160, 160, 50, 50);

// ****************************
// draw path
// ****************************

// start the path
ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);

// .stroke() executes the drawing
ctx.stroke();

// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 100);
// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();


// javascripts/intro.js
// ...

// ****************************
// draw circle
// ****************************

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();
