let groupsForK1 = [
  ["Antsa", "Colombe", "Gascar"],
   ["Ny Anja","Zinedis", "Fy","Miora"],
  ["Antsa", "Colombe", "Gascar"],
  ["Tafita", "Fenohasina"],
 
  ["Mihaja", "Jessica", "Randy"],
];
function showAllNames(tableau = []) {
  console.log("Print croissant");

  for (let i = 0; i < groupsForK1.length; i++) {
    for (let j = 0; j < groupsForK1[i].length; j++) {
      console.log(groupsForK1[i][j]);
    }
  }

  console.log("Print decroissant");

  for (let i = groupsForK1.length - 1; i >= 0; i--) {
    for (let j = groupsForK1[i].length - 1; j >= 0; j--) {
      console.log(groupsForK1[i][j]);
    }
  }
}
const coumptName = (nom) => {
  let acount = 0;
  for (let i = 0; i < groupsForK1.length; i++) {
    for (let j = 0; j < groupsForK1[i].length; j++) {
      if (groupsForK1[i][j][0] == "A") {
        acount++;
      }
    }
  }
  return acount;
};
// let groupsForK1 = [
//     ["Antsa", "Colombe", "Gascar"],
//     ["Tafita", "Fenohasina"],
//     ["David", "Asmine", "Manda", "Ilo"],
//     ["Yola", "JEse", "Thyan", "NIja Miahy"],
//     ["Mihaja", "Jessica", "Randy"],
//   ];
const greaterGroups = (group) => {
  let max=group[0].length
  let temp=[]
  for (let i = 0; i < group.length; i++) {
   if(max<group[i].length){
    temp=group[i]
    max=group[i].length
   }else if(max==group[i].length){
    temp.push(group[i])
   }
    
  }
  return temp
}

// showAllNames(groupsForK1);
// console.log(coumptName(groupsForK1));
console.log(greaterGroups(groupsForK1));

