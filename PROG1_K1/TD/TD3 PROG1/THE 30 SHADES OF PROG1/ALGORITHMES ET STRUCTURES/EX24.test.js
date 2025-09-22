import { describe } from "mocha";
import { expect } from "chai";
import { duplicate } from "./EX24.js";

describe("Testing duplicate function",()=>{
    it("should return '' when string is null or undefined",()=>{
        expect(duplicate("")).to.be.equal("")
        expect(duplicate()).to.be.equal("")
    });
     it("should return '(((' when string is 'din'",()=>{
        expect(duplicate("din")).to.be.equal("(((")
        
    });
     it("should return '()()()' when string is 'recede'",()=>{
        expect(duplicate("recede")).to.be.equal("()()()")
    });
       it("should return ')())())' when string is 'Success'",()=>{
        expect(duplicate("recede")).to.be.equal("()()()")
    });
})