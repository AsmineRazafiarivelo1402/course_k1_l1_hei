import {describe} from "mocha"
import { expect } from "chai";
import { includes } from "./includes.js";

describe("TESTING ELEMENTS INCLUDE IN ARRAY", ()=>{
    it("should return false when array is null",()=>{
        expect(includes("a",[])).to.be.false
    })
    it("should return false when array is undefined",()=>{
        expect(includes("a")).to.be.false
    })
    it("should return false when element is undefined",()=>{
        expect(includes([])).to.be.false
    })
    it("should return true when array is null",()=>{
        expect(includes("a",["a","b","c"])).to.be.true
    })
    it("should return a when array is null",()=>{
        expect(includes(1,[1,2,3])).to.be.false
    })


})