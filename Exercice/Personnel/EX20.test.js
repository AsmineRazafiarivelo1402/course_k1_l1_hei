import {describe} from 'mocha';
import { expect } from 'chai';
import { square } from './EX20.js';
describe("TESTING THE FUNCTION TO CHANGE THE EVERY NUMBER  TO THIS SQUARE",()=>{
    // it("should return error when entier is undefined or null",()=>{
    //     expect(square())
    // })
    it("should return 811181 when number is 9119",()=>{
        expect(square(9119)).to.equal(811181)
    })
})