var data;
var images = [];
var files = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

function Photo(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 1;
  data.labels.push(name);
  data.datasets[0].data.push(0);
  images.push(this);
}

function buildPhoto() {
  for (var i = 0; i < files.length; i++) {
    var filePath = 'images/' + files[i] + '.jpg';
    new Photo(files[i], filePath);
  }
  localStorage.setItem('images', JSON.stringify(images)); // This line is new
} 

function checkLocal() { // This function wrapper is new, and some content
  if (localStorage.chartData && localStorage.images) {
    data = JSON.parse(localStorage.chartData); // line 24 and 25 are two different ways to get data from Local Storage
    images = JSON.parse(localStorage.getItem('images'));
  } else {
    data = {
      labels: [],
      datasets: [
        {
          label: 'Kittehz!!',
          fillColor: "rgba(25, 207, 205, 0.5)",
          strokeColor: "rgba(25, 207, 205, 0.8)",
          highlightFill: "rgba(25, 207, 205, 0.75)",
          highlightStroke: "rgba(25, 207, 20 5, 1)",
          data: []
        }
      ]
    };
    buildPhoto();
  }
} checkLocal();

var tracker = {
  left: '',
  right: '',
  leftImgEl: document.getElementById('leftPhoto'),
  rightImgEl: document.getElementById('rightPhoto'),
  leftCaption: document.getElementById('capLeft'),
  rightCaption: document.getElementById('capRight'),

  getRandomNum: function() {
    return Math.floor(Math.random() * images.length);
  },

  getRandomImg: function() {
    this.left = images[this.getRandomNum()];
    this.right = images[this.getRandomNum()];
    
    if (this.left === this.right) {
      this.getRandomImg();
    }

    this.leftImgEl.src = this.left.path;
    this.leftImgEl.id = this.left.name;
    this.leftCaption.textContent = this.left.name;

    this.rightImgEl.src = this.right.path;
    this.rightImgEl.id = this.right.name;
    this.rightCaption.textContent = this.right.name;
  },

  vote: function(id) {
    for (var i in images) {
      if (images[i].name === id) {
        images[i].votes += 1;
        data.datasets[0].data[i] = images[i].votes;
        chart.datasets[0].bars[i].value = images[i].votes;
      }
    }
    localStorage.setItem('chartData', JSON.stringify(data)); // This line is new
  }
}

var ctx = document.getElementById('catChart').getContext('2d');
var chart = new Chart(ctx).Bar(data, {
  scaleShowVerticalLines: false,
  scaleShowHorizontalLines: true,
  barStrokeWidth: 1
});

var mainContent = document.getElementById('main_content');
mainContent.addEventListener('click', function(event) {
  if (event.target.id === tracker.left.name || event.target.id === tracker.right.name) {
    tracker.vote(event.target.id);
    tracker.getRandomImg();
    chart.update();
  } else {
    console.log('Click the image, Idiot!');
  }
})

tracker.getRandomImg();
