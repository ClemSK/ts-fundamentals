// updating the value to NaN will produce an error
let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

// value that has the same name as its type
let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
// value of now has a value of type date and assigning a date object
let now: Date = new Date();

// Array
// annotation of string[] is not creating an array but saying that we are going to have a type array, that contains strings
let colors: string[] = ['red', 'green ', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let myBooleans: boolean[] = [true, false, true];

// classes
class Car {}
// making an instance of type Car
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
//  annotation that goes into the function: argument i - after arrow function is the value that we expect to return
// type annotation is everything up to and including the void - it is not a function, but a description of a function
// after the void is the function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) functions that return the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

// fixing the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// When to declare a variable on one line and initialize it later
let words = ['red', 'blue', 'green'];
// adding a type at foundWords helps to make the type correct
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWords = true;
  }
}

// bad code example
// variables with types can't be inferred correctly

let numbers = [-10, -1, 12];
// here we are assigning a type boolean
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    //   here TS doesn't understand what we are doing with our code
    numberAboveZero = numbers[i];
  }
}
