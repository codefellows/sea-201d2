var taValues = [34 ,67, 44, 93];

var kevin = [
  {
    value: taValues[0],
    label: 'Darcy',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: taValues[1],
    label: 'Emily',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: taValues[2],
    label: 'Jonathan',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : taValues[3],
    label: 'Kevin',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('ta-popularity').getContext('2d');

var skillsChart = new Chart(context).Doughnut(kevin, {
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
});
