import { expect } from "chai";
import { splitList } from "./splitList";

const valsToTest = [
  {
    start: [1, 2, 3, 4, 5, 6],
    result: [
      [1, 2, 3],
      [4, 5, 6],
    ],
  },
  {
    start: [1, 2, 3],
    result: [[1, 2], [3]],
  },
  {
    start: [1, 2, 3, 4, 5],
    result: [
      [1, 2, 3],
      [4, 5],
    ],
  },
  {
    start: [1],
    result: [[1], []],
  },
  {
    start: [],
    result: [[], []],
  },
];

describe("splitList test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = splitList(v.start);
      expect(b).to.deep.equal(v.result);
    });
  });
});
