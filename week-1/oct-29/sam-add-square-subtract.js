var dog = "woof";
var crab = 2;
var lobster = 3;

function add(a, b) {
  var cat = "meow";
  return a + b;
}

function addThenSquare(c,d) {
  return add(c,d) * add(c,d);
}

function addThenSquareThenSubtract(e, f) {
  return addThenSquare(e, f) - e - f;
}

function seagull() {
  console.log('MINE!');
}
