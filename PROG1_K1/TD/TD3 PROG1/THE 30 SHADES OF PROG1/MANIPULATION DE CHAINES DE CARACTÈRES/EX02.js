// Suppression des espaces
// Écrire une fonction qui retire tous les espaces d'une chaîne de caractères.
// Exemple : l’entrée “a b c” retourne “abc”
 export function deleteSpace(string="") {
     let newString = string.split(" ").join("")
    return newString;

 }
 console.log(deleteSpace("a b c"));

