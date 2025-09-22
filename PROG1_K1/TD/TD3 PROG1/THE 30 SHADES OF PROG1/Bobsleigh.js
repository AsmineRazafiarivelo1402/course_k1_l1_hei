export const countMaxBobsleigh = (N, map = []) => {
  let max;
  let countBob = 0;
  let spaceFree = 0;
  
    for (const element of map) {
      spaceFree = 0;
      for (let i = 0; i < N; i++) {
        if (element[i] == ".") {
          spaceFree++;
        }else if (element[i] == "X"  ) {
        
            spaceFree=0;
         
        }
        if(spaceFree==4){
            countBob++;
            spaceFree=0;
        }
      }

    }
    
  
  return countBob;
};

console.log(
  countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"])
);

// [“....X”“X....”,“.....”,“..X..”,“X...X”]
