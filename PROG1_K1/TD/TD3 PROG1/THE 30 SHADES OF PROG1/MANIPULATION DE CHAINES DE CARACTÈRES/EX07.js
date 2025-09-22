function alterString(string1,string2) {
    let string="";
    if(string1.length == string2.length){
        for (let i = 0; i < string1.length; i++) {
                    string+=string1[i]  + string2[i]
        }
    }
    return string
}
// console.log(alterString("jri","adn"));
// console.log(alterString("amn","sie"));
// console.log(alterString("Mnn","aaa"));
let tableau = [1,2,3]
tableau.splice(0,1)
console.log(tableau);
