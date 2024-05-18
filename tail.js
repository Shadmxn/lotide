const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// Test cases given by Larry Ai Bot

// Test Case: Check the returned tail for a non-empty array
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
console.log(`Test Case 1: Check the returned tail for a non-empty array`);
assertEqual(result1.length, 2); // Check that the returned array length is 2
assertEqual(result1[0], "Lighthouse"); // Check the first element of the returned tail
assertEqual(result1[1], "Labs"); // Check the second element of the returned tail

// Test Case: Check that the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // Call tail to ensure it doesn't modify the original array
console.log(`Test Case 2: Check that the original array is not modified`);
assertEqual(words.length, 3); // The original array should still have 3 elements

// Test Case: Check the returned tail for an array with one element
const result2 = tail(["Hello"]);
console.log(`Test Case 3: Check the returned tail for an array with one element`);
assertEqual(result2.length, 0); // An array with one element should yield an empty array

// Test Case: Check the returned tail for an empty array
const result3 = tail([]);
console.log(`Test Case 4: Check the returned tail for an empty array`);
assertEqual(result3.length, 0); // An empty array should yield an empty array