// STD24177 -- Sujet K1.L

function numberNearZero(tableau=[]) {
 let value = tableau
 value.push(0)
let near= value.sort((a,b)=> a-b)
let nearZero
    for (let i = 0; i < near.length; i++) {
        if(near[i]==0 && i==0 )   {
        nearZero=near[i+1]
        break
        }else if(near[i]==0 && i!=0)    {
            if(near[i-1]==(near[i+1])*(-1)){
                return null
                break
            }else if(near[i-1]!=(near[i+1])*(-1) && (near[i-1]) * (-1) < near[i+1]){
               
                    return  near[i-1]
                    break
                }else if(near[i-1]!=(near[i+1])*(-1) && (near[i-1]) * (-1) > near[i+1]) {
                    return near[i+1]
                   break
                }
        } 
    }
    return nearZero
    
}

console.log(numberNearZero([5,2,-2]));
console.log(numberNearZero([5,2,2]));
console.log(numberNearZero([5,2,2,-1,-3]));


