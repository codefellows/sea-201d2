// MDN Guide for forms - Great resource!
// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms

// User Form
//TODO: Get this done

// The below example is one of several ways to set up your events handlers:
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', function(event){
  event.preventDefault();
  // this is one way to get data out of the input fields
  var eventFirstName = event.target.first_name.value;
  // this is a second way to do the same thing; get data out of inputs
  var idFirstName = document.getElementById('first_name').value;
});

// The below example is a second of several ways to do this: Recall I said that this would be a final pass to DRY your code?
document.getElementById('user-form').addEventListener('submit', function(event){
  event.preventDefault();
  // this is one way to get data out of the input fields
  var eventFirstName = event.target.first_name.value;
  // this is a second way to do the same thing; get data out of inputs
  var idFirstName = document.getElementById('first_name').value;
});
