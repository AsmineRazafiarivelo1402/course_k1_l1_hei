export function valid_spacing(string) {
  let space = 0;
  if (string==null || string == " " || string[0]==" " || string[string.length -1]==" ") {
    return false;
  } else if(string.length==0){
    return true
  }
  else {
    for (let i = 0; i < string.length; i++) {
       if(string[i]==" " && i!=0 && i!=string.length-1 && string.length!=0){
        space++
       }
        
    }
  }
 if(space==1 || space==0){
    return true
 }
 return false
}



