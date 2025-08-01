//1..................Replace each character with 3rd next character."hello",n=3 ===> "khoor"
function shiftbyn(str, n) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = char.charCodeAt(0); // converts the character into its ASCII code.(104)
    let newcode = code + n; //You add the shift (n = 3) to the ASCII code.(104 + 3 = 107)

    let newchar = String.fromCharCode(newcode); //convert the new ASCII code back to a letter.
    out += newchar;
  }
  return out;
}
console.log(shiftbyn("hello", 3));


//2...................Replace each character with 2nd previous character.
function prevcha(str, n) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let cov = char.charCodeAt(0);
    let code = cov - n;
    let newcode = String.fromCharCode(code);
    out += newcode;
  }
  return out;
}
console.log(prevcha("world", 2));

//3.............shift by 1 after the z roatate it 
function shiftby1(str, n) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let ascii = char.charCodeAt(0);
    let newascii = ascii + n;
    if (newascii > 122) {
      newascii = 97 + (newascii - 123);
    }
    let newcode = String.fromCharCode(newascii);
    out += newcode;
  }
  return out;
}
console.log(shiftby1("xyz", 1));

//4.......................Shift by 13 (ROT13 cipher)
function me(str, n) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let ascii = char.charCodeAt(0);
    let newascii = ascii + n;
    if (newascii > 122) {
      newascii = 97 + (newascii - 123);
    }
    let newchar = String.fromCharCode(newascii);
    out += newchar;
  }
  return out;
}
console.log(me("anjali", 13));