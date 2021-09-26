import { expect } from "chai";
import { nonUniqueElements } from "./nonUniqueElements";
const valsToTest = [
  {
    start: [1, 2, 3, 1, 3],
    result: [1, 3, 1, 3],
  },
  {
    start: [1, 2, 3, 4, 5],
    result: [],
  },
  {
    start: [5, 5, 5, 5, 5],
    result: [5, 5, 5, 5, 5],
  },
  {
    start: [10, 9, 10, 10, 9, 8],
    result: [10, 9, 10, 10, 9],
  },
];

describe("?? test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = nonUniqueElements(v.start);
      expect(b).to.deep.equal(v.result);
    });
  });
});
