import { describe } from "mocha";
import { expect } from "chai";
import { camelCase } from "./EX12.js";
describe("test the string if it like camelCase proprieties", ()=>{
     it("should return 'my Awesome Code' when string is 'myAwesomeCode'",()=>{
        expect(camelCase("myAwesomeCode")).to.be.equal("my Awesome Code")
    });
    it("should return '' when string is ''",()=>{
        expect(camelCase("")).to.be.equal("")
    });
    it("should return 'myawesomecode' when string is 'myawesomecode'",()=>{
        expect(camelCase("myawesomecode")).to.be.equal("myawesomecode")
    });
    it("should return 'my Awesome Code' when string is 'my Awesome Code'",()=>{
        expect(camelCase("my Awesome Code")).to.be.equal("my Awesome Code")
    });

})