//  ! classes are a blueprint to create an object with some fields (values)
//  ! and methods(functions) to represent things

// where to use classes? all the time in TS, used with interfaces
// help to reuse code

// Modifiers
// 1. Public: can be called anywhere, any time
//     ! a. we don't mark methods as private for security concerns - it adds no additional app security
//     ! it just restricts methods that can be called.
// 2. Private: can only be called by other methods in this class
// 3. Protected: can be called by other methods in this class or by other methods in child classes

// Define a set of fields (values) and methods (functions) to represent a thing
class Vehicle {
  // ! it's possible to either declare a property or use a constructor to do so
  //   color: string = 'red';

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  // this is a shorter way of declaring a property and fields as it can be used outside of the class
  constructor(public color: string) {}

  // protect means that the method can be called by the parent and children classes
  protected honk(): void {
    console.log('beep');
  }
}

// Inheritance
// when a class extends another some properties can be overridden
// private means that the methods can't be called outside of the class, creating an error
class Car extends Vehicle {
  // adding another filed to the constructor and passing the property to super to remove the error
  constructor(public wheels: number, color: string) {
    //   this is a reference to the constructor in the parent class
    super(color);
  }

  private drive(): void {
    console.log('roar');
  }
  //   we can call this class outside of the Car class as it doesn't have the private modifier in front
  //   getting an error as we're making a change to the child class, to get rid of the error, take out the drive property from Vehicle class
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

// now car takes 2 fields: wheels and color
const myCar = new Car(4, 'red');
myCar.startDrivingProcess();

// Define a set of fields (values) and methods (functions) to represent a thing
