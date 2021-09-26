import { expect } from "chai";
import { countDigits } from "./countDigits";

const valsToTest = [
  {
    start: "hi",
    result: 0,
  },
  {
    start: "who is 1st here",
    result: 1,
  },
  {
    start: "my number is 2",
    result: 1,
  },
  {
    start:
      "This picture is an oil on canvas " +
      "painting by Danish artist Anna " +
      "Petersen between 1845 and 1910 year",
    result: 8,
  },
  {
    start: "5 plus 6 is",
    result: 2,
  },
  {
    start: "",
    result: 0,
  },
];

describe("countDigits test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = countDigits(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
