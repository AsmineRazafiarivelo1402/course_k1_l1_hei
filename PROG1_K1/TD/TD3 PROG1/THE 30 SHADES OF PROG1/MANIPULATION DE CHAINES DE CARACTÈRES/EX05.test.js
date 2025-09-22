import { describe } from "mocha";
import { expect } from "chai";
import { slice } from "./EX05.js";
describe ("Test if this function works like slice in javascript",()=>{
    it("should return ''  when string is null or undefined",()=>{
        expect(slice("",3,7)).to.be.equal("")
        expect(slice()).to.be.equal("")
    });
    it("should return [] when array is null or undefined",()=>{
      expect(slice([],1,3)).to.deep.equal([])
    });
    it("should return 'mine' when string is 'yasmine',3,7",()=>{
        expect(slice("yasmine",3,7)).to.be.equal("mine")
    });
    it("should return ['hello',2]' when array is ([1, 'hello', 2, 'world'],1,3)",()=>{
        expect(slice([1, "hello", 2, "world"],1,3)).to.deep.equal(["hello",2])
    });
    it("should return '' or [] when indexEnd equal firstIndex ",()=>{
        expect(slice("yasmine",0,0)).to.be.equal("")
        expect(slice([1, "hello", 2, "world"],1,1)).to.deep.equal([])
    })
    it("should return '' or [] when indexEnd is lower than firstindex",()=>{
        expect(slice("yasmine",2,0)).to.be.equal("")
        expect(slice([1, "hello", 2, "world"],5,0)).to.deep.equal([])
    })
})