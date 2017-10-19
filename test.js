'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;
var netTotal = 0;

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
      //console.log(this.randCustByHour[i]);
    }
  };

  this.calcCookiesPerHour = function() {
    for (var j = 0; j < storeHours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.randCustByHour[j] * this.avgCookiesSoldPerHour));
      console.log(this.cookiesSoldByHour[j]);
    }
  };
};

function grabClientData(){
  event.preventDefault();
  var newStoreName = event.target.newStoreName.value;
  console.log(newStoreName);
  var maxCustPerHourClientSupplied = event.target.maxCustPerHourClientSupplied.value;
  console.log(maxCustPerHourClientSupplied);
  var minCustPerHourClientSupplied = event.target.minCustPerHourClientSupplied.value;
  console.log(minCustPerHourClientSupplied);
  var avgCookiesSoldPerHourClientSupplied = event.target.avgCookiesSoldPerHourClientSupplied.value;

  return allLocations.push(newStoreName,maxCustPerHourClientSupplied,minCustPerHourClientSupplied,avgCookiesSoldPerHourClientSupplied);
};
newStoreForm.addEventListener('submit', grabClientData);
grabClientData();
//allLocations.push(newStoreName,minCustPerHourClientSupplied,maxCustPerHourClientSupplied,avgCookiesSoldPerHourClientSupplied);

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('Seatac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capital Hill', 20, 38, 2.3);
  new MakeLocation('Seatac Airport', 2, 16, 4.6);
};

makeStands();

console.log(allLocations);

function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
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
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = 'Total';
  tableRow.appendChild(tdEl2);
  cookiestands.appendChild(tableRow);
};

// add store data to the table
function addStoreData(){
  var cookiestands = document.getElementById('cookiestands');
  var tableRow = document.createElement('tr');
  for (var l = 0; l < allLocations.length; l++) {
    var tableRow = document.createElement('tr');
    var tabledata = document.createElement('td');
    console.log(allLocations[l]);
    tabledata.textContent = allLocations[l].name;
    tableRow.appendChild(tabledata);
    allLocations[l].calcRandCustByHour();
    allLocations[l].calcCookiesPerHour();
    for (var m = 0; m < storeHours.length; m++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = allLocations[l].cookiesSoldByHour[m];
      tableRow.appendChild(tdEl);
    }
    cookiestands.appendChild(tableRow);
  }
};

//  var tdEl3 = document.createElement('td'

//generateRanCustData();
makeHeaderRow();
addStoreData();
