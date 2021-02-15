'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let containerEl = document.getElementById('container');
let tableEl = document.createElement('table');
let tbodyEl;
containerEl.appendChild(tableEl);

function Location(location,minCust,maxCust,avgCookies)
{
    this.name = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.numberCustomerPerHour = [];
    this.ammountOfCookiesPerHour =[];
    this.total = 0;
}

Location.prototype.noCustomerPerHour = function() {

    for (let i = 0; i < hours.length; i++) {
        this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
}

Location.prototype.ammountOfCookies = function() {
 
    for (let i = 0; i < hours.length; i++) {
        let value = this.avgCookies * this.numberCustomerPerHour[i];
        this.ammountOfCookiesPerHour.push(Math.ceil(value));
        this.total += Math.ceil(value);
    }
    this.ammountOfCookiesPerHour.push(this.total)
    
}

// Location.prototype.render = function() {

//     let h3El = document.createElement('h3');
//         containerEl.appendChild(h3El);
//         //console.log(this.locationName);
//         h3El.textContent = this.locationName;
//         let ulEl = document.createElement('ul');
//         containerEl.appendChild(ulEl);


//         for (let i = 0; i < hours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];
//         }
//         let liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];


// }

Location.prototype.render = function(){
    
    
    let trEl = document.createElement('tr');
    tbodyEl.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for (let i = 0; i <= hours.length; i++) {
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.ammountOfCookiesPerHour[i];
    }
    // tdEl = document.createElement('td');
    // trEl.appendChild(tdEl);
    // tdEl.textContent = this.total;
}

tableHeader();
tbodyEl = tableBody();
tableEl.appendChild(tbodyEl);
let seattle = new Location('Seattle',23,65,6.3);
seattle.noCustomerPerHour();
seattle.ammountOfCookies();
seattle.render();

let tokyo = new Location('Tokyo',3,24,1.2);
tokyo.noCustomerPerHour();
tokyo.ammountOfCookies();
tokyo.render();

let dubai = new Location('Dubai',11,38,3.7);
dubai.noCustomerPerHour();
dubai.ammountOfCookies();
dubai.render();

let paris = new Location('Paris',20,38,2.3);
paris.noCustomerPerHour();
paris.ammountOfCookies();
paris.render();

let lima = new Location('Lima',2,16,4.6);
lima.noCustomerPerHour();
lima.ammountOfCookies();
lima.render();

let locations = [seattle,tokyo,dubai,paris,lima];
tableFooter();

function totalPerHour(locations)
{
    let total =[];
    let value = 0;
    for (let i = 0; i <=  hours.length; i++) {
        for (let j = 0; j < locations.length; j++) {
            value  +=  locations[j].ammountOfCookiesPerHour[i];
        }
        total.push(value);
    }
    return total;
}

//console.log(totalPerHour(locations));
function tableHeader()
{
    let theadEl = document.createElement('thead');
    tableEl.appendChild(theadEl);
    let trEl = document.createElement('tr');
    theadEl.appendChild(trEl);
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = '----';
    for (let i = 0; i < hours.length; i++) {
        thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];
    }
    thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Daily Location Total';
}

function tableBody() {
    let tbodyEl = document.createElement('tbody');
    tableEl.appendChild(tbodyEl);
    return tbodyEl;
}

function tableFooter(){
    let total = totalPerHour(locations);
    let tfootEl = document.createElement('tfoot');
    tableEl.appendChild(tfootEl);
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Totals';
    for (let i = 0; i < total.length; i++) {
        tdEl = document.createElement('th');
        trEl.appendChild(tdEl);
        tdEl.textContent = total[i];
    }
}


