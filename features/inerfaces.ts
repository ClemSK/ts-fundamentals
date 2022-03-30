// interfaces + classes = how we get really strong code reuse

// interfaces: creates a new type, describing the property names and values of a object

// long type annotations

// putting in a generic name, for the generic properties that a vehicle might have
// can express any type
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   //   any vehicle needs to have a function called summary that returns a string
//   summary(): string;
// }

//   removed the additional properties and changed the interface name to be more generic
interface Reportable {
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

const myDrink = {
  color: 'brown',
  carbonated: true,
  broken: true,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
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

// ! example with an interface // changed Vehicle interface to Reportable
// updated the vehicle function to make it more generic
const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(myDrink);
