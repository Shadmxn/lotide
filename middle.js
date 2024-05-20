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

const middle = function(array) {
  const length = array.length;
  if (length === 0) {
    return [];
  }
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {

    return [array[middleIndex - 1], array[middleIndex]];
  } else {

    return [array[middleIndex]];
  }
};

console.log(middle([1,6,7,8,4,3]));
console.log(middle([1,6,7,8,4]));
console.log(middle([1]));