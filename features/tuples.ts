// ! Tuple: array like structure where each element represents some property of a record
// describes one thing instead of many things: tuple for single thing, array for many different things

// tuple example
const drink = {
  color: 'orange',
  carbonated: true,
  sugar: 40,
};

// looks like an array and we could easily swap the position of the values, not what we want
// there is an assumption of order, if changed things break down
const pepsi = ['brown', true, 40];

// now we have defined that the order must always be string, boolean, number
// turned the array into a tuple
const orangina: [string, boolean, number] = ['orange', true, 40];

// Type alias: means we can reuse this type throughout the app
type Drink = [string, boolean, number];

const Fanta: Drink = ['orange', true, 40];
const Coffee: Drink = ['brown', false, 0];

// Where and when to use tuples
// e.g. when working with a csv file and working with a single row

// tuple - unclear what the info is in the tuple
const carSpecs: [number, number] = [400, 3354];

// object - much clearer - preferable method to model a record as an object rather than a tuple as the key is more descriptive
const carStats = {
  horsepower: 400,
  weight: 3354,
};
