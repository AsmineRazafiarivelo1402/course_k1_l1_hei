import { describe } from "mocha";
import { expect } from "chai";
import { decodeMessage } from "./EX13.js";
describe ("TESTING THE DECODAGE MESSAGE",()=>{
    it("should return 'Yes' when message is 'Yet we rise'",()=>{
        expect(decodeMessage("Yet we rise")).to.be.equal("Yes")
    });
    it("should return 'Hats' when message is 'He cannot patch passwords'",()=>{
        expect(decodeMessage("He cannot patch passwords")).to.be.equal("Hats")
    });
    it ("should return '' when string is empty",()=>{
        expect(decodeMessage("")).to.be.equal("")
    })
})