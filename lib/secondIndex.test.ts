import { expect } from "chai";
import { secondIndex } from "./secondIndex";

const valsToTest = [
  {
    text: "sims",
    symbol: "s",
    result: 3,
  },
  {
    text: "find the river",
    symbol: "e",
    result: 12,
  },
  {
    text: "hi",
    symbol: " ",
    result: undefined,
  },
  {
    text: "hi mayor",
    symbol: " ",
    result: undefined,
  },
  {
    text: "hi mr Mayor",
    symbol: " ",
    result: 5,
  },
];

describe("secondIndex test", function () {
  valsToTest.forEach((v) => {
    it(`${v.text} -> ${v.result}`, function () {
      const b = secondIndex(v.text, v.symbol);
      expect(b).to.equal(v.result);
    });
  });
});
