const black_or_white_key = (touche) => {
    let white = [1,3,4,6,8,9,11]
    let color 
    let button 
    if(touche<89){
        color = 12 *  Math.ceil(touche/12)
        button = color - touche
          if(white.includes(button)){
        return 'white'
    }
    }else if(touche>=89 || touche<=100){
        button = 100 -touche
               if(white.includes(button)){
        return 'white'
    }else if(touche<100){
        let except = touche - 100 
    }
    }
  
    return 'black'
   
    
    
}
console.log(black_or_white_key(1));
console.log(black_or_white_key(12));
console.log(black_or_white_key(42));
console.log(black_or_white_key(100));
console.log(black_or_white_key(2017));

