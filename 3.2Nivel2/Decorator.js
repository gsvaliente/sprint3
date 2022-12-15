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

const decorator = (item) => {
  item.convert = (currency) => {
    if (item.currency === 'EUR') {
      throw 'CANNOT CONVERT THE SAME CURRENCY';
    }
    if (currency !== 'EUR') {
      throw 'CURRENCY NOT SUPPORTED AT THIS TIME';
    }

    const keyRate = `${item.currency}_${currency}`;
    const conversion = (item.price * conversionRates[keyRate]).toFixed(2);
    console.log(`${item.currency} converted to ${currency}`);
    console.log(`${item.name} is ${item.price} ${item.currency}`);
    console.log(`${item.name} is ${conversion} EUROS\n`);
  };
};

module.exports = decorator;
