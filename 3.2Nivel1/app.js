const Middleware = require("./Middleware");

class Operations {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  multiply = (a, b) => a * b;
}

const calc = new Operations();

try1 = calc.add(2, 2);
try2 = calc.subtract(10, 4);
try3 = calc.multiply(5, 5);
console.log({
  add: try1,
  subtract: try2,
  multiply: try3,
});
