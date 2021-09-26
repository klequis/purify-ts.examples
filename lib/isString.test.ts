import chai, { expect } from "chai";
import sinonChai from "sinon-chai";
import { append } from "lib/append";
import { isString } from "./isString";

chai.use(sinonChai);

const valsToPass = ["", "hi", "3"];
const valsToFail = [1, null, []];

describe("isString tests", function () {
  it("all should be true", function () {
    valsToPass.forEach((v) => expect(isString(v)).to.equal(true));
  });
  it("all should be false", function () {
    valsToFail.forEach((v) => expect(isString(v)).to.equal(false));
  });
});
