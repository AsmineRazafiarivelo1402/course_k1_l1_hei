import {describe} from 'mocha'
import { expect } from 'chai'
import { DNAStrand } from './EX25.js'

describe("TESTING THE FUNCTION RETURN THE HIGH AND LOW VALUE",()=>{
    it("should return '' when dna is undefined ",()=>{
        expect(DNAStrand()).to.be.equal("")
    })
      it("should return '' when dna  is null ",()=>{
        expect(DNAStrand("")).to.be.equal("")
    })
        it("should return 'TAACG' when string is 'ATTGC' ",()=>{
        expect(DNAStrand('ATTGC')).to.be.equal('TAACG')
    })
        it("should return 'CATA' when string is 'GTAT' ",()=>{
        expect(DNAStrand('GTAT')).to.be.equal('CATA')
    })
})