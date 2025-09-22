import  {describe} from 'mocha'
import { expect } from 'chai'
import { gameWinners } from './K1G.js'

describe("Testing who is the winner of the game",()=>{
    it("should return 'none' when one of the gamer  is undefined",()=>{
        expect(gameWinners([150, 'yes'])).to.be.equal("none")
        expect(gameWinners([],[])).to.be.equal("none")
        expect(gameWinners([])).to.be.equal("none")
        expect(gameWinners()).to.be.equal("none")
    })
     it("should return 'none' when  the gamer are undefined",()=>{
       
        expect(gameWinners([],[])).to.be.equal("none")
       
    })
     it("should return 'none' when one of the gamer or the both  is undefined",()=>{
       
        expect(gameWinners([])).to.be.equal("none")
        expect(gameWinners()).to.be.equal("none")
    })
    it("should return ‘team 1 wins!' when [150, 'yes'],[200, 'no'] ",()=>{
        expect(gameWinners([150, 'yes'],[200, 'no'])).to.be.equal("team 1 wins!")
    })
    it("should return ‘team 2 wins!' when [400, 'no'],[350, 'yes'] ",()=>{
        expect(gameWinners([400, 'no'],[350, 'yes'])).to.be.equal("team 2 wins!")
    })
     it("should return ‘draw!' when [200, 'no'],[50, 'yes'] ",()=>{
        expect(gameWinners([200, 'no'],[50, 'yes'])).to.be.equal("draw!")
    })
})