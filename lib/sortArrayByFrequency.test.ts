import { frequencySort } from "./sortArrayByFrequency";

import { expect } from "chai";

const valsToTest = [
  {
    start: [4, 6, 2, 2, 6, 4, 4, 4],
    result: [4, 4, 4, 4, 6, 6, 2, 2],
  },
  {
    start: ["bob", "bob", "carl", "alex", "bob"],
    result: ["bob", "bob", "bob", "carl", "alex"],
  },
  {
    start: [17, 99, 42],
    result: [17, 99, 42],
  },
  {
    start: [],
    result: [],
  },
  {
    start: [1],
    result: [1],
  },
];

describe("?? test", function () {
  valsToTest.forEach((v) => {
    it(`${v.start} -> ${v.result}`, function () {
      const b = frequencySort(v.start);
      expect(b).to.deep.equal(v.result);
    });
  });
});
