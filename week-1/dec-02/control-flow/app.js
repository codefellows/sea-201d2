// if(conditional) {} else {}


// if(conditional) {} else if (conditional) {} else {}


// do {} while (conditional)
var value = 'yes';
do {
  console.log('Hello');
  value = 'no';
} while(value === 'yes');

var answer = 10;
do {
  var user = parseInt(prompt('What is your number'));
} while (user !== answer);

// while (conditional) {}
var answer = 10;
var user = parseInt(prompt('What is your number'));

while (typeof user !== typeof answer && user !== answer) {
  user = parseInt(prompt('Guess again.'));
}

// for (start, stop, step) {}
var arr = [1, 'Dave', true, 'blue', 'sam'];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 'sam') {
    console.log('YES!!!!');
  }
}

for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'boolean') {
    arr[i] = 'buttons';
  }
}
