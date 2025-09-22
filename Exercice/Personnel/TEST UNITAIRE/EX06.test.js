import { describe } from "mocha";
import { expect } from "chai";
import { removeDuplicates } from "../removeDuplicates.js";
describe("Testing the remove duplicates in array",()=>{
    it("should return [] if array is undefined",()=>{
        expect(removeDuplicates()).to.deep.equal([])
    })
    it("should return [] if array is null",()=>{
        expect(removeDuplicates([])).to.deep.equal([])
    })
    it("should return [ 1, 2, 3, 4, 5 ] if array is [1,1,2,4,5,2,1,2,3,5,5,5]",()=>{
        expect(removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])).to.deep.equal([ 1, 2, 3, 4, 5 ])
    })
})