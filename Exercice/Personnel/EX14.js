// const food = {};
// const meeting = (order) => {
// order.forEach(entry => {
//   const repas = entry.repas;
//   if (food[repas]) {
//     food[repas]++;
//   } else {
//     food[repas] = 1;
//   }
// });
// console.log(food);

// }

const meeting = (order) =>{
    const food = {};

order.forEach((entry, index) => {
  if (!entry.Repas) {
    console.warn(`⚠️ 'repas' manquant ou vide à l'index ${index}`, entry);
    return;
  }

  const repas = entry.Repas;

  if (food[repas]) {
    food[repas]++;
  } else {
    food[repas] = 1;
  }
});

console.log(food);
}


// // function meeting(tableau=[[]]) {
//     let food=[];//tableau pour stocker  le repas de chaque développeur
//     let acount=0;
//     let resultat=[];//
//     let array=[]
//     //une boucle pour recupérer le repas de chaque développeur
//     for (let i = 0; i < tableau.length; i++) {
//         let [firstname,lastname,pays,continent,age,langue,repas] = tableau[i];
//         food.push(repas);    
//     }
//     //une boucle pour compter le nombre d'options alimentaires
//     for (let i = 0; i < food.length; i++) {
//         acount=1;
//         resultat=[]
//        for (let j = 0; j < food.length; j++) {
//         if(food[i]==food[j] && i!=j){
//             acount++
//             food[j]=null
//         } 
            
//        }
//        food=food.filter((a)=>a!=null)
//        resultat=[food[i], acount]
//        array.push(resultat)       
//     }
//     console.log(array);
    
    
// // }
console.log(
  meeting([
    {
      FirstName: "Noah",
      lastName: "M.",
      pays: "Suisse",
      continent: "Europe",
      age: 19,
      langue: "C",
      Repas: "végétarien",
    },
    {
      FirstName: "Anna",
      lastName: "R.",
      pays: "Liechtenstein",
      continent: "Europe",
      age: 52,
      langue: "JavaScript",
      Repas: "standard",
    },
    {
      FirstName: "Ramona",
      lastName: "R.",
      pays: "Paraguay",
      continent: "Amériques",
      age: 29,
      langue: "Ruby",
      Repas: "vegan",
    },
    {
      FirstName: "George",
      lastName: "B.",
      pays: "Angleterre",
      continent: "Europe",
      age: 81,
      langue: "C",
      Repas: "végétarien",
    },
    {
      FirstName: "Ramona",
      lastName: "R.",
      pays: "Paraguay",
      continent: "Amériques",
      age: 29,
      langue: "Ruby",
      Repas: "vegan",
    },
    {
      FirstName: "George",
      lastName: "B.",
      pays: "Angleterre",
      continent: "Europe",
      age: 81,
      langue: "C",
      Repas: "végétarien",
    },
  ])
);
