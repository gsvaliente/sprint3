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

  convert(currency) {
    const re = new RegExp(this.getCurrency + "_" + currency);
    const conversion = this.getProduct.price * Object.entries(conversionRates).find((k) => re.test(k))[1];
    console.log(`${this.getCurrency} converted to ${currency}`);
    console.log(conversion);
  }
}

module.exports = Decorator;
