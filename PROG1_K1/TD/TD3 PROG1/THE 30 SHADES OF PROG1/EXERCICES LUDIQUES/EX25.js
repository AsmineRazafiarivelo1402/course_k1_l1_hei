const prompt = require("prompt-sync")();
// let lettre = ["JAVA", "JAVASCRIPT", "PYTHON", "RUBBY", "PHP"];
let lettre = "JAVA";
let jeux = "";
jeux.length = lettre.length;
let gamer;
let enter;
let hangnam;
function pendu(string = "") {
  start();
  console.log(check());
}
function start() {
  gamer = prompt("Ecrire un lettre: ");
  enter = gamer.toUpperCase();
}
function check() {
    hangnam = 4;
    if (!lettre.includes(enter)) {
        hangnam--;
        return hangnam
     }else if(lettre.includes(enter)){
        for (let i = 0; i < lettre.length; i++) {
            if (lettre[i] == enter) {
              jeux +=lettre[i];
            } else {
              jeux +=".";
            }
         }
     }  
  return jeux;
}
pendu();
