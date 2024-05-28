const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {

    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {

    console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};


const testResults = letterPositions("lighthouse in the house");

assertArraysEqual(testResults['l'], [0]);
assertArraysEqual(testResults['i'], [1, 11]);
assertArraysEqual(testResults['g'], [2]);
assertArraysEqual(testResults['h'], [3, 5, 15, 18]);
assertArraysEqual(testResults['t'], [4, 14]);
assertArraysEqual(testResults['o'], [6, 19]);
assertArraysEqual(testResults['u'], [7, 20]);
assertArraysEqual(testResults['s'], [8, 21]);
assertArraysEqual(testResults['e'], [9, 16, 22]);
assertArraysEqual(testResults['n'], [12]);