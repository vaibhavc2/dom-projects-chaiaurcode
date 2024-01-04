const cursor = document.querySelector('.cursor');

// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

let colorIndex = 0;
const circle = document.querySelector('.cursor');
let prevPositionX = 0;
let prevPositionY = 0;

document.addEventListener('mousemove', function(e) {
  // update circle position
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
  
  // change color
  if((Math.abs(prevPositionX - e.pageX) < 20) || (Math.abs(e.pageY - prevPositionY) < 20)) return;
  colorIndex = (colorIndex + 1) % colors.length;
  circle.style.backgroundColor = colors[colorIndex];

  // update prev positions
  prevPositionX = e.pageX;
  prevPositionY = e.pageY;
});