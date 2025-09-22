// Array.push()
// Array.pop()
// Array.shift()
// Array.unshift()
let fruits = ["mango","banana","pineapple"]
let pos = fruits.indexOf("Banana");
let removedItem = fruits.splice(pos); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]
// console.log(removedItem);
// console.log(années["2"] != années["02"]);

// ARRAY.CONCAT()
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


// ARRAY.EVERY()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array = [1, 30, 39, 29, 100, 13];
const Array = [1, 30, 39, 29, 10, 13];
console.log(array.every(isBelowThreshold));
// Expected output: FALSE
console.log(Array.every(isBelowThreshold));
// Expected output: TRUE

// ARRAY.INCLUDES
tableau.includes(value)

// array.map() créer un nouveau tableau4

// array.reverse()
// array.some() retourne true si un élèment vérifie la condition

// TRIER D'UN OBJET
// var items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];
// items.sort(function (a, b) {
//   return a.value - b.value;
// });

const months = ["Jan", "March", "April", "June"];
console.log(months[1])
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months[1])
;
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
console.log(months[4])
months.splice(4, 1, "May");
console.log(months[4])
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

