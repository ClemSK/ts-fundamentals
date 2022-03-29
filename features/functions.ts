// structure of functions

const add = (a: number, b: number): number => {
  return a + b;
};

// types does not care about logic of the application, jsut thje types

// inside the argument, htere is no type inference, just works on the output, but we won't use it.

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void means no return statement
const logger = (message: string): void => {
  console.log(message);
};

// tbe never type annotation is only used when we truly don't want / need a return value ever.
const throwError = (message: string): never => {
  throw new Error(message);
};

// another way of throwing an error
const throwAnotherError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  } else {
    return message;
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forcast: { date: Date; weather: string }): void => {
  console.log(forcast.date);
  console.log(forcast.weather);
};

// destructured version
const logMoreWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
