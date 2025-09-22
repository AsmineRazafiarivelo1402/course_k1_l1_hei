// Créez une fonction cutIt qui va enlever toutes les occurrences d’une lettre donnée en
// paramètre d’une phrase, et qui va retourner la phrase obtenue. Pour rappel les Strings
// sont immuables dans Javascript, vous pouvez changer sa valeur, mais pas l’une de ses
// lettres.
// Exemple d’entrée : cutIt(“All the good girl goes to hell”, “o”)
// Sortie attendue : “All the gd girl ges t hell”
function cutIt(phrases="",word="") {
    let newPhrases = "";
    for (let i = 0; i < phrases.length; i++) {
        if(phrases[i]!=word){
            newPhrases+=phrases[i];
        }
        
    }

    return newPhrases;
}
console.log(cutIt("All the good girl goes to hell", "o"));
