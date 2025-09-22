const prompt= require("prompt-sync")()
const choose = +prompt("Menu: 1)Versement 2)Retrait 3)Consultation du solde 4)Quitter " )
console.log(choose)
let money
let solde =+

function versement(){
    solde = +prompt("Combien voulez-vous verser: ")

}

function retrait(){
    let retirer=+prompt("Combien voulez-vous retirer: ")
    if(retirer<=solde){
        money=solde - retirer
        console.log("Votre retrait de " + retirer + " est réussi." )
        console.log("Votre solde actuel est " + money +"Ar")
    }else{
        console.log("Votre solde est insuffisant.")
    }
}

function Consultation(){
    console.log("Votre solde actuel est: " +solde + "Ar.")
}

function Quitter(){
    console.log("Merci beaucoup!")
}

switch (choose){
    case 1 :
        versement()
        break;
    case 2 :
        retrait()
        break;
    case 3 :
        Consultation()
        break;
    case 4 :
        Quitter()
        break;
    default:
         console.log("Voulez-vous reessayer.")
         break;
}