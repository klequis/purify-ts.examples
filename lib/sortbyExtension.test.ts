import { expect } from "chai";
import { sortByExt } from "./sortByExtension";

const valsToTest = [
  {
    start: ["1.cad", "1.bat", "1.aa"],
    result: ["1.aa", "1.bat", "1.cad"],
  },
  {
    start: ["1.cad", "1.bat", "1.aa", "2.bat"],
    result: ["1.aa", "1.bat", "2.bat", "1.cad"],
  },
  {
    start: ["1.cad", "1.bat", "1.aa", ".bat"],
    result: [".bat", "1.aa", "1.bat", "1.cad"],
  },
  {
    start: ["1.cad", "1.bat", ".aa", ".bat"],
    result: [".aa", ".bat", "1.bat", "1.cad"],
  },
  {
    start: ["1.cad", "1.", "1.aa"],
    result: ["1.", "1.aa", "1.cad"],
  },
  {
    start: ["1.cad", "1.bat", "1.aa", "1.aa.doc"],
    result: ["1.aa", "1.bat", "1.cad", "1.aa.doc"],
  },
  {
    start: ["1.cad", "1.bat", "1.aa", ".aa.doc"],
    result: ["1.aa", "1.bat", "1.cad", ".aa.doc"],
  },
];

describe("?? test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = sortByExt(v.start);
      expect(b).to.deep.equal(v.result);
    });
  });
});
