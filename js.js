class Vehicle {
  constructor(licensePlate) {
    this.licensePlate = licensePlate;
    this.gpsEnabled = true;
  }

  start() {
    console.log('Vehicle starting.');
  }

  static companyName() {
    console.log('Vehicle ACME');
  }
}

class Car extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate);
    this.gpsEnabled = false;
  }

  start() {
    console.log('Starting the car.');
  }

  static companyName() {
    console.log('Car ACME');
  }
}

const vehicle = new Vehicle('ABC123');
const car = new Car('XYZ789');

Car.companyName();
console.log('GPS status: ' + car.gpsEnabled);

car.start();
