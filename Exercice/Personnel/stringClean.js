export  function stringClean(text = "") {
   let chiffre = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   let newString = "";
  for (let i = 0; i < text.length; i++) {

    if (!chiffre.includes(text[i])) {
        newString += text[i]
    }

    
      
  }
  
   return newString;
 }

 console.log(stringClean("E31at m2e2 !!"));


