import { expect } from "chai";
import { allTheSame } from "./allTheSame";
const valsToTest = [
  {
    start: [1, 1, 1],
    result: true,
  },
  {
    start: [1, 2, 1],
    result: false,
  },
  {
    start: ["a", "a", "a"],
    result: true,
  },
  {
    start: [],
    result: true,
  },
  {
    start: [1],
    result: true,
  },
];

describe("allTheSame test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = allTheSame(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
