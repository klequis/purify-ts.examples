import chai, { expect } from "chai";
import { isSpace } from "./isSpace";

describe("isSpace tests", function () {
  it('" " -> true', function () {
    const start = " ";
    const result = true;
    const b = isSpace(start);
    expect(b).to.equal(result);
  });
});
