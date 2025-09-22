import { describe } from "mocha";
import { expect } from "chai";
import { countMaxBobsleigh } from "./Bobsleigh.js";

describe("Testing the BobSleigh", () => {
  it("should return 3 when N is 5 and map is like [“....X”“X....”,“.....”,“..X..”,“X...X”] ", () => {
    expect(countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"]));
  });
  it("should throw new Error when N or map is null or undefined", () => {
    expect(countMaxBobsleigh()).throw("Need to define N and map");
  });
  it("should throw new Error when N  is null or undefined ", () => {
    expect(
      countMaxBobsleigh(["....X", "X....", ".....", "..X..", "X...X"])
    ).throw("Need to define N and map");
  });
  it("should throw new Error when  map is null or undefined ", () => {
    expect(countMaxBobsleigh(5)).throw("Need to define N and map");
  });

});
