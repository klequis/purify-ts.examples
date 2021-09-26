import { expect } from "chai";
import { firstWord } from "./firstWord";

const valsToTest = [
  {
    start: "Hello world",
    result: "Hello",
  },
  {
    start: " a word ",
    result: "a",
  },
  {
    start: "don't touch it",
    result: "don't",
  },
  {
    start: "greetings, friends",
    result: "greetings",
  },
  {
    start: "... and so on ...",
    result: "and",
  },
  {
    start: "hi",
    result: "hi",
  },
  {
    start: "Hello.World",
    result: "Hello",
  },
  {
    start: ".Hello world",
    result: "Hello",
  },
  {
    start: "Good bye.",
    result: "Good",
  },
];

describe("firstWord test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = firstWord(v.start);
      expect(b).to.equal(v.result);
    });
  });
});
