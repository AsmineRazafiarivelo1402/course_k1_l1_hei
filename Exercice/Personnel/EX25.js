export const DNAStrand = (dna="") => {
    let DNAComplementary=""
    if(!dna){
        return ""
    }
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                DNAComplementary+="T"
                break;
            case "T":
                DNAComplementary+="A"
                break;
            case "C":
                DNAComplementary+="G"
                break;
            case "G":
                DNAComplementary+="C"
                break;
            default:
                DNAComplementary=""
                
                break;
        }
        
    }
    return DNAComplementary
}
console.log(DNAStrand ("ATTGC")
);
console.log(DNAStrand ("GTAT"));

