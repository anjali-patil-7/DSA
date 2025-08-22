//1...............................longest Consecutive Repeating substring from the string 
function longestConsecutiveRepeating(str) {
  if (str.length === 0) return "";

  let long = str[0];
  let curr = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      curr += str[i];
    } else {
      curr = str[i];
    }
    if (curr.length > long.length) {
      long = curr;
    }
  }
  return {
    substring: long,
    length: long.length,
  };
}                                                                                                             
console.log(longestConsecutiveRepeating("aaabbcdefffffffffffffffffffffff"));          //{ substring: 'fffffffffffffffffffffff', length: 23 }




