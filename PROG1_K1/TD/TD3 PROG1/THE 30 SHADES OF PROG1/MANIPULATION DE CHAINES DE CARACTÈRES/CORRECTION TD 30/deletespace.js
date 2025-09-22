export function deleteSpace(string="") {
    let newString = string.split(" ").join("")
   return newString;

}
console.log(deleteSpace("a b c"));