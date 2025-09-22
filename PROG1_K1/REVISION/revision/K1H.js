export function buyGift(budget,listGift=[]) {
    let count=0
    let gift=0
    let  totakgift=[]
    if(!budget || !listGift || listGift.length==0){
        return 0 
    }else {
        for (let i = 0; i < listGift.length; i++) {
            count=listGift[i]
            gift=1
            for (let j = 0; j < listGift.length; j++) {
                if(i!=j){
                    
                    count+=listGift[j]
                   gift++
                    if(count>20){
                         gift--
                         count=count - listGift[j]
                         
                    }
                   
                }
                
            }
            totakgift.push(gift)
            
        }
    }

    let max = totakgift.sort((a,b)=> b-a)
    return max[0]
}