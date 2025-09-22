import {describe} from 'mocha'
import { expect } from 'chai'
import { InitializeNames } from './K1K.js'
describe("Testing function that initialize the people.name",()=>{
    it("should return '' when the string is null or undefined ",()=>{
        expect(InitializeNames("")).to.be.equal("")
        expect(InitializeNames()).to.be.equal("")
    })
     it("should return 'Jack Ryan' when the string is 'Jack Ryan' ",()=>{
        expect(InitializeNames("Jack Ryan")).to.be.equal("Jack Ryan")
         
    }) 
      it("should return 'Lois M. Lane' when the string is 'Lois Mary Lane' ",()=>{
        expect(InitializeNames("Lois Mary Lane")).to.be.equal("Lois M. Lane")
         
    })
    it("should return 'Dimitri' when the string is 'Dimitri' ",()=>{
        expect(InitializeNames("Dimitri")).to.be.equal("Dimitri")
         
    })
    it("should return 'Alice B. C. Davis' when the string is 'Alice Betty Catherine Davis' ",()=>{
        expect(InitializeNames("Alice Betty Catherine Davis")).to.be.equal("Alice B. C. Davis")
         
    })
})