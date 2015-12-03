var one = document.getElementById('one');
var scottsBeard = document.getElementById('turdFerguson');

function ques1() {
  var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
  if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
    // alert('You\'re right! Sam never lived in South Dakota!');
    one.textContent = 'You\'re right! Sam never lived in South Dakota!';
  } else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
    // alert('Nope! Sam never lived in South Dakota!');
    one.textContent = 'Nope! Sam never lived in South Dakota!';
  } else {
    alert('Please give a yes or no answer.');
  }
}

function ques2() {
   var ans2 = prompt('Does Sam have any dogs?');
  if (ans2.toLowerCase() === 'n' || ans2.toUpperCase() === 'NO') {
    scottsBeard.textContent = 'Wrong! Sam has scottsBeard dogs!';
  } else if (ans2.toLowerCase() === 'y' || ans2.toUpperCase() === 'YES') {
    scottsBeard.textContent = 'Correct! Demi is a border collie and Parker is a melan collie.';
  } else {
    alert('Please give a yes or no answer.');
  }
}

ques1();
ques2();
