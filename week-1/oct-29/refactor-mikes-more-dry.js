var prompt = ['Am I intelligent?', 'Do I pass the Turing Test?'];
var right = ['That is Correct, ', 'That is Correct, '];
var wrong = ['Wrong! As a matter of fact, I do have a mind!',
             'Wrong! Of course I pass the Turing Test, ! You are talking to me, right?'];
var error = ['You didn\'t enter either yes or no!', 'You didn\'t enter either yes or no!'];

for (i = 0; i < prompt.length; i++) {
  var answer = prompt(prompt[i]).toLowerCase();
  alert('You answered ' + q1 + '...');

  if (answer === 'yes' || q1 === 'y') {
    alert(right[i] + name + '!');
    console.log("To the first question the user correctly answered " + q1);
    corQuest += 1;
  } else if (q1 === 'no' || q1 === 'n') {
    alert(wrong[i]);
    console.log("To the first question the user incorrectly answered " + q1);
  } else {
    alert(error[i]);
    console.log('The user gave an invalid response: ' + q1);
  }
}
