import { describe } from "mocha";
import { expect } from "chai";
import { differenceInArrays } from "./EX17.js";

describe("Testing the difference in array",()=>{
    it("should return [ 2 ] when array is  [1,2,3],[1,3] ",()=>{
        expect(differenceInArrays([1,2,3],[1,3])).to.deep.equal([2])
    });
    it("should return [ 1, 5, 10 ] when array is [1,5,10], [ ]",()=>{
        expect(differenceInArrays(([1,5,10],[]))).to.deep.equal([ 1, 5, 10 ])
    });
    it("should return [] when array is [],[1,3]",()=>{
        expect(differenceInArrays(([],[1,3]))).to.deep.equal([])
    });
    it("should return [] when the second array is undefined",()=>{
        expect(differenceInArrays(([]))).to.deep.equal([])
    });
})