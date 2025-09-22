import {describe} from 'mocha'
import { expect } from 'chai'
import { buyGift } from './K1H.js'

describe("Testing the budget of the gift",()=>{
    it("should return 0 when the budget is undefined or null,but there is the list  of gift",()=>{
        expect(buyGift([13,14,25,14])).to.be.equal(0)
        
    })
     it("should return 0 when the list of gift   is undefined or null,even there is a budget",()=>{
        expect(buyGift(20,[])).to.be.equal(0)
        expect(buyGift(20)).to.be.equal(0)
    }) 
       it("should return 4 when the budget is 20 and the list of gift is [13, 2, 4, 6, 1]",()=>{
        expect(buyGift(20,[13, 2, 4, 6, 1])).to.be.equal(4)

    })
})