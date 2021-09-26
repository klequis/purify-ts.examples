import { expect } from "chai";
import { biggerPrice } from "./biggerPrice";
const valsToTest = [
  {
    limit: 2,
    stock: [
      { name: "bread", price: 100 },
      { name: "wine", price: 138 },
      { name: "meat", price: 15 },
      { name: "water", price: 1 },
    ],
    result: [
      { name: "wine", price: 138 },
      { name: "bread", price: 100 },
    ],
  },
  {
    limit: 1,
    stock: [
      { name: "pen", price: 5 },
      { name: "whiteboard", price: 170 },
    ],
    result: [{ name: "whiteboard", price: 170 }],
  },
];

describe("biggerPrice test", function () {
  valsToTest.forEach((v) => {
    it(`${v.limit} -> ${v.result}`, function () {
      const b = biggerPrice(v.limit, v.stock);
      expect(b).to.deep.equal(v.result);
    });
  });
});
