import { describe } from "mocha";
import { expect } from "chai";
import { alphabetWar } from "./EX30.js";

describe("TESTING THE alphabetWar FUNCTION", () => {
  it("should return 'Let\'s fight again!' when paramater  is undefined or null ", () => {
    expect(alphabetWar()).to.be.equal("Let's fight again!");
    expect(alphabetWar("")).to.be.equal("Let's fight again!");
  });
  it("should return 'Let\'s fight again!' when w and z are same ", () => {
    
    expect(alphabetWar("zdqmwpbs")).to.be.equal("Let's fight again!");
  });
  it("should return 'Right side wins!' when z is more than w", () => {
    expect(alphabetWar("z")).to.be.equal("Right side wins!");
    expect(alphabetWar("zzzzs")).to.be.equal("Right side wins!");
    
  });
    it("should return 'Right side wins!' when w is more than z", () => {
    expect(alphabetWar("w")).to.be.equal("Left side wins!");
    expect(alphabetWar("wwwwwwz")).to.be.equal("Left side wins!");
    
  });

});
