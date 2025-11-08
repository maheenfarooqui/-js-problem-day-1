// Q1 print right angled star trinagle
let row = 8;
for (let i = 1; i <= 8; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
  // console.log(str);
}

// Q3 print right angled star trinagle inverted

let lines = 5;
for (let i = lines; i >= 1; i--) {
  let strs = "";
  for (let j = i; j >= 1; j--) {
    strs = strs + "*";
  }
  // console.log(strs);
}

// Q4 print star increse by 2

let stars = 6;
for(let i = 1 ; i <= stars ; i++){
  let mystr ='*' + '*';
  for(let j = 1 ; j <= i ; j++){
    mystr = mystr + "*";
  }
  console.log(mystr);
  
}


