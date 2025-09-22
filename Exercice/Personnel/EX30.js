// alphabetWar("z");  Right side wins!
// alphabetWar("zdqmwpbs");  Let's fight again!
// alphabetWar("zzzzs");  Right side wins!
// alphabetWar("wwwwwwz");  Left side wins!

export const alphabetWar = (string="") => {
let left = "w"
let right = "z"
let leftPoint = 0
let rightPoint = 0
for (let i = 0; i < string.length; i++) {
   if(string[i]=="w"){
        leftPoint++
   }else if(string[i]=="z"){
    rightPoint++
   }
    
}
if(!string || leftPoint==rightPoint){
    return 'Let\'s fight again!'
}else if( leftPoint>rightPoint){
    return 'Left side wins!'
}else {
    return 'Right side wins!'
}

}