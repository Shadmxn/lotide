const tail = require("../tail");
const assert = require('chai').assert;

describe("tail", () => {
  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});