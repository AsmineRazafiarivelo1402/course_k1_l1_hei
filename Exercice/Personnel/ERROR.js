function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

const { expect } = require("chai");
const divide = require("../divide"); // Adjust path according to your file

describe("divide()", () => {
  it("should return 2 when dividing 4 by 2", () => {
    expect(divide(4, 2)).to.equal(2);
  });

  it("should throw an error when dividing by 0", () => {
    expect(() => divide(4, 0)).to.throw("Cannot divide by zero");
  });
});