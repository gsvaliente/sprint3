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
    if (currency !== "EUR") {
      throw "Calculator only converts to EUR";
    }
    const keyRate = `${this.getCurrency}_${currency}`;
    const conversion = (this.getPrice * conversionRates[keyRate]).toFixed(2);
    console.log(`${this.getCurrency} converted to ${currency}`);
    console.log(`${this.getProduct.name} is ${conversion} EUROS\n`);
  }
}

module.exports = Decorator;
