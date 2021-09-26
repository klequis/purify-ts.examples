import { expect } from "chai";
import { getFileParts } from "./getFileParts";

const log = console.log;

const valsToTest = [
  {
    start: "1.cad",
    result: { name: "1", ext: "cad" },
  },
  {
    start: "1.aa",
    result: { name: "1", ext: "aa" },
  },
  {
    start: ".bat",
    result: { name: ".bat", ext: "" },
  },
  {
    start: ".aa",
    result: { name: ".aa", ext: "" },
  },
  {
    start: "a.",
    result: { name: "a.", ext: "" },
  },
  {
    start: "1.aa.doc",
    result: { name: "1.aa", ext: "doc" },
  },
  {
    start: ".aa.doc",
    result: { name: ".aa", ext: "doc" },
  },
];

describe("fetFileParts test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = getFileParts(v.start);
      expect(b).to.deep.equal(v.result);
    });
  });
});
