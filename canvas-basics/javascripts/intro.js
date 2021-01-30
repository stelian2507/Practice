// javascripts/intro.js
const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

// ****************************
// draw rectangle:
// ****************************
 
ctx.fillStyle = 'purple';
ctx.fillRect(160, 160, 60, 60);

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
