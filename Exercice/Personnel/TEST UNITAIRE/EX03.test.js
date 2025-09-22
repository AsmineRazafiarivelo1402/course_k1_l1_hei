import { describe } from "mocha";
import { expect } from "chai";
import { removeChar } from "../removeChar.js";
describe ("Testing if the first string and the latest are deleting",()=>{
    it("should return '' if the string is null",()=>{
        expect(removeChar("")).to.be.equal("")
    })
    it("should return '' if the string is undefined",()=>{
        expect(removeChar()).to.be.equal("")
    })
    it("should return 'eci est une phras' if the string is 'Ceci est une phrase'",()=>{
        expect(removeChar("Ceci est une phrase")).to.be.equal("eci est une phras")
    })
})