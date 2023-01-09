const Calculator = require('./Calculator');
const Middleware = require('./Middleware');
const { readFileSync } = require('fs');

const file = JSON.parse(readFileSync(`${__dirname}/data.json`, 'utf-8'));
const { a: num1, b: num2 } = file;

const calc = new Calculator();
const app = new Middleware(calc);

//* SETTING UP THE MIDDLEWARE
app.use((num, next) => {
  num.a = num.a ** 2;
  num.b = num.b ** 2;
  // this should square the numbers
  next();
});

app.use((num, next) => {
  num.a = num.a ** 3;
  num.b = num.b ** 3;
  // this should cube the numbers
  next();
});

app.use((num, next) => {
  num.a = num.a / 2;
  num.b = num.b / 2;
  // this should half the numbers
  next();
});

//* THIS IS NOW USING THE CALC METHODS DIRECTLY
let add = app.add({ a: num1, b: num2 });
let sub = app.subtract({ a: num1, b: num2 });
let multi = app.multiply({ a: num1, b: num2 });

console.log(`The result of adding ${num1} and ${num2} after the middleware is ${add}`);
console.log(`The result of subtracting ${num1} and ${num2} after the middleware is ${sub}`);
console.log(`The result of multiplying ${num1} and ${num2} after the middleware is ${multi}`);
