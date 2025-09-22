// Votre tâche est donc de créer une fonction qui va effacer les X et les remplacer par *. Toutes les valeurs
// qui ne sont pas X doivent être laissées identiques.

const skinSkan = (tatouage=[]) => {
  let newArray = []
  let pos
  newArray=tatouage.map(element => 
   
    element.replace("*","X")
   
    

    
    
  )
 

  
console.log(newArray);

 


  
  
}

console.log(skinSkan([['','','','','','X','','X'],
['','','','X','','X','','X'],
['','','X','','X','X','','X']]));

skinSkan([1,2,3,4,5,6,17,24,1,4,5,6])


// var a = ["t", "i", "t", "o", "u"];
// var iterateur = a.values();

// console.log(iterateur.next().value); // t
// console.log(iterateur.next().value); // i
// console.log(iterateur.next().value); // t
// console.log(iterateur.next().value); // o
// console.log(iterateur.next().value); // u

// andies = [ 1,2,3,4,5 ] 2,2,4,4,6 =>
// Distribution 1: [ 4,2,3,4,5 ]  
// Distribution 2: [ 5,3,3,4,5 ]
// Distribution 3: [ 6,5,4,4,5 ]
// Distribution 4: [ 6,6,5,4,5 ]
// Distribution 5: [ 6,6,6,5,5 ]
// Distribution 6: [ 6,6,6,6,6 ]
