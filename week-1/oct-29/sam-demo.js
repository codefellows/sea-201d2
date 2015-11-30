var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');

function firstQuestion() {
  var user1 = prompt('Question 1: Was Sam born in Germany?');
  console.log('The user answered ' + user1 + ' to Question 1');
  if (user1 === 'yes') {
    // alert('You are correct! Sam WAS born in Germany!');
    ans1.innerHTML = 'You are correct! Sam WAS born in Germany!';
  } else {
    ans1.innerHTML = 'You are wrong, Sam WAS born in Germany!';
  }
}

function secondQuestion() {
  var user2 = prompt('Question 2: Do Sam\'s pets consist of cats, dogs, and an iguana?');
  console.log('The user answered ' + user2 + ' to Question 2');
  if (user2 === 'no') {
    ans2.innerHTML = 'You are correct! Sam does not have a lizard!';
  } else {
    ans2.innerHTML = 'You are wrong! Sam does not have a lizard!';
  }
}

firstQuestion();
secondQuestion();
