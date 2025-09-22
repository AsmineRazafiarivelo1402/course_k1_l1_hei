import { describe } from "mocha";
import { expect } from "chai";
import { deleteMinValue } from "./EX015.js";
describe("TESTING IF THE MIN VALUE IN ARRAY IS DELETED",()=>{
    it("should return [2, 3] when array is [1, 2, 3]",()=>{
        expect(deleteMinValue([1, 2, 3])).to.deep.equal([2, 3])
    });
    it("should delete the firts min value",()=>{
        expect(deleteMinValue([2, 1, 3])).to.deep.equal([2, 3]);
        expect(deleteMinValue([3, -1, 2])).to.deep.equal([3,2]);
        expect(deleteMinValue([4,5,7,8,0,1])).to.deep.equal([4,5,7,8,1]);
    });
    it ("should return [3,2] when array is [1,3,2]",()=>{
        expect(deleteMinValue([1, 3, 2])).to.deep.equal([3,2])        
    });
    it("should return [2,1,4,5] when array is  [1,2,1,4,5] ",()=>{
        expect(deleteMinValue([1,2,1,4,5])).to.deep.equal([2,1,4,5] )
    });
    it("should return [] when first array is null",()=>{
        expect(deleteMinValue([])).to.deep.equal([])
    });
    it("should return [] when array is undefined",()=>{
        expect(deleteMinValue()).to.deep.equal([])
    });
})