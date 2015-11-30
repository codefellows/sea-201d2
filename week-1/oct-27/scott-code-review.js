var score = 0;
alert('Hello! Lets play a guessing game');

var birthPlace = prompt('Was I born in Oregon? YES or NO');
console.log('birthplace: ' + birthPlace);

if(birthPlace.toLowerCase() === 'yes') {
  alert('Correct! I was born in Eugene, Oregon!');
  score += 1;
} else {
  alert('Wrong, I was born in Eugene, Oregon!');
}

var collegeDegree = prompt('Did I graduate college with a degree in Psychology? YES or NO');

if(collegeDegree.toLowerCase() === 'yes'){
  alert('Wrong! I earned a degree in Biology!');
  console.log('The user answered incorrect with: ' + collegeDegree);
} else {
  alert('Correct, I earned a degree in Biology!');
  console.log('The user answered correct with: ' + collegeDegree);
  score += 1;
} 

var favoriteAnimal = prompt('Is my favorite animal an Elephant? YES or NO');
console.log('Fav Animal: ' + favoriteAnimal);

if(favoriteAnimal.toLowerCase() === 'yes') {
  alert('Correct! I have always loved Elephants!');
  score += 1;
} else {
  alert('Wrong, My favorite animal is the Elephant!');
}

alert('Congratulations! You finished, and your final score is ' + score + ' out of 3!');
