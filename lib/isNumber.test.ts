import { expect } from "chai";
import { isNumber } from "./isNumber";

const valsToTest = [
  {
    start: null,
    result: false,
  },
  {
    start: "",
    result: false,
  },
  {
    start: undefined,
    result: false,
  },
  {
    start: "1",
    result: true,
  },
  {
    start: 3,
    result: true,
  },
  {
    start: "3",
    result: true,
  },
  {
    start: "a is an a",
    result: false,
  },
  {
    start: 3.33,
    result: true,
  },
];

describe("isNumber tests", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const start = v.start;
      const result = v.result;
      const b = isNumber(start);
      expect(b).to.equal(result);
    });
  });
});
