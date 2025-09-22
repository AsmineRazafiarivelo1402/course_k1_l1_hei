export function numberAcount(string="") {
   let newString = string.split("");
   return newString.filter(a => Number(a)).reduce((a,v) => v++,0 )
}
console.log( numberAcount("test123"));