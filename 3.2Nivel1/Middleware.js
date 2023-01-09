class Middlewares {
  constructor(target) {
    this.target = target;
    this.Middlewares = [];
    this.req = {};

    const proto = Object.getPrototypeOf(this.target);
    const propertyNames = Object.getOwnPropertyNames(proto);
    for (let property of propertyNames) {
      if (property !== 'constructor') {
        this[property] = args => {
          this.req = { ...args };
          this.executeMiddleware(0);
          return proto[property].call(this, this.req);
        };
      }
    }
  }

  executeMiddleware(index) {
    if (index < this.Middlewares.length - 1) {
      this.Middlewares[index].call(this, this.req, () => this.executeMiddleware(index + 1));
    } else if ((index = this.Middlewares.length - 1)) {
      this.Middlewares[index].call(this, this.req, () => {});
    }
  }

  use(func) {
    this.Middlewares.push(func);
  }
}

module.exports = Middlewares;
