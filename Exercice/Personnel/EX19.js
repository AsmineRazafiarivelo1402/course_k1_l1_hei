const shadesOfGrey = (tableau) =>{
    let rvb
    let shades=[]
    let color=[]
    if(!tableau){
        return []
    }else{
        for (let i = 0; i < tableau.length; i++) {
            color=[]
          for (let j = 0; j < tableau[i].length; j++) {
            rvb=[]
            for (let e = 0; e < tableau[i][j].length; e++) {
               rvb[e]=Math.floor((tableau[i][j]).reduce((a,v) => a+v,0)/3)
                
            }
            color.push(rvb)
            
        }
        shades.push(color)
    }
    }
    return shades
}
console.log(shadesOfGrey([
[[123, 231, 12], [56, 43, 124]],
[[78, 152, 76], [64, 132, 200]]
]));
