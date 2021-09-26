import { expect } from "chai";
import { isAscending } from "./isAscending";

const log = console.log;

const valsToTest = [
  {
    start: [-5, 10, 99, 123456],
    result: true,
  },
  {
    start: [99],
    result: true,
  },
  {
    start: [4, 5, 6, 7, 3, 7, 9],
    result: false,
  },
  {
    start: [],
    result: true,
  },
  {
    start: [1, 1, 1, 1],
    result: false,
  },
];

describe("isAccending test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = isAscending(v.start);
      log("b: ", b);
      expect(b).to.equal(v.result);
    });
  });
});
