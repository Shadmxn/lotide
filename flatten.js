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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {

    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const flatten = function(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      result = result.concat(element);
    } else {
      result.push(element);
    }
  }
  return result;
};

// Example from Larry Ai Bot:
const flatArray = flatten([1, 2, [3, 4], 5, [6]]);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]