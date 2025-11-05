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

// Q3 calculate eletricity bill unit 100 charge 5rs unit 200 charge 7rs onward 10

function calculateBill(units){
    let eBill = 0;
    if(units <= 100){
        eBill = units * 5;
    }
    else if(units <= 200){
        eBill = (100 * 5) + (units - 100) *7;
    }
    else{
        eBill = (100 * 5)+(100 * 7)+(units - 200)*10;
    }
    return eBill;
}
console.log(calculateBill(200));
// loop se bhe ho skta hy

// Q4 check the letter is vowel or consunant

function checkVowel(char = '0'){
    if("aeiou".includes(char.toLowerCase()) && char !== ""){
        return "its a vowel";
    }
    else if (/[a-z]/.test(char.toLowerCase())){
        return "its a consunant";
    }
    return " not a letter"
}
console.log(checkVowel('5'));
// aski cid se bhe ho skta charCode()

// Q4 check if the year is leap year or not.
 function leapYear(year){
    if (year % 400 === 0 ||(year % 100 !==0 && year % 4 === 0)){
        return true;
    }
    return false;
 }
console.log(leapYear(2024));

// home work 
// Q1 check if the char is upper lower case or special charaater

function charCheck(charCase){
    if(/[A-Z]/.test(charCase)){
        return 'uppercase';
    }
    else if(/[a-z]/.test(charCase)){
        return 'lower case';
    }
    return 'special char';
}
console.log(charCheck("^"));

// Q2 check trinagle type using angle side
// Equilateral → all sides equal

//  Isosceles → any 2 sides equal

//  Scalene → all sides different
// Equilateral → all 3 angles are equal (60°, 60°, 60°)

//  Isosceles → any 2 angles are equal

//  Scalene → all angles are different

function angleCheck(a,b,c,x,y,z){
    if((x+y+z !==180) && (a + b <= c || a + c <= b || b + c <= a )){
        return "its not a valid triangle"

    }
    else if((a === b && b===c) && (x===y && y===z)){
        return "it Equilateral";
    }
    else if((a===b || b === c) &&( x ===y || y ===z )){
        return "its  Isosceles";
    }

    return "its Scalene";


}
console.log(angleCheck(3, 4, 5, 90, 60, 30)); // Scalene

// Q3 calculate incom tax slab

function checkIncomTax(tax){
    let incomTax =0 ;
    if(tax <=12000 ){
        return "no incometax";
    }
    else if(tax <= 25000){
        incomTax = tax * 0.05;
    }
    else if(tax <=35000){
        incomTax= tax * 0.10;
    }
    else{
        incomTax = tax * 0.15;
    }
    return incomTax;
}
console.log(checkIncomTax(35000));





