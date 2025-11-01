// Q1. find the maximum of three numbers

let a = 4;
let b = 4 ;
let c = 2;

if(a >= b && a >= c){
    console.log(a);
    
}
else if( b >= a && b>= c){
    console.log(b);
    
}
else{
    console.log(c);
    
}
// now we do in function

function maxOfThree(a,b,c){
    let max ;
    if(a >= b && a>= c){
        max = a;
    }
    else if(b >= c){
        max = b;
    }
    else{
        max = c;
    }
    return max ;
}
console.log(maxOfThree(20,30,40));
// Math.max(maxOfThree(20,32,54))

// Q2 check the number is positive negative or zero

function findNumber(num){
    if(num  > 0){
        return "positive"
    }
    else if(num < 0){
        return "negative"
    }
    
        return "zero"
    

}
console.log(findNumber(20));

