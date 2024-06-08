const middle = require("../middle");
const assert = require('chai').assert;

describe("middle", () => {
  it("should return [7, 8] for [1, 6, 7, 8, 4, 3]", () => {
    assert.deepEqual(middle([1, 6, 7, 8, 4, 3]), [7, 8]);
  });

  it("should return [7] for [1, 6, 7, 8, 4]", () => {
    assert.deepEqual(middle([1, 6, 7, 8, 4]), [7]);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});