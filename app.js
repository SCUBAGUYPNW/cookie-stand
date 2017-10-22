'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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
  new MakeLocation('Alki', 2, 16, 4.6);
}

makeStands();
console.log(allLocations);

function makeHeaderRow() {
  var tableRow = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Location';
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
  thEl.textContent = 'Total all by hour:';
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
  if (newStoreName == null || newStoreName == '') {
    alert ('Please enter a store name.');
    return false;
  }
  console.log(newStoreName);
  var minCustPerHourClientSupplied = parseInt(event.target.minCustPerHourClientSupplied.value);
  //if (string(minCustPerHourClientSupplied) === null || string(minCustPerHourClientSupplied) == '') {
    //alert ('Please enter a minimum number of customers per hour.');
    //return false;
  //}
  console.log(minCustPerHourClientSupplied);
  var maxCustPerHourClientSupplied = parseInt(event.target.maxCustPerHourClientSupplied.value);
  //if (string(maxCustPerHourClientSupplied) == null || string(maxCustPerHourClientSupplied) === '' || maxCustPerHourClientSupplied > minCustPerHourClientSupplied) {
    //alert ('Please enter a Minimum customer per hour amount.');
    //return false;
  //}
  console.log(maxCustPerHourClientSupplied);
  var avgCookiesSoldPerHourClientSupplied = parseInt(event.target.avgCookiesSoldPerHourClientSupplied.value);
  //if (avgCookiesSoldPerHourClientSupplied == null || avgCookiesSoldPerHourClientSupplied == '') {
    //alert ('Please enter a value for average cookies sold per hour.');
    //return false;
  //}

  console.log(avgCookiesSoldPerHourClientSupplied);
  new MakeLocation(newStoreName,maxCustPerHourClientSupplied,minCustPerHourClientSupplied,avgCookiesSoldPerHourClientSupplied);
  cookiestands.deleteRow(cookiestands.rows.length - 1);
  allLocations[allLocations.length - 1].createTableData();
  createFooterRow();
};
newStoreForm.addEventListener('submit', grabClientData);
