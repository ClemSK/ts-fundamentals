// typed arrays: where each element is some consistent type of value

// only put elements with a consistent type into the array e.g. strings

// type inferred of strings
const carMakers = ['ford', 'toyota', 'chevy'];

// type explicit
const carMakers2: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// 2 dimentional array: an array that contains an array of strings
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// corner topics

// 1. TS can do type inference when extracting values from an array

// help with inference
const car = carMakers[0];
// inference of string so when pop method is called it is inferred as a string

// 2. TS can prevent adding incompatible values to the array

// carMakers.push(100); // number is not a string so is wrong

// 3. We can get help with 'map', 'forEach', 'reduce' functions

// Help with 'map': gives autocomplete on the available methods for manipulating the variable
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4. Flexible - arrays can still contain multiple types

// can be dates or strings
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); // wrong because it's a number

// How and where to use typed arrays?
// ! Any time we need to represent a collection of records with some arbitrary sort order
// ? tuples look very similar to tuples - be careful
