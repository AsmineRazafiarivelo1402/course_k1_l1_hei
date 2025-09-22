import { describe } from "mocha";
import { expect } from "chai";
import { longestString } from "./K1I.js";
describe("Testing that the function return the longest word in the string", () => {
  it("should return [] when, the sting is undefined or null", () => {
    expect(longestString(4)).to.deep.equal([]);
    expect(longestString("", 4)).to.deep.equal([]);
  });
  it("should return '' when, the n-word is undefined or null", () => {
    expect(
      longestString("The  quick  brown  fox  jumps  over  the  lazy  dog")
    ).to.deep.equal([]);
  });
  it("should return 'The  quick  brown  fox  jumps  over  the  lazy  dog' when, the sting is undefined or null", () => {
    expect(
      longestString("The  quick  brown  fox  jumps  over  the  lazy  dog", 4)
    ).to.deep.equal(["quick", "brown", "jumps"]);
  });
});
