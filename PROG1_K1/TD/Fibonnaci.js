// Fibonacci (n+2) = Fibonacci (n+1) + Fibonacci (n), avec n > 0

function fibonacci(terme) {
    if(terme ==0){
        return 0
    }else if(terme <=2){
        return 1
    }else if(terme>2){
        return fibonacci(terme-2)+fibonacci(terme-1)
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
