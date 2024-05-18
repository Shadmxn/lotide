const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed ✅: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed 🛑: " + actual + " !== " + expected);
  }
};
assertEqual("Hamilton", "Hamilton");
assertEqual("Toronto", "Hamilton");
assertEqual(50, 50);
assertEqual(4320, 54);

