function triMixte(tableau=[]) {
   let newTab;
   let newArray;
   let tri=[]
   newTab=tableau.filter((a) => isNaN(a))
   newArray=(tableau.filter((a) => isNaN(a)==false ))
    tri=newTab + ","+newArray
   return tri.split("'")
}
console.log(triMixte([1,"a",2,"d","c",3,4]));
// console.log(!(isNaN("a")));
 
