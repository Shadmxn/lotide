const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};



const result = countLetters("better");

// Now assert the counts for each letter (Larry Ai Suggestions)
assertEqual(result['b'], 1); // Checks if 'b' is counted correctly
assertEqual(result['e'], 2); // Checks if 'e' is counted twice
assertEqual(result['t'], 2); // Checks if 't' is counted twice
assertEqual(result['r'], 1); // Checks if 'r' is counted once