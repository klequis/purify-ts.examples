import { expect } from "chai";
import { threeWords } from "./threeWords";
const valsToTest = [
  {
    start: "Hello World hello",
    result: true,
  },
  {
    start: "He is 123 man",
    result: false,
  },
  {
    start: "1, 2, 3, 4",
    result: false,
  },
  {
    start: "bla bla bla bla",
    result: true,
  },
  {
    start: "Hi",
    result: false,
  },

  {
    start: "Joe's bike is nice",
    result: true,
  },
  {
    start: "Is Jane's 6 ft tall",
    result: false,
  },
  {
    start: "Sue is 5ft 7",
    result: true,
  },
];

describe("threeWords test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = threeWords(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
