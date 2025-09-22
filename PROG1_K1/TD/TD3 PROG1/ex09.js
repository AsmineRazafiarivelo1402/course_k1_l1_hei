// Exercice 9 :
// Contexte :
// Jean et Pauline sortent ensemble. Jean habite à 5 km de chez Pauline et
// malheureusement aucun d’eux n’ a de téléphone avec eux. Pourtant ils veulent
// constamment se parler. Fort heureusement, Ken, le transporteur de lait passe chez
// Pauline puis chez Jean. Alors, Ken emmène la lettre venant de Pauline pour la donner à
// Jean. Et inversement. Pour garder toute confidentialité, Pauline et son copain ont décidé
// de coder les lettres qu’ils s’envoient.
// Ils écrivent donc toutes les phrases à l’envers, c’est-à-dire que tous les mots sont écrits
// dans l’ordre inverse que la normale. Et chaque mot contient un J au début et un P à la fin.
// Crée donc une fonction decode qui va décoder le message.
// Entrée : decode(“ jenceintep jsuisp jjep jquep jcroisp jjep jJeanp”)
// Sortie : “Jean je crois que je suis enceinte”
// ==> 
function decode(phrases="") {
    let newPhrases=phrases.split(" ");
    let messageCode=[]
    let message=[]
    
    for (let i = 0; i < newPhrases.length; i++) {
     messageCode.push((newPhrases[i].slice(1,newPhrases[i].length-1)));
    }
   for (let j = messageCode.length -1; j >=0; j--) {
        message.push(messageCode[j])    
   }
    console.log(message.join(" "));
    
    
}
(decode("jenceintep jsuisp jjep jquep jcroisp jjep jJeanp"));

let topics = [
    "PROG1","Web1","DONNÉES1", "PROG2"
]
const topicsStartingWithPROG = (topics) => {
    return topics.filter(a => a.startsWith("PROG"))
}
console.log(topicsStartingWithPROG(topics));

