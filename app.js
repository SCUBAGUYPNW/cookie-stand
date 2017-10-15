'use strict';
// hardcoded store hours
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Setup the object litteral for the First and Pike location

var firstAndPike = {
  storeName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,

  // method for calculating the random customers per hour
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
    console.log(this.randCustByHour[i]);
  },
  // method for calculating how many cookies sold by hour
  calcCookiesPerHour: function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }

  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.cookiesSoldByHour[i];
      console.log(this.totalDailyCookies);
    }
  },

  render: function() {
    // firstAndPike.calcCookiesPerHour();
    //var pikeList = document.getElementById('pikeList');

    this.calcRandCustByHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    console.log(firstAndPike.randCustByHour);
    console.log(firstAndPike.cookiesSoldByHour);
    // DOM manipulation
    var pikeHead = document.getElementById('pikeHead');
    pikeHead.textContent = this.storeName;
    for(var k = 0; k < storeHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      pikeList.appendChild(liEl);
    }
    console.log(liEl);
    var listTotal = document.createElement('li');
    listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    pikeList.appendChild(listTotal);
  }
};
firstAndPike.render();

var seaTacAirport = {
  storeName: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,

  // method for calculating the random customers per hour
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
    console.log(this.randCustByHour[i]);
  },
  // method for calculating how many cookies sold by hour
  calcCookiesPerHour: function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }

  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.cookiesSoldByHour[i];
      console.log(this.totalDailyCookies);
    }
  },

  render: function() {
    // firstAndPike.calcCookiesPerHour();

    // <h3 id="seatac"></h3>
    // <ul id="sealist"></ul>
    this.calcRandCustByHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    console.log(firstAndPike.randCustByHour);
    console.log(firstAndPike.cookiesSoldByHour);
    // DOM manipulation
    var seaTacHead = document.getElementById('seaTacHead');
    seaTacHead.textContent = this.storeName;
    for(var k = 0; k < storeHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      seaList.appendChild(liEl);
    }
    console.log(liEl);
    var listTotal = document.createElement('li');
    listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    seaList.appendChild(listTotal);
  }
};
seaTacAirport.render();

var seattleCenter = {
  storeName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,

  // method for calculating the random customers per hour
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
    console.log(this.randCustByHour[i]);
  },
  // method for calculating how many cookies sold by hour
  calcCookiesPerHour: function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }

  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.cookiesSoldByHour[i];
      console.log(this.totalDailyCookies);
    }
  },

  render: function() {
    // firstAndPike.calcCookiesPerHour();

    // <h3 id="seatac"></h3>
    // <ul id="sealist"></ul>

    this.calcRandCustByHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    console.log(firstAndPike.randCustByHour);
    console.log(firstAndPike.cookiesSoldByHour);
    // DOM manipulation
    var seaCenHead = document.getElementById('seaCenHead');
    seaCenHead.textContent = this.storeName;
    for(var k = 0; k < storeHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      cenList.appendChild(liEl);
    }
    console.log(liEl);
    var listTotal = document.createElement('li');
    listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    cenList.appendChild(listTotal);
  }
};
seattleCenter.render();

var capitalHill = {
  storeName: 'Capital Hill',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,

  // method for calculating the random customers per hour
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
    console.log(this.randCustByHour[i]);
  },
  // method for calculating how many cookies sold by hour
  calcCookiesPerHour: function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }

  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.cookiesSoldByHour[i];
      console.log(this.totalDailyCookies);
    }
  },

  render: function() {
    // firstAndPike.calcCookiesPerHour();  var seaTacHead = document.getElementById('seaTacHead');

    // <h3 id="seatac"></h3>
    // <ul id="sealist"></ul>
    this.calcRandCustByHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    console.log(firstAndPike.randCustByHour);
    console.log(firstAndPike.cookiesSoldByHour);
    // DOM manipulation
    var capHillHead = document.getElementById('capHillHead');
    capHillHead.textContent = this.storeName;
    for(var k = 0; k < storeHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      capList.appendChild(liEl);
    }
    console.log(liEl);
    var listTotal = document.createElement('li');
    listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    capList.appendChild(listTotal);
  }
};
capitalHill.render();

var alki = {
  storeName: 'Alki',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalDailyCookies: 0,

  // method for calculating the random customers per hour
  calcRandCustByHour: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
    console.log(this.randCustByHour[i]);
  },
  // method for calculating how many cookies sold by hour
  calcCookiesPerHour: function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }

  },
  calcTotalDailyCookies: function() {
    for (var i = 0; i < storeHours.length; i++) {
      this.totalDailyCookies += this.cookiesSoldByHour[i];
      console.log(this.totalDailyCookies);
    }
  },

  render: function() {
    // firstAndPike.calcCookiesPerHour();  var seaTacHead = document.getElementById('seaTacHead');

    // <h3 id="seatac"></h3>
    // <ul id="sealist"></ul>
    this.calcRandCustByHour();
    this.calcCookiesPerHour();
    this.calcTotalDailyCookies();
    console.log(firstAndPike.randCustByHour);
    console.log(firstAndPike.cookiesSoldByHour);
    // DOM manipulation
    var alkiHead = document.getElementById('alkiHead');
    alkiHead.textContent = this.storeName;
    for(var k = 0; k < storeHours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      alkiList.appendChild(liEl);
    }
    console.log(liEl);
    var listTotal = document.createElement('li');
    listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    alkiList.appendChild(listTotal);
  }
};
alki.render();

//
//
//
// <h3 id="seacen"></h3>
// <ul id="cenlist"></ul>
//
//
//
// <h3 id="caphill"></h3>
// <ul id="caplist"></ul>
//
//
//
// <h3 id="alki"></h3>
// <ul id="alkilist"></ul>







// for (var k = 0; k < storeHours.length; k++) {
//}
