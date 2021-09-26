import { expect } from "chai";
import { sumNumbers, getNumbersFromString } from "./sumNumbers";

const log = console.log;

const valsToTest = [
  {
    start: "hi",
    result: 0,
  },
  {
    start: "who is 1st here",
    result: 0,
  },
  {
    start: "my numbers is 2",
    result: 2,
  },
  {
    start:
      "This picture is an oil on canvas " +
      "painting by Danish artist Anna " +
      "Petersen between 1845 and 1910 year",
    result: 3755,
  },
  {
    start: "5 plus 6 is",
    result: 11,
  },
  {
    start: "",
    result: 0,
  },
];

const valsToTest1 = [
  {
    start: "hi",
    result: "|",
  },
  {
    start: "who is 1st here",
    result: "|",
  },
  {
    start: "my numbers is 2",
    result: "|2",
  },
  {
    start:
      "This picture is an oil on canvas " +
      "painting by Danish artist Anna " +
      "Petersen between 1845 and 1910 year",
    result: "|1845|1910|",
  },
  {
    start: "5 plus 6 is",
    result: "|5|6|",
  },
  {
    start: "",
    result: "|",
  },
];

describe("getNumbersFromString test", function () {
  valsToTest1.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = getNumbersFromString(v.start);
      expect(b).to.equal(v.result);
    });
  });
});

describe("sumNumbers tests", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = sumNumbers(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
