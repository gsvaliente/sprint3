const conversionRates = require('./currencyRates.json');
const Product = require('./Product');

// class Decorator {
//   constructor(product) {
//     this.product = product;
//   }

//   get getProduct() {
//     return this.product;
//   }

//   get getCurrency() {
//     return this.getProduct.currency;
//   }

//   get getPrice() {
//     return this.getProduct.price;
//   }

//   convert(currency) {
//     if (currency !== "EUR") {
//       throw "Calculator only converts to EUR";
//     }
//     const keyRate = `${this.getCurrency}_${currency}`;
//     const conversion = (this.getPrice * conversionRates[keyRate]).toFixed(2);
//     console.log(`${this.getCurrency} converted to ${currency}`);
//     console.log(`${this.getProduct.name} is ${conversion} EUROS\n`);
//   }
// }

const playStation = new Product('PlayStation 5', 499, 'USD');

const decorator = (item) => {
  item.convert = (currency) => {
    const keyRate = `${item.currency}_${currency}`;
    const conversion = (item.price * conversionRates[keyRate]).toFixed(2);
    console.log(`${item.name} converted to ${currency}`);
    console.log(`${item.name} is ${conversion} EUROS\n`);
  };
};

decorator(playStation);
playStation.convert('EUR');

module.exports = decorator;
