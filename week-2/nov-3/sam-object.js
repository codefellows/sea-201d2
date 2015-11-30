var pikePlace = {
  storeLocation: "Pike Place Market",
  minCustomer: 17,
  maxCustomer: 88,
  avgCookiesPer: 5.2,
  totalCookies: [],
  total: 0,

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

  cookiesPerHour: function() {
    for (var i = 0; i < time.length; i++){
      var pike = document.getElementById('pike');
      this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
      // console.log(this.totalCookies);
      this.total += this.totalCookies[i];
      // console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);

      var hour = document.createElement('li');
      hour.innerHTML = time[i] + this.totalCookies[i];
      pike.appendChild(hour);
    }

    var dailyTotal = document.createElement('li');
    hour.innerHTML = 'Total: ' + this.total;
    pike.appendChild(dailyTotal);
  }
};
