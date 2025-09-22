function getCount(string="") {
    let voyel=["a","e","u","i","o"]
    let newstring=string.toLowerCase()
    let account=0
    for (let i = 0; i < newstring.length; i++) {
        if(voyel.includes(newstring[i])){
            account++
        }
        
    }
    return account
}
console.log(getCount("Asmine"));
