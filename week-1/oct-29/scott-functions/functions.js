
// Implicit declaration
function hello(day, time) {
  console.log('Hi it is ' + day + ' of the week, and ' + time + ' o\'clock.');
}

hello('Thursday', '10');

// Function Expression
var hello = function() {
  console.log('Hello, I am a function expression.'); 
};

// hello();

function addition(numOne, numTwo) {
  return numOne + numTwo;
}
var nums = addition(2, 4);


function areaFunc(height, width) {
  return height * width;
}

var userHeight = prompt('What\'s the height?');
var userWidth = prompt('What\'s the width?');

console.log('Area function: ' + areaFunc(userHeight, userWidth));


var area, volume, sizes;

function getSize(height, width, depth) {
  var area = height * width;
  var volume = height * width * depth;
  var sizes = [area, volume];
  return sizes;
}

var getArea = getSize(36, 23, 89);
var getVolume = getSize(36, 23, 89)[1];


