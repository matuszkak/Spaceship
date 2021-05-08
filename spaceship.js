let newPassenger, distance;

// object létrehozása
const spaceShip = {

  // property-k
  fuel: 400,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  shields: true,
  speedometer: 0,

  // metódusok
  listPassengers: function () {
    for (let i = 0; i < this.passengers.length; i++) {
      console.log('Passenger ' + (i + 1) + ': ' + this.passengers[i]);
    }
  },

  addPassenger: function (newPassenger) {
    this.passengers.push(newPassenger);
    console.log(newPassenger + ' was added to the ship');
  },

  travel: function (distance) {
    console.log('Trying to travel: ', distance);
    let newDistance = 0;
    // ha nincs már üzemenyag...
    if (this.fuel === 0) {
      console.log('Cannot go further, tank is empty');
      // ha még van üzemanyag...
    } else {
      this.fuel = this.fuel - (distance / 2);
      // ha negatívba ment akkor nem tudja a teljes távot megtenni
      if (this.fuel < 0) {
        // megtehető távolság számítása és tank ürítése
        newDistance = distance + 2 * this.fuel;
        console.log('Can only travel: ' + newDistance);
        this.fuel = 0;
        // ha nem ment negatívba akkor a teljes távot meg tudja tenni + benga is marad még
      } else {
        newDistance = distance;
      }
      // kilométeróra átállítása + pajzs inaktiválás maradék üzemanyag függvényében
      this.speedometer = this.speedometer + newDistance;
      if (this.fuel < 30 && this.shields) {
        this.shields = false;
        console.log('Fuel is low, turning off shields...');
      }

      // megtett távolság és megmaradó üzemanyag a képernyőre
      console.log('Spaceship is at: ' + this.speedometer);
      console.log('Spaceship has: ' + this.fuel + ' fuel');
    }
  }
};

// teszt
// console.log(spaceShip);
spaceShip.listPassengers();
spaceShip.addPassenger('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);