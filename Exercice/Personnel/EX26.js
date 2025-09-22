const combineTheTwoValue = (firstValue, secondValue) => {
  let changing = "";
  changing += firstValue + "" + secondValue;
let firstArray = [];
  for (let i = 0; i < changing.length; i++) {
    
    if (changing[i] == "-") {
      firstArray.push((-1));
    }else if (changing!=NaN){firstArray.push(Number(changing[i]))};
  }
 
  
  return firstArray.sort((a, b) => a - b);
};
const produit = (firstValue, secondValue) => {
  let produitValue = firstValue * secondValue;
  let produitTostring = "" + produitValue;
  let secondArray = [];

  for (let i = 0; i < produitTostring.length; i++) {
    if (produitTostring[i] == "-") {
      secondArray.push((-1));
    }else if(produitTostring[i]!=NaN )secondArray.push(Number(produitTostring[i]));
  }

  return secondArray.sort((a, b) => a - b);
};
export const vampire_test = (firstValue, secondValue) => {
  let firstNumber = combineTheTwoValue(firstValue, secondValue);
  let secondNumber = produit(firstValue, secondValue);
  if (!firstValue || !secondValue) {
    return false;
  } else if (firstNumber.length != secondNumber.length) {
    return false;
  } else if (firstNumber.length == secondNumber.length) {
    for (let i = 0; i < firstNumber.length; i++) {
      if (firstNumber[i] != secondNumber[i]) {
        return false;
        break;
      }
    }
    return true;
  }
};

console.log(vampire_test (204,615) );
 console.log(vampire_test (30, -51));
 
