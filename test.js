'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var cookiestands = document.getElementById('cookiestands');

function MakeLocation(name, minCustPerHour, maxCustPerHour,avgCookiesSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;

  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);

  this.calcRandCustByHour = function () {
    for (var i = 0; i < storeHours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
      console.log(this.randCustByHour[i] + ' random customer by hour.');
    }
  };

  this.calcCookiesPerHour = function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
    }
  };

  this.totalDailyCookies = function() {
    for (var k = 0; k < storeHours.length; k++) {
      this.totalCookies += this.cookiesSoldByHour[k];
    }
    return this.totalCookies;
  };
  this.calcRandCustByHour();
  this.calcCookiesPerHour();
  this.totalDailyCookies();

  this.createTableData = function() {
    var tableRow = document.createElement('tr');
    var tabledata = document.createElement('td');
    tabledata.textContent = this.name;
    tableRow.appendChild(tabledata);
    for (var l = 0; l < storeHours.length; l++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldByHour[l];
      tableRow.appendChild(tdEl);
    }
      var dailyTotalByStore = document.createElement('td');
      dailyTotalByStore.textContent = this.totalCookies;
      tableRow.appendChild(dailyTotalByStore);
      cookiestands.appendChild(tableRow);
  };
}

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('Seatac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capital Hill', 20, 38, 2.3);
  new MakeLocation('Seatac Airport', 2, 16, 4.6);
}

makeStands();
console.log(allLocations);

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  tableRow.appendChild(thEl);
  for(var k = 0; k < storeHours.length; k++){
    var tableHeader = document.createElement('th');
    tableHeader.textContent = storeHours[k];
    console.log(storeHours.length);
    tableRow.appendChild(tableHeader);
  }
  var tdEl4 = document.createElement('td');
  tdEl4.textContent = 'Daily Store Total';
  tableRow.appendChild(tdEl4);
  cookiestands.appendChild(tableRow);
};

function totalByHourEachStore(time) {
  var totalEachHour = 0;
  for (var l = 0 ; l < allLocations.length; l++) {
    totalEachHour += allLocations[l].cookiesSoldByHour[time];
  }
  console.log(totalEachHour);
  return totalEachHour;
}

makeHeaderRow();
function createTableData() {
  for ( var z = 0; z < allLocations.length; z++) {
    allLocations[z].createTableData();
  }
}
createTableData();

function createFooterRow () {
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'By hour:';
  tableRow.appendChild(thEl);
  var allTotal = 0;
  for (var t = 0; t < storeHours.length; t++) {
    var tdEl2 = document.createElement('td');
    allTotal += totalByHourEachStore(t);
    tdEl2.textContent = totalByHourEachStore(t);
    console.log(tdEl2 + ' This is totalEachHour.');
    tableRow.appendChild(tdEl2);
  }
  var tdAllTotal = document.createElement('td');
  tdAllTotal.textContent = allTotal;
  tableRow.appendChild(tdAllTotal);
  console.log(tdEl2 + ' This is totalEachHour.');
  cookiestands.appendChild(tableRow);
}
createFooterRow();

//grab input supplied by the client
function grabClientData(){
  event.preventDefault();
  var newStoreName = event.target.newStoreName.value;
  console.log(newStoreName);
  var maxCustPerHourClientSupplied = parseInt(event.target.maxCustPerHourClientSupplied.value);
  console.log(maxCustPerHourClientSupplied);
  var minCustPerHourClientSupplied = parseInt(event.target.minCustPerHourClientSupplied.value);
  console.log(minCustPerHourClientSupplied);
  var avgCookiesSoldPerHourClientSupplied = parseInt(event.target.avgCookiesSoldPerHourClientSupplied.value);
  console.log(avgCookiesSoldPerHourClientSupplied);
  new MakeLocation(newStoreName,maxCustPerHourClientSupplied,minCustPerHourClientSupplied,avgCookiesSoldPerHourClientSupplied);
  cookiestands.deleteRow(cookiestands.rows.length - 1);
  allLocations[allLocations.length - 1].createTableData();
  createFooterRow();
};
newStoreForm.addEventListener('submit', grabClientData);

//
//
// // hardcoded store hours
// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//
// //Setup the object litteral for the First and Pike location
//
// var firstAndPike = {
//   storeName: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalDailyCookies: 0,
//
//   // method for calculating the random customers per hour
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
//     console.log(this.randCustByHour[i]);
//   },
//   // method for calculating how many cookies sold by hour
//   calcCookiesPerHour: function() {
//     for (var j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
//       console.log(this.cookiesSoldByHour[j]);
//     }
//
//   },
//   calcTotalDailyCookies: function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       this.totalDailyCookies += this.cookiesSoldByHour[i];
//       console.log(this.totalDailyCookies);
//     }
//   },
//
//   render: function() {
//     // firstAndPike.calcCookiesPerHour();
//     //var pikeList = document.getElementById('pikeList');
//
//     this.calcRandCustByHour();
//     this.calcCookiesPerHour();
//     this.calcTotalDailyCookies();
//     console.log(firstAndPike.randCustByHour);
//     console.log(firstAndPike.cookiesSoldByHour);
//     // DOM manipulation
//     var pikeHead = document.getElementById('pikeHead');
//     pikeHead.textContent = this.storeName;
//     for(var k = 0; k < storeHours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       pikeList.appendChild(liEl);
//     }
//     console.log(liEl);
//     var listTotal = document.createElement('li');
//     listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     pikeList.appendChild(listTotal);
//   }
// };
// firstAndPike.render();
//
// var seaTacAirport = {
//   storeName: 'SeaTac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesSoldPerHour: 1.2,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalDailyCookies: 0,
//
//   // method for calculating the random customers per hour
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
//     console.log(this.randCustByHour[i]);
//   },
//   // method for calculating how many cookies sold by hour
//   calcCookiesPerHour: function() {
//     for (var j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
//       console.log(this.cookiesSoldByHour[j]);
//     }
//
//   },
//   calcTotalDailyCookies: function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       this.totalDailyCookies += this.cookiesSoldByHour[i];
//       console.log(this.totalDailyCookies);
//     }
//   },
//
//   render: function() {
//     // firstAndPike.calcCookiesPerHour();
//
//     // <h3 id="seatac"></h3>
//     // <ul id="sealist"></ul>
//     this.calcRandCustByHour();
//     this.calcCookiesPerHour();
//     this.calcTotalDailyCookies();
//     console.log(firstAndPike.randCustByHour);
//     console.log(firstAndPike.cookiesSoldByHour);
//     // DOM manipulation
//     var seaTacHead = document.getElementById('seaTacHead');
//     seaTacHead.textContent = this.storeName;
//     for(var k = 0; k < storeHours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       seaList.appendChild(liEl);
//     }
//     console.log(liEl);
//     var listTotal = document.createElement('li');
//     listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     seaList.appendChild(listTotal);
//   }
// };
// seaTacAirport.render();
//
// var seattleCenter = {
//   storeName: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesSoldPerHour: 3.7,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalDailyCookies: 0,
//
//   // method for calculating the random customers per hour
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
//     console.log(this.randCustByHour[i]);
//   },
//   // method for calculating how many cookies sold by hour
//   calcCookiesPerHour: function() {
//     for (var j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
//       console.log(this.cookiesSoldByHour[j]);
//     }
//
//   },
//   calcTotalDailyCookies: function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       this.totalDailyCookies += this.cookiesSoldByHour[i];
//       console.log(this.totalDailyCookies);
//     }
//   },
//
//   render: function() {
//     // firstAndPike.calcCookiesPerHour();
//
//     // <h3 id="seatac"></h3>
//     // <ul id="sealist"></ul>
//
//     this.calcRandCustByHour();
//     this.calcCookiesPerHour();
//     this.calcTotalDailyCookies();
//     console.log(firstAndPike.randCustByHour);
//     console.log(firstAndPike.cookiesSoldByHour);
//     // DOM manipulation
//     var seaCenHead = document.getElementById('seaCenHead');
//     seaCenHead.textContent = this.storeName;
//     for(var k = 0; k < storeHours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       cenList.appendChild(liEl);
//     }
//     console.log(liEl);
//     var listTotal = document.createElement('li');
//     listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     cenList.appendChild(listTotal);
//   }
// };
// seattleCenter.render();
//
// var capitalHill = {
//   storeName: 'Capital Hill',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesSoldPerHour: 3.7,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalDailyCookies: 0,
//
//   // method for calculating the random customers per hour
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
//     console.log(this.randCustByHour[i]);
//   },
//   // method for calculating how many cookies sold by hour
//   calcCookiesPerHour: function() {
//     for (var j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
//       console.log(this.cookiesSoldByHour[j]);
//     }
//
//   },
//   calcTotalDailyCookies: function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       this.totalDailyCookies += this.cookiesSoldByHour[i];
//       console.log(this.totalDailyCookies);
//     }
//   },
//
//   render: function() {
//     // firstAndPike.calcCookiesPerHour();  var seaTacHead = document.getElementById('seaTacHead');
//
//     // <h3 id="seatac"></h3>
//     // <ul id="sealist"></ul>
//     this.calcRandCustByHour();
//     this.calcCookiesPerHour();
//     this.calcTotalDailyCookies();
//     console.log(firstAndPike.randCustByHour);
//     console.log(firstAndPike.cookiesSoldByHour);
//     // DOM manipulation
//     var capHillHead = document.getElementById('capHillHead');
//     capHillHead.textContent = this.storeName;
//     for(var k = 0; k < storeHours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       capList.appendChild(liEl);
//     }
//     console.log(liEl);
//     var listTotal = document.createElement('li');
//     listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     capList.appendChild(listTotal);
//   }
// };
// capitalHill.render();
//
// var alki = {
//   storeName: 'Alki',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesSoldPerHour: 3.7,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalDailyCookies: 0,
//
//   // method for calculating the random customers per hour
//   calcRandCustByHour: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)));
//     console.log(this.randCustByHour[i]);
//   },
//   // method for calculating how many cookies sold by hour
//   calcCookiesPerHour: function() {
//     for (var j = 0; j < storeHours.length; j++) {
//       this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
//       console.log(this.cookiesSoldByHour[j]);
//     }
//
//   },
//   calcTotalDailyCookies: function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       this.totalDailyCookies += this.cookiesSoldByHour[i];
//       console.log(this.totalDailyCookies);
//     }
//   },
//
//   render: function() {
//     // firstAndPike.calcCookiesPerHour();  var seaTacHead = document.getElementById('seaTacHead');
//
//     // <h3 id="seatac"></h3>
//     // <ul id="sealist"></ul>
//     this.calcRandCustByHour();
//     this.calcCookiesPerHour();
//     this.calcTotalDailyCookies();
//     console.log(firstAndPike.randCustByHour);
//     console.log(firstAndPike.cookiesSoldByHour);
//     // DOM manipulation
//     var alkiHead = document.getElementById('alkiHead');
//     alkiHead.textContent = this.storeName;
//     for(var k = 0; k < storeHours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       alkiList.appendChild(liEl);
//     }
//     console.log(liEl);
//     var listTotal = document.createElement('li');
//     listTotal.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
//     alkiList.appendChild(listTotal);
//   }
// };
// alki.render();
//
// //
// //
// //
// // <h3 id="seacen"></h3>
// // <ul id="cenlist"></ul>
// //
// //
// //
// // <h3 id="caphill"></h3>
// // <ul id="caplist"></ul>
// //
// //
// //
// // <h3 id="alki"></h3>
// // <ul id="alkilist"></ul>
//
//
//
//
//
//
//
// // for (var k = 0; k < storeHours.length; k++) {
// //}
