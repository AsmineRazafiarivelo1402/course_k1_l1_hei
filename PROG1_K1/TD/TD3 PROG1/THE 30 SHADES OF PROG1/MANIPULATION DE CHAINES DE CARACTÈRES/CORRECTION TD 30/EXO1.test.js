import { describe } from "mocha";
import { expect } from "chai";
import { numberAcount } from "../../MANIPULATION DE CHAINES DE CARACTÈRES/EX01.js";

describe( "It counts  numbers in the string", () => {
    it("Should return 3 when the input is test123",()=>{
        expect(numberAcount("test123")).to.be.equal(3)
    });
    it("should return 0 when the input is a blank string",()=>{
        expect(numberAcount("")).to.be.equal(0)
    });
    it("should return 0 when the input is 'test'",()=>{
        expect(numberAcount("test")).to.be.equal(0)
    });
    it("should return 6 when the input is '123456'",()=>{
        expect(numberAcount("123456")).to.be.equal(6)
    });
}) 