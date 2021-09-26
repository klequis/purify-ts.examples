import chai, { expect } from "chai";
import { correctSentence } from "./correctSentence";

const testsData = [
  { text: "greetings, friends", result: "Greetings, friends." },
  { text: "Greetings, friends", result: "Greetings, friends." },
  { text: "Greetings, friends.", result: "Greetings, friends." },
];

describe("isString tests", function () {
  testsData.forEach((t) => {
    it(`${t.text}`, function () {
      const b = correctSentence(t.text);
      expect(b).to.equal(t.result);
    });
  });
});
