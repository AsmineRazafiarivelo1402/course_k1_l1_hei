import { describe } from "mocha";
import { expect } from "chai";
import { pangramme } from "./EX22.js";

describe("Testing the pangram", ()=>{
    it("should return false when sting is null or undefined",()=>{
        expect(pangramme("")).to.be.false
        expect(pangramme()).to.be.false
    });
       it("should return true when sting is The quick brown fox jumps over the lazy dog",()=>{
        expect(pangramme("The quick brown fox jumps over the lazy dog")).to.be.true
       
    });
           it("should return false when sting is This is not a pangram.",()=>{
        expect(pangramme("This is not a pangram")).to.be.false
       
    });
})