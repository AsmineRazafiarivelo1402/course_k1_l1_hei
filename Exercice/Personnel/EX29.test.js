import { describe } from "mocha";
import { expect } from "chai";
import { encodage } from "./EX29.js";

describe("TESTING THE encodage FUNCTION", () => {
  it("should return '' when paramater  is undefined or null ", () => {
    expect(encodage()).to.be.equal("");
    expect(encodage("")).to.be.equal("");
  });
  it("should return 'Gug hgs g cgt' when paramater  is Ala has a cat ", () => {
    expect(encodage("Ala has a cat")).to.be.equal("Gug hgs g cgt");
    
  });
it("should return 'Ala has a cat' when paramater  is Gug hgs g cgt ", () => {
    expect(encodage("Gug hgs g cgt")).to.be.equal("Ala has a cat");
    
  });
  it("should return 'GBCE' when paramater  is ABCD ", () => {
    expect(encodage("ABCD")).to.be.equal("GBCE");
    
  });
    it("should return 'agedyropulik' when paramater  is gaderypoluki ", () => {
    expect(encodage("gaderypoluki")).to.be.equal("agedyropulik");
    
  });
});
