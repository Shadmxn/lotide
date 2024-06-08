const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1, 6, 7, 8, 4, 3]), [7, 8]);
assertArraysEqual(middle([1, 6, 7, 8, 4]), [7]);
assertArraysEqual(middle([1]), []);