import {describe} from 'mocha'
import { expect } from 'chai'
import { smaller } from './EX24.js'

describe("TESTING THE FUNCTION RETURN THE HIGH AND LOW VALUE",()=>{
    it("should return [] when arrayis undefined ",()=>{
        expect(smaller()).to.deep.equal([])
    })
      it("should return [] when array is null ",()=>{
        expect(smaller([])).to.deep.equal([])
    })
        it("should return [4, 3, 2, 1, 0] when string is [5, 4, 3, 2, 1] ",()=>{
        expect(smaller([5, 4, 3, 2, 1])).to.deep.equal([4, 3, 2, 1, 0])
    })
})