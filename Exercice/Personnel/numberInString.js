function solve(string="") {
    let tableau = string.match(/\d+/g) 
     let newArray = tableau.sort((a,b)=>b-a)
     return newArray[0]
}
console.log(solve("gh12cdy695m1"));


