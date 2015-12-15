var taValues = [34 ,67, 94, 93];

var kevin = [
  {
    value: taValues[0],
    label: 'Scott',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: taValues[1],
    label: 'Kris',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: taValues[2],
    label: 'Benton',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : taValues[3],
    label: 'Sam',
    color: '#6AE128',
    highlight: '#6AE199'
  },
  {
    value : 33,
    label: 'Kevin',
    color: '#4AE128',
    highlight: '#4AE199'
  },
  {
    value : 114,
    label: 'Nadia',
    color: '#6AE128',
    highlight: '#6AE199'
  },
  {
    value : taValues[3] + taValues[1],
    label: 'Trish',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('popularity').getContext('2d');

var popularityChart = new Chart(context).PolarArea(kevin, {
    //Number - Amount of animation steps
    animationSteps : 250,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
});
