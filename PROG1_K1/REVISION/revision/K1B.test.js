import { describe } from "mocha";
import { expect } from "chai";
import { addUnderscore } from "./K1B.js";

describe("Testing the function to add underscore",()=>{
    // it("should have error if the number is undefined,null and it's not number, or the number is smaller than 0",()=>{
    //     expect(addUnderscore()).Throw('The number is undefined');
    //     expect(addUnderscore(-1456789)).Throw('The number must be positive')
    //     expect(addUnderscore('hello')).Throw('This argument is not number')
    // });
    it("should return 0 when number is 0",()=>{
         expect(addUnderscore(0)).to.be.equal(0)
    });
     it("should return 1 when number is 1",()=>{
         expect(addUnderscore(1)).to.be.equal(1)
    });
     it("should return 4547-9-3 when number is 454793",()=>{
         expect(addUnderscore(454793)).to.be.equal('4547-9-3')
    });
   it("should return 1-3-5-7-9 when number is 13579",()=>{
         expect(addUnderscore(13579)).to.be.equal('1-3-5-7-9')
    });
     it("should return 86420 when number is 86420",()=>{
         expect(addUnderscore(86420)).to.be.equal('86420')
    });

})