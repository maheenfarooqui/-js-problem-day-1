// Q1 print right angled star trinagle
let row = 8;
for (let i = 1; i <= 8; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + "*";
  }
  // console.log(str);
}

// Q2 print right angled star trinagle inverted

let lines = 5;
for (let i = lines; i >= 1; i--) {
  let strs = "";
  for (let j = i; j >= 1; j--) {
    strs = strs + "*";
  }
  // console.log(strs);
}

// Q3 print star increse by 2

let stars = 6;
for (let i = 1; i <= 2 * stars - 1; i += 2) {
  let mystr = "";
  const current = (i+ 1)/2;
  for (let j = 1; j <= stars + current - 1; j++) {
    if(j<= stars - current){
      mystr += " ";
    }
   else{
     mystr += "*";
   }
  }
  console.log(mystr);
}