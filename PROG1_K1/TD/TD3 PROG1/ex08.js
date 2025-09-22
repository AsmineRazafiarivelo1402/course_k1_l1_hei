// Exercice 8:
// Vous allez créer une fonction truncate qui imitera la fonction prédéfinie slice de Javascript.
// Pour info la fonction slice donne en sortie une portion du tableau d'origine, la portion est
// définie par un indice de début et un indice de fin (indice de fin exclu). Votre fonction
// truncate doit prendre en paramètre un indice de début et un indice de fin.
// Veillez à émettre un message d’erreur au cas où les indices données sont incorrects :
// indice de début négatif, indice de fin qui dépasse l’indice maximal du tableau.
// Exemple d’entrée : animaux = ['fourmi', 'boeuf', 'chameau, 'canard', 'éléphant'];
// Résultat attendu :
// truncate(animaux, 2, 4) va donner [‘chameau’, ‘canard’].
// truncate (animaux, 0,1) va donner [‘fourmi’]
// truncate(animaux, 0,0) va donner []
function truncate(tableau="",indexDebut,index_Fin) {
    let resultat =[]
    if(indexDebut<0 || index_Fin>tableau.length){
        return "L'indice est incorrect"
    }else if(indexDebut==index_Fin){
        return []
    }else if(indexDebut==index_Fin-1){
       resultat.push(tableau[indexDebut])
    }else if((indexDebut<index_Fin && indexDebut>=0) && index_Fin<=tableau.length){
          resultat.push(tableau[indexDebut])
          resultat.push(tableau[index_Fin-1])
    }
   return resultat
}
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], -1, 0));
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], -1, 10));
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], 0, 14));
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], 0, 0));
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], 0, 1));
console.log(truncate(['fourmi', 'boeuf', 'chameau', 'canard' ,'éléphant'], 2, 4));

