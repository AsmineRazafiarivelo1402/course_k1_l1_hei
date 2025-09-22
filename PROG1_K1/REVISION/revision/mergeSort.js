function mergeSort(array) {
  // Cas de base : un tableau de 0 ou 1 élément est déjà trié
  if (array.length <= 1) {
    return array;
  }

  // Séparer le tableau en deux moitiés
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Appliquer le tri récursivement sur les deux moitiés
  return merge(mergeSort(left), mergeSort(right));
}

// Fonction pour fusionner deux tableaux triés
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Fusionner les éléments dans l'ordre croissant
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Ajouter les éléments restants (si l'un des deux tableaux n'est pas vide)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Exemple d'utilisation
const tableau = [34, 7, 23, 32, 5, 62];
const tableauTrie = mergeSort(tableau);
console.log(tableauTrie); // Affiche : [5, 7, 23, 32, 34, 62]
