import { expect } from "chai";
import { describe,it } from "mocha";
// import file to be check 
import { deleteSpace } from "./deletespace";
describe("Removing spaces from string", function () {
    describe("Tests with normal values", function () {
        it("should remove spaces when they are between the letters", function () {
            expect(removeSpaces("a b c")).to.equal("abc");
        });
        it("should work if the spaces are before the first letter", function () {
            expect(removeSpaces("        a ")).to.equal("a");
        });
        it("should work if the spaces are the behind of the last letter", function () {
            expect(removeSpaces("a     ")).to.equal("a");
        });
        it("should return an empty  string when there are spaces only", function () {
            expect(removeSpaces("    ")).to.equal("");
        });
    });
    describe("Tests with weird")
})