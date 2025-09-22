export function InitializeNames(string) {
  let listname = [];
  let firstname=""
  let lastName = "";
  let  initialize="";
  let secondary=[]
  let fullname=""
  if (!string) {
    return "";
  }

  listname = string.split(" ");


    if (listname.length==1) {
        fullname=string
        
    }
    if(listname.length > 1){
          firstname = listname[0]
         lastName = listname[listname.length - 1];
         for (let i = 0; i < listname.length-1; i++) {
        if(i!=0){
            initialize = listname[i][0] +". "
            secondary+=initialize
        }
        fullname=firstname + " " + secondary + lastName
    }
    }
  

  
  return fullname
}
