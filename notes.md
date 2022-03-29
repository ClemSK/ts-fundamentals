### Defs

What is a type? A: easy wan tot refer to the diff properties and functions that values have

Types:

- string
- number: any type of number - positive / neg / int, etc.
- boolean
- Date: date object can have a type of date
- Todo: object with a type. e.g. Todo {id, completed, title}

cats of types: primitives vs object types

Primitives, as above: number, string, boolean, void, null, undefined, symbol

Object types: functions, arrays, classes, objects

---

### Type annotations and interfaces:

type annotation: code added to tell TS the type of value a variable will refer to

type inference: YS tries to figure out what type o value a variable refers to

Diff:

| Type annotations      | type infereces      |
| --------------------- | ------------------- |
| devs tell ts the type | ts guesses the type |

do you do it manually and do you let TS infer for you? balance it out

---

Type inference is when there a variable declaration and an initialization on the same line. In this case ts will infer the type.

when to use type inference? always / as often as possible

3 scenarios to rely on type annotations:

- when we dec;are a variable on one line then initialize it later
- when awe want a variable to have a type that can' be inferred
- when a function returns the 'any' type and we need to clarify the value

---

The 'any' type

---

how JSON.parse works: when passing JSON.parse it would return an any type btu can get back some very diff types based on strings and TS can't figure it out.

Any comes back when TS has no idea about the type that is being used and can't infer it

- Any is a type, just like a string or boolean
- Means TS has no idea what the value is - cant check it properly for correct property reference
- Avoid variables with 'any' at all costs - is like an escape and removes the value of TS
