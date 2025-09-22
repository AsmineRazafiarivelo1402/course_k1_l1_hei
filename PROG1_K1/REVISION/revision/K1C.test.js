import  {describe} from 'mocha'
import { expect } from 'chai'
import { pairs } from './K1C.js'

describe("Testing the function that count the pairs consecutifs",()=>{
     it("should return 0 when array is undefined or null",()=>{
        expect(pairs([])).to.equal(0);
        expect(pairs()).to.equal(0);
    })
    it("should return 3 when array is [1,2,5,8,-4,-3,7,6,5]",()=>{
        expect(pairs([1,2,5,8,-4,-3,7,6,5])).to.equal(3);
    })
    it("should return 2 when array is [21, 20, 22, 40, 39, -56, 30, -55, 95, 94]",()=>{
        expect(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])).to.equal(2);
    })
    it("should return 0 when array is [81, 44, 80, 26, 12, 27, -34, 37, -35]",()=>{
        expect(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])).to.equal(0);
    })
    it("should return 4 when array is [-55, -56, -7, -6, 56, 55, 63, 62]",()=>{
        expect(pairs([-55, -56, -7, -6, 56, 55, 63, 62])).to.equal(4);
    })
    it("should return 3 when array is [73, 72, 8, 9, 73, 72]",()=>{
        expect(pairs([73, 72, 8, 9, 73, 72])).to.equal(3);
    })
})