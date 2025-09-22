function croissant(tableau = []) {
  for (let i = 0; i < tableau.length; i++) {
    let superieur = tableau[0];
    for (let index = 0; index < tableau.length; index++) {
      if (tableau[index] > tableau[index + 1]) {
        superieur = tableau[index];
        tableau[index] = tableau[index + 1];
        tableau[index + 1] = superieur;
      }
    }
  }

  return tableau;
}