const assertArraysEqual = require("../assertArraysEqual");


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