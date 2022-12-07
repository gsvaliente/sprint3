class Middleware {
  square(a) {
    return a ** 2;
  }
  cube(a) {
    return a ** 3;
  }
  division(a, b) {
    return a / b;
  }
}

module.exports = Middleware;
