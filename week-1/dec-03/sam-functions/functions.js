// Dec 3
// Sam's functions demo

//WHAT IS A FUNCTION?
// Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can reuse the function (rather than repeating the same set of statements). (Duckett, p.88)

// ++++++++++++++++++++++++++++++++++++++++

//Function declaration vs. function call

function woo() {    // This is the function declaration
  console.log('Wooooooo!!!!');
  alert('Wooooooo!!!!');
  document.write('Wooooooo!!!!');
}

// woo(); // This is a function call

// We'll start with this commented out, then check it in the console, first by entering only the function name 'woo' in the console, then by entering the function call 'woo()' in the console.

// These statements in the function will execute in order. Note that each statement has a semicolon, and that the code block itself does not.

// Note that some functions, like the one above do not need to be provided any information. They either contain the information that they need, or they use information that is available to them. However...

// ++++++++++++++++++++++++++++++++++++++++

// Some functions need information to be passed into them. (p.92)

// In those cases, the functions are declared with PARAMETERS and are called with ARGUMENTS.

// Declared with three parameters
function clue(who, where, weapon) {
  console.log('The murder was committed by ' + who + ' in the ' + where + ' with the ' + weapon + '.');
}

// Called with three arguments
// clue('Benton', 'bathroom', 'CSS');

// We can also call this in the console with different arguments.

// Think of the parameter names as variables that belong only to the function. The names do not have any meaning outside of the function.

// Note that we can also pass in the values of externally declared variables when the function is called:

var murderer = 'Colonel Mustard';
var crimeScene = 'library';
var toolOfDeath = 'candlestick';

// clue(murderer, crimeScene, toolOfDeath);

// ++++++++++++++++++++++++++++++++++++++++

// Getting values out of functions (p.94)

// What if we want the function to return information to the code that called it? For that, we use a 'return' statement.

function mathsAreHard(numOne, numTwo, numThree) {
  console.log('numOne is ' + numOne);
  console.log('numTwo is ' + numTwo);
  console.log('numThree is ' + numThree);
  var sum = numOne + numTwo + numThree;
  console.log('The sum of these numbers is ' + sum);
  return sum;
}

// mathsAreHard(2, 5, 9);

// Let's also inspect what each of the following gives us in the console: mathsAreHard, mathsAreHard(), and mathsAreHard(3, -5, Math.PI).

// What if we want multiple values out of a function? Let's create a new version of our previous function that shows that...

function mathsGetHarder(numOne, numTwo, numThree) {
  console.log('numOne is ' + numOne);
  console.log('numTwo is ' + numTwo);
  console.log('numThree is ' + numThree);
  var oneTimesTwo = numOne * numTwo;
  var twoOverThree = numTwo / numThree;
  var sum = numOne + numTwo + numThree;
  console.log('The sum of these numbers is ' + sum);
  var results = [sum, oneTimesTwo, twoOverThree];
  return results;
  // return [sum, oneTimesTwo, twoOverThree];
}

// console.log(mathsGetHarder(9, 5, 3) + ' is the output of mathsGetHarder(9, 5, 3)');
