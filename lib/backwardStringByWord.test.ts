import { expect } from "chai";
import { backwardStringByWord } from "./backwardStringByWord";

const valsToTest = [
  {
    start: "",
    result: "",
  },
  {
    start: "world",
    result: "dlrow",
  },
  {
    start: "hello world",
    result: "olleh dlrow",
  },
  {
    start: "hello   world",
    result: "olleh   dlrow",
  },
  {
    start: "welcome to a game",
    result: "emoclew ot a emag",
  },
];

describe("backwardStringByWord test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = backwardStringByWord(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
