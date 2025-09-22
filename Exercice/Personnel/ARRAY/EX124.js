// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])  ["WEST"]
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])  ["NORTH", "WEST", "SOUTH", "EAST"]
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])  []

const dirReduc = (direction) => {
    for (let i = 0; i < direction.length; i++) {
        for (let j = 0; j < direction.length; j++) {
            
                if (direction[j]=="NORTH" && direction[j+1]=="SOUTH") {
            direction.splice(j,1,[])
            direction.splice(j+1,1,[])
       }else  if (direction[j+1]=="NORTH" && direction[j]=="SOUTH") {
            direction.splice(j,1,[])
            direction.splice(j+1,1,[])
       }else   if (direction[j]=="WEST" && direction[j+1]=="EAST") {
            direction.splice(j,1,[])
            direction.splice(j+1,1,[])
       }else  if (direction[j+1]=="WEST" && direction[j]=="EAST") {
            direction.splice(j,1,[])
            direction.splice(j+1,1,[])
       }
       direction = direction.filter((a) => a.length!=0)
            
        }
   
        
    }
    return direction
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));



// const months = ["Jan", "March", "April", "June"];
// console.log(months[1])
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months[1])
// ;
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// console.log(months[4])
// months.splice(4, 1, "May");
// console.log(months[4])
// // Replaces 1 element at index 4
// console.log(months);