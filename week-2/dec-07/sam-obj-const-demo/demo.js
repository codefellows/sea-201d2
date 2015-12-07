// Demo for objects to constructors

var shelly = {
  course: '201d2',
  lastInitial: 'y',
  hairColor: 'brown'
}

var stephen = {
  course: '201d2',
  lastInitial: 'S',
  hairColor: false,
  intro: function() {
    console.log('My last initial is ' + this.lastInitial);
  }
};

// I would need 105 lines of code to model the class this way
// (17 students * 5 lines each)

// What if... I had a function to make these many similar objects for me?

// var paul = {
//   class: '201d2',
//   lastInitial: 'S',
//   hairColor: 'auburn'
// }

// var students = new Array(17);

function Student(course, lastInitial, hairColor) {
  this.course = course;
  this.lastInitial = lastInitial;
  this.hairColor = hairColor
}

// adds a method
Student.prototype.intro =  function() {
  console.log('My last initial is ' + this.lastInitial);
};

Student.prototype.location = 'Washington'; // adds a property

var paul = new Student('201d2', 'S', 'auburn');
var patrick = new Student('201d2', 'T', 'brown');

// Efficiency!
// 5 line constructor, 17 instances of students created with a single line of code = 22 lines of code to do what we needed 105 lines for BEFORE constructors entered our lives

// var pikePlace = new CookieStand(18, 56, 4.3);
