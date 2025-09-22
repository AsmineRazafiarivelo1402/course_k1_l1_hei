import {describe} from 'mocha'
import { expect } from 'chai'
import { highAndLow } from './EX23.js'

describe("TESTING THE FUNCTION RETURN THE HIGH AND LOW VALUE",()=>{
    it("should return '' when string is undefined ",()=>{
        expect(highAndLow()).to.be.equal("")
    })
      it("should return '' when string is null ",()=>{
        expect(highAndLow("")).to.be.equal("")
    })
        it("should return '5 1' when string is '1 2 3 4 5' ",()=>{
        expect(highAndLow("1 2 3 4 5")).to.be.equal("5 1")
    })
})