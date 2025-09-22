import { describe } from "mocha";
import { expect } from "chai";
import { pascalCase } from "./EX14.js";

describe("Testing the transformation string to Pascal Case", ()=>{
    it("should return 'MiriameAsmine' when string is 'Miriame Asmine or miriame asmine'",()=>{
        expect(pascalCase("Miriame Asmine")).to.be.equal("MiriameAsmine");
        expect(pascalCase("miriame asmine")).to.be.equal("MiriameAsmine")
    });
    it("should return 'Pascal' when string is 'pascal or Pascal'",()=>{
        expect(pascalCase("Pascal")).to.be.equal("Pascal")
        expect(pascalCase("pascal")).to.be.equal("Pascal")
    });
    it("should return 'ImportantVariable' when string is 'ImportantVariabe or importantVariable'",()=>{
        expect(pascalCase("ImportantVariable")).to.be.equal("ImportantVariable")
        expect(pascalCase("importantVariable")).to.be.equal("ImportantVariable")
    });
    it("should return 'Miriame' when string is Miriame or miriame",()=>{
        expect(pascalCase("Miriame")).to.be.equal("Miriame")
        expect(pascalCase("miriame")).to.be.equal("Miriame")
        expect(pascalCase("MIRIAME")).to.be.equal("Miriame")
    })
    it("should return '' when string is ''",()=>{
        expect(pascalCase('')).to.be.equal('')
    });
    it("should return '' when string is undefined",()=>{
        expect(pascalCase()).to.be.equal("")
    });
})