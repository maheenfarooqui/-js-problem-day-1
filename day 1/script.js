//Q1 print number 1 to n

// let num = prompt("enter number");

// for(let i = 0 ; i <= num ; i++){
//     console.log(i);
    
// }

let inputNum = document.getElementById("num1");
let outputNum = document.getElementById("submit");
let resultNim = document.getElementById("showNumber");

function printNumber(){
    let num1 = parseInt(inputNum.value);
    resultNim.innerHTML = "";
    for( let i = 0 ; i <= num1 ; i++){
        resultNim.innerHTML += i, "br";

    }

}
outputNum.addEventListener("click", printNumber);

// Q2 print number from N to 1 without changing the condition of above question
let num = 32;
for(let i = 0 ; i <= 32 ; i++){
    console.log(num - i);
    
}

// Q3 print even number 1 to n

let muNum = 10;
for(let i = 0 ; i <= 10 ; i++){
    if(i % 2 == 0){
        console.log(i);
        
    }
    
}
// Q4 give sum of 5 natural numbers means 1+ 2+3+4 =10
// brute force solution and it takes almost 5 second so its not good one 
// time complexity is O(n) means jitna bara number utna time ziada
// console.time();

// let myn = 500000000n ;
// let sum = 0n;
// for (let i = 0n ; i <=myn; i++){
//     sum += i
// }
// console.log(sum);
// console.timeEnd();
// another solution for this and best approach it takes 0.013 ms
// time complexity is O(1) cause jitna bara bhe number ho time aik hi lage ga
console.time();
 let mynum = 500000000;
 let sum1 = (mynum * (mynum + 1)) / 2

 console.log(sum1);
console.timeEnd();

// Q5 factorial of N number

let products = 5 ;
let sumProducts = 1;
for(let i = 1 ; i <= products ; i++){
    sumProducts *= i;
}
console.log(sumProducts);

// Q6 sum of all even numbers
// this is brute force solution

let myEven = 5 ;
let sumEven = 0;

for(let i =0 ; i <= myEven ; i++){
    if(i % 2 === 0)
        sumEven += i
}
console.log(sumEven);

// this is best approach
let myEven1 = 5;
let myNumber = Math.floor(myEven1/2);
let sumEven1 = myNumber * (myNumber + 1)
console.log(sumEven1);

// Q7 Print square of number from 1 to N .

let num7 = 7 ;
for (let i = 0 ; i <= num7 ; i++){
    // console.log(i * i);
    console.log(Math.pow(i , 2));
    
    
}

// HOme Work Practice 

// Q1 prints all number divide by 3 and 5  upto N for example N is 30 so print 30 and 15

// Q2 find sum of all odd numbers upto N

// Q3 print the cubes of number from 1 to N

// Q4 print only the numbers which are even and perfect squares



