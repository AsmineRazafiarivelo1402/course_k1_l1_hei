// Déplacez la première lettre de chaque mot à la fin de celle-ci, puis ajoute «ay» à la fin du mot.
// 'Pig latin is cool'  igPay atinlay siay oolcay
const reverseWord = (string) => {
  let tmpString =""// Variable to combine the string without space
    let listWord // array to content all word in string without space
    let newText =[]
    listWord = string.split(" ");
    for (let i = 0; i < listWord.length; i++) {
        tmpString=""
        for (let j = 1; j <listWord[i].length; j++) {
            tmpString+= listWord[i][j]
        }
        tmpString+=listWord[i][0] + "ay"
        newText.push(tmpString)
        
    }
   return  newText.join(" ")
}
console.log(reverseWord("Pig latin is cool"));
