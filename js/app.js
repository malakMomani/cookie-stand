'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let containerEl = document.getElementById('main');

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    numberCustomerPerHour: [],
    ammountOfCookiesPerHour: [],
    total: 0,

    noCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    ammountOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let value = this.avgCookies * this.numberCustomerPerHour[i];
            this.ammountOfCookiesPerHour.push(Math.ceil(value));
            this.total += value;
        }
        this.ammountOfCookiesPerHour.push(Math.ceil(this.total))
    },

    render: function () {
        let h3El = document.createElement('h3');
        containerEl.appendChild(h3El);
        h3El.textContent = this.name;
        let ulEl = document.createElement('ul');
        containerEl.appendChild(ulEl);


        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];
        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];

    }
};
console.log(containerEl);
seattle.noCustomerPerHour();
//console.log(seattle.numberCustomerPerHour);
seattle.ammountOfCookies();
//console.log(seattle.ammountOfCookiesPerHour);
seattle.render();



let tokyo = {
    name: 'Tokto',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    numberCustomerPerHour: [],
    ammountOfCookiesPerHour: [],
    total: 0,

    noCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    ammountOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let value = this.avgCookies * this.numberCustomerPerHour[i];
            this.ammountOfCookiesPerHour.push(Math.ceil(value));
            this.total += value;
        }
        this.ammountOfCookiesPerHour.push(Math.ceil(this.total))
    },

    render: function () {
        let h3El = document.createElement('h3');
        containerEl.appendChild(h3El);
        h3El.textContent = this.name;
        let ulEl = document.createElement('ul');
        containerEl.appendChild(ulEl);


        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];

    }
};

tokyo.noCustomerPerHour();
tokyo.ammountOfCookies();
tokyo.render();

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    numberCustomerPerHour: [],
    ammountOfCookiesPerHour: [],
    total: 0,

    noCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    ammountOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let value = this.avgCookies * this.numberCustomerPerHour[i];
            this.ammountOfCookiesPerHour.push(Math.ceil(value));
            this.total += value;
        }
        this.ammountOfCookiesPerHour.push(Math.ceil(this.total))
    },

    render: function () {
        let h3El = document.createElement('h3');
        containerEl.appendChild(h3El);
        h3El.textContent = this.name;
        let ulEl = document.createElement('ul');
        containerEl.appendChild(ulEl);


        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];

    }
};

dubai.noCustomerPerHour();
dubai.ammountOfCookies();
dubai.render();


let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    numberCustomerPerHour: [],
    ammountOfCookiesPerHour: [],
    total: 0,

    noCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    ammountOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let value = this.avgCookies * this.numberCustomerPerHour[i];
            this.ammountOfCookiesPerHour.push(Math.ceil(value));
            this.total += value;
        }
        this.ammountOfCookiesPerHour.push(Math.ceil(this.total))
    },

    render: function () {
        let h3El = document.createElement('h3');
        containerEl.appendChild(h3El);
        h3El.textContent = this.name;
        let ulEl = document.createElement('ul');
         containerEl.appendChild(ulEl);


        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];
    }
};

paris.noCustomerPerHour();
paris.ammountOfCookies();
paris.render();

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    numberCustomerPerHour: [],
    ammountOfCookiesPerHour: [],
    total: 0,

    noCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberCustomerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    ammountOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let value = this.avgCookies * this.numberCustomerPerHour[i];
            this.ammountOfCookiesPerHour.push(Math.ceil(value));
            this.total += value;
        }
        this.ammountOfCookiesPerHour.push(Math.ceil(this.total))
    },

    render: function () {
        let h3El = document.createElement('h3');
        containerEl.appendChild(h3El);
        h3El.textContent = this.name;
        let ulEl = document.createElement('ul');
        containerEl.appendChild(ulEl);


        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ': ' + this.ammountOfCookiesPerHour[i];

        }
        let liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = 'Total : ' + this.ammountOfCookiesPerHour[this.ammountOfCookiesPerHour.length - 1];

    }
};

lima.noCustomerPerHour();
lima.ammountOfCookies();
lima.render();




