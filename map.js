const words = ["car", "jump", "mouse", "water", "shadman"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

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

const capitalizedWords = map(words, word => word.toUpperCase());
assertArraysEqual(capitalizedWords, ["CAR", "JUMP", "MOUSE", "WATER", "SHADMAN"]);  // This should pass

const numericStrings = ["1", "2", "3", "4.5"];
const toNumbers = map(numericStrings, Number);
assertArraysEqual(toNumbers, [1, 2, 3, 4.5]);

const matrix = [[1, 2], [3, 4], [5, 6]];
const incrementMatrix = map(matrix, row => row.map(number => number + 1));