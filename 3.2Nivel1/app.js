const Calculator = require('./Calculator');
const Middleware = require('./Middleware');
const { readFileSync } = require('fs');

const file = JSON.parse(readFileSync(`${__dirname}/data.json`, 'utf-8'));
const { a, b } = file;

const calculator = new Calculator();
const app = new Middleware(calculator);

app.use((req, res, next) => {
  req.a = req.a ** 2;
  req.b = req.b ** 2;
  console.log(req);
  next();
});

app.use((req, res, next) => {
  req.a = req.a ** 3;
  req.b = req.b ** 3;
  next();
});

app.use((req, res, next) => {
  req.a = req.a / 2;
  req.b = req.b / 2;
  next();
});

let add = app.add(a, b);
let sub = app.subtract(a, b);
let mult = app.multiply(a, b);

console.log(add, sub, mult);
