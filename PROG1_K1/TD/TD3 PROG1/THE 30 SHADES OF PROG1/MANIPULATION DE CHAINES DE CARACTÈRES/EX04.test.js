import {describe  } from "mocha";
import { expect } from "chai";
import {sumAndConcatenate} from "./EX04.js"

describe("Count number and Concatenaate String in Array",()=>{
    it("should return 3, 'Hello word' when the array are 1,'Hello',2,'World'",()=>{
        expect(sumAndConcatenate([1, "hello",2, "world"])).to.deep.equal([3,"hello world"])
    });
    it("should return [] when array is undefined or null",()=>{
        expect(sumAndConcatenate([])).to.deep.equal([])
        expect(sumAndConcatenate()).to.deep.equal([])
    });
})