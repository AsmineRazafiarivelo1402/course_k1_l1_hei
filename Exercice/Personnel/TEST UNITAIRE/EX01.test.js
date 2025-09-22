import { describe } from "mocha";
import { expect } from "chai";
import { bus } from "../bus.js";
describe ("Testing ",()=>{
    it("should return [] when array is undefined ",()=>{
        expect(bus()).to.deep.equal([])
    })
    it("should return [] when array is null ",()=>{
        expect(bus([])).to.deep.equal([])
    })
    it("should return 5 when array is null ",()=>{
        expect(bus([[10,0],[3,5],[5,8]])).to.deep.equal(5)
    })
    it("should return 17 when array is null ",()=>{
        expect(bus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).to.deep.equal(17)
    })
   
})