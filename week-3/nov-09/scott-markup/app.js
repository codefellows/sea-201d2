images = [];

function Photo(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
}

var tracker = {
  getRandomNum: function() {
    //Get a random number and return it
    //Reference the random num method from last week
  },

  getRandImg: function() {
    //Call getRandNum for two random numbers
    //Use those random nums to access the array and get a photo
    //User the .src attrib to assign a path to each of the images
  },
}



var img1 = new Photo(name, path)
var img2 = new Photo(name, path)
var img3 = new Photo(name, path)

tracker.getRandImg();
