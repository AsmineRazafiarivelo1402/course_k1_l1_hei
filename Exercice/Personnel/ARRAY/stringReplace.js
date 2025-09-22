// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"

function contientToutAlphabet(texte) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  texte = texte.toLowerCase();

  for (let lettre of alphabet) {
    if (!texte.includes(lettre)) {
      return false;
    }
  }

  return true;
}
console.log(contientToutAlphabet("abcdefghijklmnopqrstuvwxyz"));
Math.floor(Math.random() * 11); // 0 à 10 inclus
