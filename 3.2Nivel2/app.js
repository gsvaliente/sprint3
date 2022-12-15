const decorator = require('./Decorator');
const Product = require('./Product');

// CREATING INSTANCES OF THE PRODUCT CLASS
const playStation = new Product('PlayStation 5', 499, 'USD');
const xbox = new Product('Xbox Series X', 399, 'GBP');
const appleWatch = new Product('Apple Watch Series 8', 96637, 'JPY');
const fitBit = new Product('FitBit Versa 4', 200, 'CHF');

// DECORATING PRODUCT TO HAVE A NEW METHOD OF CONVERTING
decorator(playStation);
decorator(xbox);
decorator(appleWatch);
decorator(fitBit);

// USING THE CONVERT METHOD
playStation.convert('EUR');
xbox.convert('EUR');
appleWatch.convert('EUR');
fitBit.convert('EUR');

// IF TRYING TO CONVERT TO A CURRENCY THAT IS NOT EUR
playStation.convert('GBP'); // THROWS AN ERROR

// IF TRYING TO CONVERT EUR TO EUR
// const appleTV = new Product('Apple TV 4K', 169, 'EUR');
// decorator(appleTV);
// appleTV.convert('EUR'); THROWS AN ERROR
