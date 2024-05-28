const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 🛑: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) { // creating a function findKeyByValue which takes in the parameters object and value
  for (const key of Object.keys(object)) { // initiates a loop to search throgh all the object keys
    if (object[key] === value) {
      return key; // returns key if match found
    }
  }
  return undefined; // returns undefined if no key is found
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse", // initial test code was not camelCase (sci_fi)
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);