import { describe } from "mocha";
import { expect } from "chai";
import { matrice } from "./EX16.js";

describe("Testing the sum of matrice",()=>{
    it("should return [5,3,6,6] when data are [1,2,1,3],[4,1,5,3],'+'",()=>{
        expect(matrice([1,2,1,3],[4,1,5,3],"+")).to.deep.equal([5,3,6,6])
    });
    it("should return [ -4, 0, -3, 3, 0, -5 ] when data are ([1,2,0,4,3,-1],[5,2,3,1,3,4],'-')",()=>{
        expect(matrice([1,2,0,4,3,-1],[5,2,3,1,3,4],"-")).to.deep.equal([ -4, 0, -3, 3, 0, -5 ])
    });
    it("should return [] when array is nul",()=>{
        expect(matrice([])).to.deep.equal([]);
    });
    it("should return [] when array is undefined",()=>{
        expect(matrice()).to.deep.equal([])
    })
})