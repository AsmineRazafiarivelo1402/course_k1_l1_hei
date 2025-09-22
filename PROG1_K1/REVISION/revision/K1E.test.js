import {describe} from  'mocha';
import { expect } from 'chai';
import { sumTwoSmallestNumbers } from './K1E.js';

describe("Testing the funnction to return the same of the two smallest",()=>{
    // it("should throw error when lenght of array is bigger than 4",()=>{
    //     expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77,15])).to.be.equal(7)
       
    // })
       // it("should throw error when array has float or negative int,()=>{
    //     expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77,15])).to.be.equal(7)
       
    // })
    it("should return 0 when array is null or undefined",()=>{
        expect(sumTwoSmallestNumbers()).to.be.equal(0)
        expect(sumTwoSmallestNumbers([])).to.be.equal(0)
    })
      it("should return 7 when array is [19, 5, 42, 2, 77]",()=>{
        expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77])).to.be.equal(7)
       
    })
         it("should return 3453455 when array is [10, 343445353, 3453445, 3453545353453]",()=>{
        expect(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])).to.be.equal(3453455)
       
    })
})