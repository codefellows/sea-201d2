function renderMonths() {
  // Create an array of Months
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Get the 'months' element from index.html and assign it to sectEl variable
  var sectEl = document.getElementById('test');
  // Create a new Table element
  var tblEL = document.createElement('table');
  // Create a new Table Row element
  var trEl = document.createElement('tr');

  // Create a header for the Row
  var thEl = document.createElement('th');
  // Populate the TH element with some basic text content
  thEl.textContent = 'Months';
  // Append the TH element to the TR element
  trEl.appendChild(thEl);


  // Loop through the months array, one index at a time
  for (var i = 0; i < months.length; i++) {
    // For each iteration of the loop; Create an LI element <li></li>
    var tdEl = document.createElement('td');
    // For each LI element; Assign the contents of the array[i] to the LI's text content
    tdEl.textContent = months[i];
    // Append the populated LI element back to the UL as a Child
    trEl.appendChild(tdEl);
  }
  // Append the populated TR element to the Table element
  tblEL.appendChild(trEl);
  // Append the completely populated UL to the sectEl element in index.html
  sectEl.appendChild(tblEL);
}
// Call the renderMonths function
renderMonths();
