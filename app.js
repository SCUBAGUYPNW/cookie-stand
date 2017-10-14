'use strict';
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var firstAndPike = {
  storeName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);
    return randCustByHour;
  },
  cookiesPerHour: function() {
    for (var j = 0; j < this.storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.customerNum() * this.avg_cookies));
    }
    return this.cookiesSoldByHour;
  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < this.storeHours.length; i++) {
      totalDailyCookies += this.cookiesSoldByHour[i];
    }
    return totalDailyCookies;
  }
};

var h3El = document.createElement('h3');
heEl.textContent = this.storeName;
storeName.appendChild(h3EL);
for (var k = 0; k < hours.length; k++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
  console.log(liEl);
  firstAndPike.appendChild(liEl);
}
