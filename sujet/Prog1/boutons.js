function getLaunchButton(buttons) {
    let acc=0;
   for(let i=0;i<buttons.length;i++){
        acc=0;
    for(let index=0;index<buttons.length;index++){
        if(buttons[i]==buttons[index] && i!=index){
            acc++;
            console.log(i + " " + index +" "+ buttons[index] + " "+acc);
           
        }
    }
    if(acc==1){
        return true;
    }
   }
    
   return false;
}
let tab=["rockt","sot","sot","rockt","akory","rocet","sot","salma","salama"]
console.log(getLaunchButton(tab))
