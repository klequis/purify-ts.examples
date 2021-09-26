import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { nearestValue } from "./nearestValue";

chai.use(sinonChai);

describe("nearestValue tests", function () {
  // nearestValue([4, 7, 10, 11, 12, 17], 9) == 10;
  it("[4, 7, 10, 11, 12, 17], 9), 10", function () {
    const start = [4, 7, 10, 11, 12, 17];
    const searchVal = 9;
    const result = 10;
    const b = nearestValue(start, searchVal);
    expect(b).to.equal(result);
  });
  // nearestValue([4, 7, 10, 11, 12, 17], 8) == 7;
  it("[4, 7, 10, 11, 12, 17], 8), 7", function () {
    const start = [4, 7, 10, 11, 12, 17];
    const searchVal = 8;
    const result = 7;
    const b = nearestValue(start, searchVal);
    expect(b).to.equal(result);
  });
  // nearestValue([4, 8, 10, 11, 12, 17], 9) == 8;
  it("[4, 8, 10, 11, 12, 17], 9), 8", function () {
    const start = [4, 8, 10, 11, 12, 17];
    const searchVal = 9;
    const result = 8;
    const b = nearestValue(start, searchVal);
    expect(b).to.equal(result);
  });
  // nearestValue([4, 9, 10, 11, 12, 17], 9) == 9;
  it("[4, 9, 10, 11, 12, 17], 9), 9", function () {
    const start = [4, 9, 10, 11, 12, 17];
    const searchVal = 9;
    const result = 9;
    const b = nearestValue(start, searchVal);
    expect(b).to.equal(result);
  });
  // nearestValue([4, 7, 10, 11, 12, 17], 0) == 4;
  it("[4, 7, 10, 11, 12, 17], 0), 4", function () {
    const start = [4, 7, 10, 11, 12, 17];
    const searchVal = 0;
    const result = 4;
    const b = nearestValue(start, searchVal);
    expect(b).to.equal(result);
  });
});
