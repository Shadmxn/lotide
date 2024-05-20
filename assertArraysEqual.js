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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {

    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

// Larry Ai Bot Suggested Calls

// Should pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// Should fail
assertArraysEqual([1, 2, 3], [3, 2, 1]);

// Testing with strings, should pass
assertArraysEqual(["hello", "world"], ["hello", "world"]);

// Testing with strings, should fail
assertArraysEqual(["hello", "world"], ["hello", "bootcamp"]);

// Edge case: empty arrays, should pass
assertArraysEqual([], []);

// Edge case: different lengths, should fail
assertArraysEqual([1, 2], [1, 2, 3]);