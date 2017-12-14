'use strict'

var hours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var burien = {
  name: '152nd St',
  maxCustsPerHour: 25,
  minCustsPerHour: 5,
  avgCookiesPerCust: 10,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('152nd st');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');
       liEl.textContent = hours[i] + ':' + this.cookiesEachHour[i] + 'cookies';
       ulEl.appendChild(liEl);
      }
      liEl = document.createElement('li');
      liEl.textContent = 'Total:' + this.totalDailySales + 'cookies';
      ulEl.appendChild(liEl);
    }
  }

var lake stevens = {
  name: 'Frontier Village',
  maxCustsPerHour: 35,
  minCustsPerHour: 5,
  avgCookiesPerCust: 7,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('lake stevens');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ':' + this.cookiesEachHour[i] + 'cookies';
      ulEl.appendChild(liEl);
    }
      liEl = document.createElement('li');
      liEl.textContent = 'Total:' + this.totalDailySales + 'cookies';
      ulEl.appendChild(liEl);
  }
}

var south park = {
  name: 'Cloverdale',
  maxCustsPerHour: 9,
  minCustsPerHour: 37,
  avgCookiesPerCust: 5.5,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('cloverdale');
    for(var i = 0; i < hours.length; i++){

    var liEl = document.createElement('li');
     liEl.textContent = hours[i] +':' + this.cookiesEachHour[i] +'cookies';
     ulEl.appendChild(liEl);
    }
     liEl = document.createElement('li');
     liEl.textContent = 'Total:' + this.totalDailySales +'cookies';
     ulEl.appendChild(liEl);
    }
  }

  var des moins = {
    name: 'Marina',
    maxCustsPerHour: 46,
    minCustsPerHour: 8,
    avgCookiesPerCust: 9,
    custsEachHour: [],
    cookiesEachHour: [],
    totalDailySales: 0,
    calcCustsEachHour: function(){
      for(var i = 0; i < hours.length; i++){
        this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
      }
    },
    calcCookiesEachHour: function(){
      this.calcCustsEachHour();
      for(var i = 0; i < hours.length; i++){
        var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
        this.cookiesEachHour.push(oneHour);
        this.totalDailySales += oneHour;
      }
    },
    render: function(){
      this.calcCookiesEachHour();
      var ulEl = document.getElementById('marina');
      for(var i = 0; i < hours.length; i++){

        var liEl = document.createElement('li');
         liEl.textContent = hours[i] + ':' + this.cookiesEachHour[i] + 'cookies';
         ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total:' + this.totalDailySales + 'cookies';
        ulEl.appendChild(liEl);
      }
    }

    var everett = {
      name: 'Broadway',
      maxCustsPerHour: 60,
      minCustsPerHour: 19,
      avgCookiesPerCust: 23,
      custsEachHour: [],
      cookiesEachHour: [],
      totalDailySales: 0,
      calcCustsEachHour: function(){
        for(var i = 0; i < hours.length; i++){
          this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
        }
      },
      calcCookiesEachHour: function(){
        this.calcCustsEachHour();
        for(var i = 0; i < hours.length; i++){
          var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
          this.cookiesEachHour.push(oneHour);
          this.totalDailySales += oneHour;
        }
      },
      render: function(){
        this.calcCookiesEachHour();
        var ulEl = document.getElementById('broadway');
        for(var i = 0; i < hours.length; i++){

          var liEl = document.createElement('li');
           liEl.textContent = hours[i] + ':' + this.cookiesEachHour[i] + 'cookies';
           ulEl.appendChild(liEl);
          }
          liEl = document.createElement('li');
          liEl.textContent = 'Total:' + this.totalDailySales + 'cookies';
          ulEl.appendChild(liEl);
        }
      }

burien.render();
lakeStevens.render();
southPark.render();
desMoins.render();
everett.render();

function store(title, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust){
this.title = title;
this.minCustsPerHour = minCustsPerHour;
this.maxCustsPerHour = maxCustsPerHour;
this.avgCookiesPerCust = avgCookiesPerCust;
}
