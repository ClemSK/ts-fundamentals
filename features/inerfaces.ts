// interfaces + classes = how we get really strong code reuse

// interfaces: creates a new type, describing the property names and values of a object

// long type annotations

// putting in a generic name, for the generic properties that a vehicle might have
// can express any type
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  //   any vehicle needs to have a function called summary that returns a string
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  //   now rather than clg'ing inside the printVehicle function, we can call the summary function
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// type annotation is quite long and might get duplicated if used multiple times in the app

// ! example with type defs

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Name: ${vehicle.year}`);
//   console.log(`Name: ${vehicle.broken}`);
// };

// TS is checking the properties and making sure that they are accurate, if assigning a new type, there is an error
// misspelling means that it will create errors and will be identified in the error message

// ! example with an interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.summary()}`);
};

printVehicle(oldCivic);
