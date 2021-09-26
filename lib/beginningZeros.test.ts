import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { beginningZeros } from "./beginningZeros";

chai.use(sinonChai);

describe("betinningZeros tests", function () {
  it('"100" returns 0', function () {
    const start = "100";
    const result = 0;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });
  it('"001" returns 2', function () {
    const start = "001";
    const result = 2;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });
  it('"100100" returns 0', function () {
    const start = "100100";
    const result = 0;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });

  //
  it('"001001" returns 2', function () {
    const start = "001001";
    const result = 2;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });
  //
  it('"012345679" returns 1', function () {
    const start = "012345679";
    const result = 1;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });
  //
  it('"0000" returns 4', function () {
    const start = "0000";
    const result = 4;
    const b = beginningZeros(start);
    expect(b).to.equal(result);
  });
});
