// This is an empty Object; Defined by the 'curly braces' in Javascript
var cat = {}; // This is the preferred method to create an object.
// OR
var bunny = new Object();

// Objects have properties (adjectives)
var dog = {
  color: 'black',
  size: 'large',
  legs: 4,
  hungry: false,
};

// We can assign new or reassign existing values of objects using 'DOT-Notation'
dog.longHair = true;

var newProperty = 'breed';
dog[newProperty] = 'Lab';

dog.hungry = true;
dog['color'] = 'blue';

// Objects can also have methods (verbs)
var turtle = {
  color: 'green',
  mutant: 'yes',
  ninja: true,
  pizzaLevel: Math.random() * 10,

  eat: function(hunger) {
    if (hunger <= 4) {
      console.log('It\'s cool brah, I only at half the pizza!');
    } else if (hunger > 4 && hunger < 8) {
      console.log('Totally Bodacious! I\'m starved!!');
    } else {
      console.log('MMMM-NOM-NOM-NOM');
    }
  }
};
