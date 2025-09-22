import { describe } from "mocha";
import { expect } from "chai";
import { mouton } from "../mouton.js";
describe("Testing the number of sheep",()=>{
    it("should return 17 if there are 17 true in one array",()=>{
        expect(mouton([true, true, true, false,
            true, true, true, true ,
            true, false, true, false,
            true, false, false, true ,
            true, true, true, true ,
            false, false, true, true])).to.deep.equal(17)
    })
    it("should return 0 if the array is null",()=>{
        expect(mouton([])).to.deep.equal(0)
    })
    it("should return 0 if the array is undefined",()=>{
        expect(mouton()).to.deep.equal(0)
    })
    it("should return 0 if the array contents false only",()=>{
        expect(mouton()).to.deep.equal(0)
    })
})