var obj = { toto: "truc", machin: 42 };
console.log(Object.entries(obj)); // [ ['toto', 'truc'], ['machin', 42] ]

// Un objet semblable à un tableau
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Un objet semblable à un tableau
// dont les clés sont aléatoirement ordonnées
var un_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(un_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getToto est une propriété non énumérable
var mon_obj = Object.create(
  {},
  {
    getToto: {
      value: function () {
        return this.toto;
      },
    },
  },
);
mon_obj.toto = "truc";
console.log(Object.entries(mon_obj)); // [ ['toto', 'truc'] ]

// un argument de type primitif sera
// converti en un objet
console.log(Object.entries("toto")); // [ ['0', 't'], ['1', 'o'], ['2', 't'],  ['3', 'o'] ]

// Un tableau vide pour les types primitifs qui n'ont pas de propriétés
console.log(Object.entries(100)); // [ ]

// parcourir les clés-valeurs
var autreObjet = { a: 5, b: 7, c: 9 };

for (var [cle, valeur] of Object.entries(autreObjet)) {
  console.log(cle + " " + valeur);
}

// Ou encore, en utilisant les méthodes génériques
Object.entries(autreObjet).forEach(([clé, valeur]) => {
  console.log(clé + " " + valeur);
});
