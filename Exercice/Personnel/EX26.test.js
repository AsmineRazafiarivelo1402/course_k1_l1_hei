import { describe } from "mocha";
import { expect } from "chai";
import { vampire_test } from "./EX26.js";

describe("TESTING THE VAMPIRE_TEST FUNCTION", () => {
  it("should be false when values is undefined ", () => {
    expect(vampire_test()).to.be.false;
  });
  it("should be false when values  is null ", () => {
    expect(vampire_test("")).to.be.false;
  });
  it("should return true when string is 21,6 ", () => {
    expect(vampire_test(21,6)).to.be.true;
  });
  it("should return true when string is 2947050,8469153 ", () => {
    expect(vampire_test(2947050,8469153)).to.be.true;
  });
  it("should return true when string is 30, -51 ", () => {
    expect(vampire_test(30,-51)).to.be.true;
  });
  it("should return true when string is 204,615 ", () => {
    expect(vampire_test(204,615)).to.be.true;
  });
  it("should return false when string is -246, -510 ", () => {
    expect(vampire_test(-246,-510)).to.be.false;
  });
});
