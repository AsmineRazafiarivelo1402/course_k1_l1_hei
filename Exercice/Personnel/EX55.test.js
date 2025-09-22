import { describe } from "mocha";
import { expect } from "chai";
import { order } from "./EX55.js";

describe("TESTING THE order FUNCTION", () => {
  it("should return '' when paramater  is undefined or null ", () => {
    expect(order()).to.be.equal("");
    expect(order("")).to.be.equal("");
  });
  it("should return 'Thi1s is2 3a T4est' when string is 'is2 Thi1s T4est 3a' ", () => {
    
    expect(order("is2 Thi1s T4est 3a")).to.be.equal("Thi1s is2 3a T4est");
  });
  it("should return 'Fo1r the2 g3ood 4of th5e pe6ople' when string is '4of Fo1r pe6ople g3ood th5e the2'", () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).to.be.equal("Fo1r the2 g3ood 4of th5e pe6ople");
   
    
  });


});
