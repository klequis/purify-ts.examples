import { expect } from "chai";
import { popularWords } from "./popularWords";
const valsToTest = [
  {
    // abcd: "When I was One I had just begun When I was Two I was nearly new"
    // text: `When I was One I had just begun When I was Two I was nearly new`,
    text: `
When I was One
I had just begun
When I was Two
I was nearly new`,
    words: ["i", "was", "three", "near"],
    result: {
      i: 4,
      was: 3,
      three: 0,
      near: 0,
    },
  },
];

describe("popularWords test", function () {
  valsToTest.forEach((v) => {
    it(`${v.text} -> ${v.result}`, function () {
      const b = popularWords(v.text, v.words);
      expect(b).to.deep.equal(v.result);
    });
  });
});

popularWords(
  `
When I was One
I had just begun
When I was Two
I was nearly new`,
  ["i", "was", "three", "near"]
);
