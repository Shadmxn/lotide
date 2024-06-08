const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");


assertEqual(eqArrays([11, 23, 35], [11, 23, 35]), true);
assertEqual(eqArrays([7, 5, 1], [4, 2, 322]), true);