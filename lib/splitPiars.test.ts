import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { splitPairs } from "./splitPairs";

chai.use(sinonChai);

describe("splitPairs tests", function () {
  it('splitPairs "abcd" -> ["ab", "cd"]', function () {
    const start = "abcd";
    const result = ["ab", "cd"];
    const b = splitPairs(start);
    expect(b).to.deep.equal(result);
  });
  it('splitPairs "abc" -> ["ab", "c_"]', function () {
    const start = "abc";
    const result = ["ab", "c_"];
    const b = splitPairs(start);
    expect(b).to.deep.equal(result);
  });
  it('splitPairs "abcdf" -> ["ab", "cd", "f_"]', function () {
    const start = "abcdf";
    const result = ["ab", "cd", "f_"];
    const b = splitPairs(start);
    expect(b).to.deep.equal(result);
  });
  it('splitPairs "a" -> ["a_"]', function () {
    const start = "a";
    const result = ["a_"];
    const b = splitPairs(start);
    expect(b).to.deep.equal(result);
  });
  it('splitPairs "" -> []', function () {
    const start = "";
    const result: any = [];
    const b = splitPairs(start);
    expect(b).to.deep.equal(result);
  });
});
