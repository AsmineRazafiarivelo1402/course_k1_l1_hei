import { describe } from "mocha";
import { expect } from "chai";
import { deleteSpace } from "./EX02.js"; 

describe ("Test if the string has space and remove it",()=>{
    it("should return '' when string is nul",()=>{
        expect(deleteSpace("")).to.be.equal("")
    })
    it("should return '' when string is undefined ",()=>{
        expect(deleteSpace()).to.be.equal("")
    })
    it("should return 'abc' when string is 'a b c' or ' a b c",()=>{
        expect(deleteSpace("a b c")).to.be.equal("abc")
        expect(deleteSpace(" a b c")).to.be.equal("abc")
    })
    it("should return 'abc' when string is ' abc ' or ' abc' or 'abc '",()=>{
        expect(deleteSpace(" abc ")).to.be.equal("abc")
        expect(deleteSpace("abc ")).to.be.equal("abc")
        expect(deleteSpace(" abc")).to.be.equal("abc")
    })

})