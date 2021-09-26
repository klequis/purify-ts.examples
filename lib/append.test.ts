import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
// import deepEqual from 'deep-equal'
import { append } from "lib/append";

chai.use(sinonChai);

describe("append tests", function () {
  it('append "[1, 2, 3]"', function () {
    const start = [1, 2, 3];
    const appendVal = 4;
    const result = [1, 2, 3, 4];
    const b = append(appendVal, start);
    expect(b).to.deep.equal(result);
  });
  it('append "abc"', function () {
    const start = "ab";
    const appendVal = "c";
    const result = "abc";
    const b = append(appendVal, start);
    expect(b).to.equal(result);
  });
});
