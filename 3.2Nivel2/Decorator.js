const conversionRates = require("./currencyRates.json");

class Decorator {
  constructor(product) {
    this.product = product;
  }

  get getProduct() {
    return this.product;
  }

  get getCurrency() {
    return this.getProduct.currency;
  }

  get getPrice() {
    return this.getProduct.price;
  }

  convert(currency) {
    const re = new RegExp(this.getCurrency + "_" + currency);
    const conversion = this.getPrice * Object.entries(conversionRates).find((k) => re.test(k))[1];
    console.log(`${this.getCurrency} converted to ${currency}`);
    console.log(conversion);
  }
}

const convertFunction = (product) => {
  product.convert = (currency) => {
    const re = new RegExp(this.getCurrency + "_" + currency);
    const conversion = product.price * Object.entries(conversionRates).find((k) => re.test(k))[1];
    console.log(`${product.currency} converted to ${currency}`);
    console.log(conversion);
  };
};

module.exports = convertFunction;
// module.exports = Decorator;
