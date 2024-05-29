const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {

    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const data1 = [13, 24, 5642, 76, 23, 431, 264, -4654, 52];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [13, 24, 5642, 76, 23, 431, 264]);


console.log('---');

const data2 = ["My", "name", "is", "Shadman", ",", "I", "have", "two", "cats"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);