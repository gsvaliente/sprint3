const Decorator = require("./Decorator");
const Product = require("./Product");
const convertFunction = require("./Decorator");

// CREATING PRODUCTS
const playStation = new Product("PlayStation 5", 499, "USD");
const xbox = new Product("Xbox Series X", 399, "GBP");

// TESTING DECORATOR
// const playStationPrice = new Decorator(playStation);
// const xboxPrice = new Decorator(xbox);

// TESTING CONVERSION
// playStationPrice.convert("EUR");
// xboxPrice.convert("EUR");

convertFunction(playStation);
playStation.convert("EUR");
