// const person = {
//     firstName: "Alice",
//     lastName: "Smith",
//     age: 25,
//     showFullName:  () => {
//         // console.log(person.this.firstName+"  "+person.this.lastName);
//         console.log(`My name is ${person.firstName}.  I am ${person.age}`)
       
        
//     },
//     isAdult () {
//         return this.age>18;
//     }
    
    
// }
// person.age++
// console.log(person.age);
// (person.showFullName());
// console.log(person.isAdult());




// const student = {math: 14,

//     name : "Tom",
//     grades : {
//         math : 14,
//         science : 17
//     }
// };
// student.grades.history=16
// console.log(student.grades.history);

// const prices = {
//     apple : 0.5,
//     banana : 0.3,
//     mango : 1.2
// };

// for (const fruit in prices) {
  
//         console.log("A",fruit,"coast",prices[fruit],"£");
        
        
   
// }

const printUserInfo = ({name,age,city}) => {
console.log(`${name},"a",${age},"ans et habite à",${city}`);

}
const correctuionPrintUserInfo = (user) => {
console.log(user.name,"a",user.age,"ans et habite à",user.city);
console.log(user.name,"a",user.age,"ans et habite à",user.city);
}
printUserInfo({name:"Alice",age:25,city:"Paris"})
correctuionPrintUserInfo({name:"Alice",age:25,city:"Paris"})
const doubleValues = (obj) => {
    let object = {}
    for (const number in obj) {
      object[number] =  obj[number] * 2 
    }
    return object
}

console.log(doubleValues({a:2,b:3}));

const countLetters =(str) => {

}
