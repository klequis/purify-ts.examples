import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { last } from "lib/last";

chai.use(sinonChai);

describe("last tests", function () {
  it('last "[1, 2, 3]"', function () {
    const start = [1, 2, 3];
    const result = 3;
    const b = last(start);
    expect(b).to.equal(result);
  });
  it('last on "abc" should return "c"', function () {
    const start = "abc";
    const result = "c";
    const b = last(start);
    expect(b).to.equal(result);
  });
});
