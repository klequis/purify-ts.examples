import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { betweenMarkers } from "./betweenMarkers";

const testData = [
  { line: "What is >apple<", left: ">", right: "<", result: "apple" },
  { line: "What is [apple]", left: "[", right: "]", result: "apple" },
  { line: "What is ><", left: ">", right: "<", result: "" },
  { line: "[an apple]", left: "[", right: "]", result: "an apple" },
];

describe('betweenMarkers("What is >apple<", ">", "<"), "apple"', function () {
  testData.forEach((t) => {
    it(`${t.line}`, function () {
      const b = betweenMarkers(t.line, t.left, t.right);
      expect(b).to.equal(t.result);
    });
  });
});
