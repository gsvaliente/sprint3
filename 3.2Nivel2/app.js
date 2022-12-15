const Decorator = require('./Decorator');
const Product = require('./Product');

// CREATING INSTANCES OF THE PRODUCT CLASS
const playStation = new Product('PlayStation 5', 499, 'USD');
const xbox = new Product('Xbox Series X', 399, 'GBP');
const appleWatch = new Product('Apple Watch Series 8', 96637, 'JPY');
const fitBit = new Product('FITBIT Versa 4', 200, 'CHF');

// DECORATING PRODUCT TO HAVE A NEW METHOD OF CONVERTING
const ps5 = new Decorator(playStation);
const xboxX = new Decorator(xbox);
const watch = new Decorator(appleWatch);
const fitbit = new Decorator(fitBit);

// CREATING AN ARRAY OF DECORATED PRODUCTS
const products = [ps5, xboxX, watch, fitbit];

// CONVERTING THE PRICE TO EUROS
products.forEach((product) => {
  product.convert('EUR');
});

// IF TRYING TO CONVERT TO A CURRENCY THAT IS NOT EUR
ps5.convert('GBP'); // THROWS AN ERROR
