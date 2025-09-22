import { describe } from "mocha";
import { expect } from "chai";
import { killcount } from "./EX28.js";

describe("TESTING THE killcount FUNCTION", () => {
  it("should return [] when paramater  is undefined ", () => {
    expect(killcount()).to.deep.equal([]);
  });
  it("should return [] when counselers  is null ", () => {
    expect(killcount(7)).to.deep.equal([]);
    expect(killcount([],7)).to.deep.equal([]);
    expect(killcount("",7)).to.deep.equal([]);
  });
  it("should return [] when jason  is undefined ", () => {
    expect(killcount([["Tchad", 2], ["Tommy", 9]])).to.deep.equal([]);
    expect(killcount([["Tchad", 2], ["Tommy", 9]],"")).to.deep.equal([]);
  });
  it("should return ['Tiffany', 'Tyler'] when parameters are present [['Tiffany',4],['Jack',6],['Megan',7],['Tyler',3]],6 ", () => {
    expect(killcount([['Tiffany',4],['Jack',6],['Megan',7],['Tyler',3]],6)).to.deep.equal(['Tiffany', 'Tyler']);
  });
});
