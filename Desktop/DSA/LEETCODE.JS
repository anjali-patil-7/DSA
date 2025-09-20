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


///2.........................find all the numbers disappered in the array

var findDisappearedNumbers = function (nums) {
  let result = [];
  let val = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!val.has(i)) {
      result.push(i);
    }
  }
  return result;
};



