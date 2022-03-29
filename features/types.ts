// shows the properties and methods that a property has

const today = new Date();
today.getMonth();

// typescript infers the type even if undeclared
const person = {
  age: 20,
};
person.age;

// as nothing is declared with the class, there is no auto-complete or type inferring
class Color {}

const red = new Color();

// when do use types? Always, as all values will have a type.