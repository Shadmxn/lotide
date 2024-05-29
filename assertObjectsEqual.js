const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed 🛑: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test case 1: Should pass
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);

// Test case 2: Should fail
const obj3 = { a: '1', b: 2 };
const obj4 = { a: '1', b: '2' };
assertObjectsEqual(obj3, obj4);

// Test case 3: Including arrays, should pass
const obj5 = { a: ['hello', 'world'], b: 2 };
const obj6 = { b: 2, a: ['hello', 'world'] };
assertObjectsEqual(obj5, obj6);

