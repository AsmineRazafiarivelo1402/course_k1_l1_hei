// Vous allez créer une fonction mapIt qui va transformer le contenu d’un tableau
// hétérogène composé d’int et de string :
// -pour le cas d’un entier : on le remplacera par son carré;
// -pour le cas d’un string : si la phrase est en minuscule, on la met tout en majuscules,
// inversement si la phrase est en majuscule, on la transforme en minuscule.
// On supposera que tous les strings du tableau sont, soit entièrement minuscules, soit
// entièrement majuscules pour simplifier cet exercice.
// Exemple d’entrée : mapIt(["JE SUIS CONTENTE”, 2, " a ", "hello”, -23, 4.5])
// Sortie attendue : ["je suis contente", "A”, "HELLO”, 529, 20.25]
// Pour travailler avec les majuscules et les minuscules, documentez vous sur les fonctions
// toLowerCase, toUpperCase.


function mapIt(tableau=[]) {
    let acount=[]
    for (let i = 0; i < tableau.length; i++) {
        if([tableau[i]].every(c=>/[A-Z]/.test(c))){
            acount.push(tableau[i].toLowerCase())
        }else if( (![tableau[i]].every(c=>/[A-Z]/.test(c))) && tableau[i]!=Number(tableau[i])){
            acount.push(tableau[i].toUpperCase())
        }else if(tableau[i]==Number(tableau[i])){
            acount.push(tableau[i] * tableau[i])
        }
        
    }
   return acount
}

console.log(mapIt(["JE SUIS CONTENTE",2, "a", "hello", -23, 4.5]));
