import { describe } from "mocha";
import { expect } from "chai";
import { discoverOriginalPrice } from "./K1A.js";

describe("It test the function to return Original Price",()=>{
    it("should return 0 when one of priceReduce and remise or the both are null or undefined ",()=>{
        expect(discoverOriginalPrice(14)).to.be.equal(0)
        expect(discoverOriginalPrice('',14)).to.be.equal(0)
        expect(discoverOriginalPrice(14,'')).to.be.equal(0)
        expect(discoverOriginalPrice()).to.be.equal(0)
    })
    it("should return 100 when priceReduce is 75 and remise is 25",()=>{
         expect(discoverOriginalPrice(75,25)).to.be.equal(100)
    })
})