export function bus(array=[]) {
    let sumPeople=0
    let peopleLeave=0
    let peopleStay=0
    if(array.length==0 || array==undefined){
        return []
    }else{
        for (let i = 0; i < array.length; i++) {
          sumPeople+=array[i][0]
        peopleLeave+=array[i][1]
        }
       
      
        
        
        peopleStay=sumPeople-peopleLeave
    }
   
    return peopleStay
}
console.log(bus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
