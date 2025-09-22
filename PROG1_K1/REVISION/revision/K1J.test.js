import {describe} from 'mocha';
import { expect } from 'chai';
import { rearrangeString } from './K1J.js';
describe("Testing if the function rearrange the string",()=>{
    it(" should return '' when the string is null or undefined",()=>{
        expect(rearrangeString([1,2,3])).to.be.equal("")
        expect(rearrangeString("",[])).to.be.equal("")
    })
      it(" should return '' when the array  is null or undefined",()=>{
        expect(rearrangeString("abcd")).to.be.equal("")
        expect(rearrangeString("abcd",[])).to.be.equal("")
    })
    it("should return '' when the both is null or undefined",()=>{
        expect(rearrangeString()).to.be.equal("")
    })
    it("should return 'acdb' when the parameter are 'abcd', [0, 3, 1, 2]",()=>{
        expect(rearrangeString()).to.be.equal("")
    })
})