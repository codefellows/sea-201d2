// function Hotel(name, rooms, booked) {
//   this.name = name;
//   this.rooms = rooms;
//   this.booked = booked;
//   this.checkAvailability = function() {
//     return this.rooms - this.booked;
//   };
// }

function CookieStand(storeLocation, minCustomer, maxCustomer, avgCookiesPer) {
  this.storeLocation = storeLocation;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPer = avgCookiesPer;
  this.totalCookies = [];
  this.total = 0;

  this.customersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  };

  this.cookiesPerHour = function() {
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
  };
};

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);

var seaTac = new CookieStand("SeaTac Airport", 23, 77, 8.6);

var alki = new CookieStand("Alki Beach", 3, 7, 2.4);
