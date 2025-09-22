import {describe} from  'mocha'
import { expect } from 'chai'
import { maskify } from './EX21.js'
describe("TESTING THE FUNCTION TO HIDDEN THE CODE ",()=>{
    it("should return 1 when code is 1",()=>{
        expect(maskify('1')).to.equal('1')
    })
     it("should return '#1111' when code is '11111'",()=>{
        expect(maskify('11111')).to.equal('#1111')
    })
      it("should return '############5616' when code is '4556364607935616'",()=>{
        expect(maskify('4556364607935616')).to.equal('############5616')
    })
})
