function renderMonths() {
  // Create an array of Months
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Get the 'months' element from index.html and assign it to monthsEl variable
  var monthsEl = document.getElementById('months');
  // Create a new UL element <ul></ul>
  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode('Months'));

  // Loop through the months array, one index at a time
  for (var i = 0; i < months.length; i++) {
    // For each iteration of the loop; Create an LI element <li></li>
    var liEl = document.createElement('li');
    // For each LI element; Assign the contents of the array[i] to the LI's text content
    liEl.textContent = months[i];
    // Append the populated LI element back to the UL as a Child
    ulEl.appendChild(liEl);
  }
  // Append the completely populated UL to the monthsEl element in index.html
  monthsEl.appendChild(ulEl);
}
// Call the renderMonths function
renderMonths();



//  THE CODE BELOW IS EXAMPLE PSEUDOCODE FOR THE ASSIGNMENT

// // An array of hours for your stores
// var hours = [];
//
// // Object Literal for each store
// var pikePlace = {
//   // All the properties of your object!!
//
//   randCustomer: function(min, max) {
//     // Generate a random number based on min and max arguments passed in when this function is called
//   },
//
//   generateHourly: function() {
//     // For each index in the hours array:
//       // Generate a random amount of cookies (avg * random num)
//       // Push the value to the hourly cookies array
//       // Add the value to the daily cookie total
//   },
//
//   render: function() {
//     // Create a UL Element
//     // Append a textNode to the UL element that will display the name of the store
//     // Assign the store_data element to a variable; document.getElementById
//     // Append the Ul element to your HTML document
//
//     // For each index in the hours array:
//       // Create an LI element
//       // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
//       // Append the LI element to the UL element as a Child
//
//     // Create an LI element
//     // Assign the content of your stores Daily Total to the LI element
//     // Append the LI element to the UL as a Child
//   }
// };
// // Call your render function
