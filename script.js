// Option 1: CDN
// https://cdnjs.cloudflare.com/ajax/libs/two.js/0.8.7/two.min.js

// Option 2: CodePen
// https://codepen.io/manikoth/pen/yLvzeNw.js

// Get drawing for drawing
const container = document.querySelector('section');

// parameters
let params = {
  width: 400,
  height: 400
};

// `new` instantiation Two.js
const two = new Two( params );
// append to `container`
two.appendTo( container );

// draw shape
// let circle = 
let shape = two.makeRectangle(200, 200, 180, 180);
let shape2 = two.makeCircle(200, 200, 70, 70);
let shape3 = two.makeCircle(200, 200, 30, 30);

// Properties
shape.fill = '#7851a9';
shape2.fill ='#cec8ef';
shape3.fill = '#b666d2';

// Method
shape.noStroke();
shape2.noStroke();
shape3.noStroke();

// rotate in radians
shape.rotation = Math.PI * .25;

// update animation
two.bind('update', () => {  
  // update what? 
  // shape.rotation = shape.rotation + .05;
  shape.rotation += .02;
  shape
});

// Draw to page
// two.update();
two.play();