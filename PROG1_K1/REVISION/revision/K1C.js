export function pairs(tableau = []) {
  let count = 0;
  if (!tableau) {
    return 0;
  } else {
    for (let i = 0; i < tableau.length; i++) {
      if (i % 2 == 0) {
        if ((tableau[i] == tableau[i+1]+1) || (tableau[i]== tableau[i+1] - 1) ) {
          count++;
        }
      }
    }
  }
  return count;
}
