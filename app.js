var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm',];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Burien = {
  name: '152nd st',
  maxCustsPerHour: 46,
  minCustsPerHour: 22,
  avgCookiesPerCust: 7.6,
  custsEachHour: [],
  cookiesEachHour: [],
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      console.log(this.cookiesEachHour, 'total');
    }
  },
}

var Normandy Park = {
  name: 'Manhattan Village',
  maxCustsPerHour: 78,
  minCustsPerHour: 33,
  avgCookiesPerCust: 8.1,
  custsEachHour: [],
  cookiesEachHour: [],
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
}

var Lake Stevens = {
  name: 'Frontier Village',
  maxCustsPerHour: 46,
  minCustsPerHour: 22,
  avgCookiesPerCust: 7.6,
  custsEachHour: [],
  cookiesEachHour: [],
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
}

var Des Moins = {
  name: 'Marina',
  maxCustsPerHour: 27,
  minCustsPerHour: 13,
  avgCookiesPerCust: 5.3,
  custsEachHour: [],
  cookiesEachHour: [],
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
}

var Seattle = {
  name: '4th Ave',
  maxCustsPerHour: 43,
  minCustsPerHour: 55,
  avgCookiesPerCust: 10.3,
  custsEachHour: [],
  cookiesEachHour: [],
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      console.log(this.cookiesEachHour, 'total');
    }
  },
}
