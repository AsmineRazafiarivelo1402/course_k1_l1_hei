import { describe } from "mocha";
import { expect } from "chai";
import { whoseMove } from "../whoseMove.js";

describe ("Testing who moves",()=>{
    it("should return '' when one of parameter is undefined",()=>{
        expect(whoseMove(false)).to.does.equal("")
        expect(whoseMove("black")).to.be.equal("");
    })
    it("should return '' when first parameter is null",()=>{
        expect(whoseMove("",false)).to.be.equal("");
    })
    it("should return 'white' when ('black',false)",()=>{
        expect(whoseMove("black",false)).to.be.equal("white");
    })
    it("should return 'white' when ('white',true)",()=>{
        expect(whoseMove("white",true)).to.be.equal("white");
    })
    it("should return 'black' when ('white',false)",()=>{
        expect(whoseMove("white",false)).to.be.equal("black");
    })
    it("should return 'black' when ('black',false)",()=>{
        expect(whoseMove("black",true)).to.be.equal("black");
    })
})