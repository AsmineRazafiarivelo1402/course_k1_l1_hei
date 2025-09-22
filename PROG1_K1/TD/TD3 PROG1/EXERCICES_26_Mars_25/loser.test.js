import { describe } from "mocha";
import { expect } from "chai";
import { getLoser } from "./loser.js";
describe("Testing that who is a loser",()=>{
    it("should return ['Rachel',10] when object are example{'Elena': 17,  'Alice':20,'JAcob':15,'Nikolas':23,'Rachel':10}",()=>{
        expect(getLoser({
            "Elena": 17,
            "Alice":20,
            "JAcob":15,
            "Nikolas":23,
            "Rachel":10
        })).to.deep.equal(["Rachel",10])
    } );
    it("should return [] when object is null",()=>{
        expect(getLoser()).to.deep.equal([])
    });
    it ("should return [] when object is undefined",()=>{
        expect(getLoser()).to.deep.equal([])
    })
})