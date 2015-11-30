function addCssClass() {
  var userPrompt = prompt('What color do you like (red or green)?');

  var mainH2 = document.getElementById('colors');

  if (userPrompt === 'green') {
    mainH2.className = 'green';
  } else if (userPrompt === 'red') {
    mainH2.className = 'red';
  }
}

addCssClass();
