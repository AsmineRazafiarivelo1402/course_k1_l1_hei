// let fahrenheit = [ 45, 32, 0, 50, 75, 80, 120, 99 ]
// let celcius = fahrenheit.map((elem)=> Math.round((elem - 32) * 5 / 9))
// // celcius  [ 7, 0, -18, 10, 24, 27, 49, 37 ]
// console.log(celcius);

// let pair = fahrenheit.map((r,k) =>(k%2==0) ? "okey" : k)
// console.log(pair);
//  let newarray = fahrenheit.filter((n=>n%2!=0))
//  console.log(newarray);
//  let test = fahrenheit.filter(v=>v>50).map((v,k)=>[fahrenheit[k],(v-32)*5/9])
//  console.log(test);

// let tableau = [1,2,3]
// let somme = tableau.reduce((a,v)=>a+v,3)
// console.log(somme);
// let password = "ASMINE"
// let search = password.match(/\d+/g)
// console.log(search);
// let test = /[^A-Z]/g.test(password)
// console.log(test);
// const note = [1,2,3,4,5,6,7,8,9,10]
// // const comparaison = note.every((v => v>100))
// const comparaison2 = note.filter((v => v<100)).length==1
// console.log(comparaison2);
let alphabet = ["abc","abC","ABC","cb"]
let abidy = alphabet.filter(v=>/[^A-Z]/.test(v))
let soratra= alphabet.filter(v=>/(.)\1/i.test(v))
// console.log(abidy);
// console.log(soratra);
let tableau=[1,2,3,4,5]
let array=[];
array=tableau.map((r,k) => (r>2)? "okey":r)
console.log(array);

 
