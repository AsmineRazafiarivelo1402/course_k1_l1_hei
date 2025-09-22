import { describe } from "mocha";
import { expect } from "chai";
import { doubleChar } from "../doubleChar.js";

describe ("Testing the function that double the char",()=>{
    it("should return '' if the string is undefined",()=>{
        expect(doubleChar()).to.be.equal("")
    })
    it("should return '' if the string is null",()=>{
        expect(doubleChar("")).to.be.equal("")
    })
    it("should return 'HHeelllloo WWoorrlldd' if the string is 'Hello World'",()=>{
        expect(doubleChar("Hello World")).to.be.equal("HHeelllloo  WWoorrlldd")
    })
    it("should return '11223344!!__' if the string is '1234!_'",()=>{
        expect(doubleChar("1234!_ ")).to.be.equal("11223344!!__  ")
    })

})