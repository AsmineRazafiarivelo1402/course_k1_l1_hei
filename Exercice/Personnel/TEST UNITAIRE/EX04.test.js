import { describe } from "mocha";
import { expect } from "chai";
import { stringClean } from "../stringClean.js";
describe ("Testing the function who cleans the string",()=>{
    it("should return '' when the string is undefined",()=>{
        expect(stringClean()).to.be.equal("")
    })
    it("should return '' when the string is null",()=>{
        expect(stringClean("")).to.be.equal("")
    })
    it("should return ' '! !' ' when the string is ' '! !' '",()=>{
        expect(stringClean("'! !'")).to.be.equal("'! !'")
    })
    it("should return '(Eat me!!) ' when the string is ' (E3at m2e2!!) '",()=>{
        expect(stringClean("(E3at m2e2!!)")).to.be.equal("(Eat me!!)")
    })
    it("should return ' '' ' when the string is ' '123456789' '",()=>{
        expect(stringClean("'123456789'")).to.be.equal("''")
    })
})