import {describe} from 'mocha'
import { expect } from 'chai'
import { valid_spacing } from './K1D.js'

describe("Testing the function to verify space in the string",()=>{
    it("should return false when string is undefined or not string",()=>{
        expect(valid_spacing()).to.be.false
    })
    it("should return false when it has only space ' ' ",()=>{ 
        expect(valid_spacing(" ")).to.be.false
    })
 
    it("should return true when it has not  space '' ",()=>{ 
        expect(valid_spacing("")).to.be.true
        
    })
    it("should return true when string is only word",()=>{
         expect(valid_spacing("Hello")).to.be.true
    })
    it("should return true when it has only space between string ",()=>{ 
        expect(valid_spacing("Hello world")).to.be.true
    })
    it("should return false when it has more space between string ",()=>{ 
        expect(valid_spacing("Hello   world")).to.be.false
        expect(valid_spacing(" Hello world")).to.be.false
        expect(valid_spacing("Hello world ")).to.be.false
        
    })
})