import { describe } from "mocha";
import { expect } from "chai";
import { countNumberInString } from "./EX01.js";

describe ("Testing if the count number in string works very well",()=>{
    it("should return '' if the sting is null",()=>{
        expect(countNumberInString("")).to.be.equal("")
    })
    it("should return '' if the sting is undefined",()=>{
        expect(countNumberInString()).to.be.equal("")
    })
    it("should return 3 if the sting is 'test123",()=>{
        expect(countNumberInString("test123")).to.be.equal(3)
        expect(countNumberInString("1test12")).to.be.equal(3)
        expect(countNumberInString("1te2st1")).to.be.equal(3)
    })
})