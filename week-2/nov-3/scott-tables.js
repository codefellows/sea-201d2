var hours = ['', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p'];

var pikePlace = {
  name: 'Pike Place',
  min: 9,
  max: 54,
  avgCust: 2.3,
  hourlySale: [],
  dailyTotal: 0,

  calcRand: function() {
    return (Math.random() * (this.max - this.min + 1)) + this.min;
  },

  cookiePerHr: function() {
    for (var i = 0; i < hours.length; i++) {
      var hrly = Math.floor(this.calcRand() * this.avgCust)
      this.hourlySale.push(hrly);
      this.dailyTotal += hrly;
    }
  },

  makeList: function() {
    this.cookiePerHr();
    var tbl = document.createElement('table');

    var trElement = document.createElement('tr');

    for (var i = 0; i < hours.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = hours[i];
      trElement.appendChild(thElement);
    }
    tbl.appendChild(trElement);

    // Next, you need to complete this method so your table includes the name of the store,
    // and the table data for each hour of the day.


    document.body.appendChild(tbl);
  },
};
