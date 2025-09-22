export function mouton(string=[]) {
   let mouton= string.filter((a)=>a==true)
    return mouton.length
}
console.log(mouton([true, true, true, false,
true, null,true, true, true ,
true, null,false, true, ,false,
true, false, false, true ,
true, true, true, true]));
console.log(mouton([true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true]));
