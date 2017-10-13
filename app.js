'use strict';
var firstAndPike = {
  min_customer: 23,
  max_customer: 65,
  avg_cookies: 6.3,
  arrTime: [],
  arrCookies: [],
  customerNum: function() {
    var avg_customer = Math.floor(Math.random() * (this.max_customer - this.min_customer + 1)) + this.min_customer;
    return avg_customer;
  },
  resultsObj: {},
  cookiesPerHour: function() {
    for (var i = 0; i < 15; i++) {
      var time = i + 6;
      this.arrTime.push(time);
      this.arrCookies.push(Math.round(this.customerNum() * this.avg_cookies));
    }
    return this.arrCookies;
  },
  totalCookies: function() {
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  }
};
var h3El = document.createElement('h3');
heEl.textContent = this.name;
for (var k =0; k < hours.length; k++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + this.arrCookies[k] + ' cookies';
  console.log(liEl);
  firstAndPike.appendChild(liEl)
}

      var seaTacAirport = {
        min_customer: 3
      }
