// MDN Guide for forms - Great resource!
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms

// User Form
var userForm = document.getElementById('user-form');

userForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target);
});


// Data Form
document.getElementById('data-form').addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target);
});
