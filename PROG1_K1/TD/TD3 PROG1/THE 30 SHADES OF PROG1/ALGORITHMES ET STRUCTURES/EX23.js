function suppression(string="") {
let word = string.split("")
for (let i = word.length-1; i >=0; i--) {
    word=word.filter((a)=> a!="")
if (word[i]=="#" && word[i-1]!="#") {
    word[i]=""
    word[i-1]=""

}
}
for (let i = word.length-1; i >=0; i--) {
    word=word.filter((a)=> a!="")
if (word[i]=="#" && word[i-1]=="#") {
    word[i]=""
    word[i-1]=""

}
}
return word.join("")
}
console.log(suppression("asm#ne#i##"));
console.log(suppression("#####"));
console.log(suppression("manana#ne#i##"));
console.log(suppression("#####"));

// asm#ne#i##
// 1 itération, i=0 =>  asm#ne#i##
// 2 itération, i=1 =>  asm#ne##
// 3 itération, i=2 =>  asm#n#
// 4 itération, i=3 => asm#
// 5 itération, i=4 =>as
