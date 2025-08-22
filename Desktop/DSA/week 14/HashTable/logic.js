//1...................remove the duplicate elements from string
function removeduplicate(str) {
  let table = {};
  let result = "";
  for (let char of str) {
    if (!table[char]) {
      table[char] = true;
      result += char;
    }
  }
  return result;
}
console.log(removeduplicate("aabbccd"));  //abcd

//2......................remove duplicate complelety 

function removeallduplicate(str) {
  let table = {};
  let result = "";

  for (let chara of str) {
    if (table[chara]) {
      table[chara]++;
    } else {
      table[chara] = 1;
    }
  }

  for (let chara of str) {
    if (table[chara] === 1) {
      result += chara;
    }
  }
  return result;
}
console.log(removeallduplicate("anjalii"));

//3...............first non repeacting element 

function firstnonrepeating(str) {
  let table = {};
  //count the frequ of each character
  for (let char of str) {
    table[char] = (table[char] || 0) + 1;
  }
  //find the 1st chara with count 1
  for (let char of str) {
    if (table[char] === 1) return char;
  }
  return null;
}
console.log(firstnonrepeating("anjali"));



//4.....................least occured number in array

function leastOcuured(arr) {
  let table = {};
  for (let num of arr) {
    table[num] = (table[num] || 0) + 1;
  }
  let min = Infinity,
    res = null;
  for (let key in table) {
    if (table[key] < min) {
      min = table[key];
      res = key;
    }
  }
  return res;
}
console.log(leastOcuured([1, 2, 2, 3, 3, 3, 4]));   // 1


//5.................uncommon elements from two arrays
function uncommon(arr1, arr2) {
  let table = {};

  for (let x of arr1) {
    table[x] = (table[x] || 0) + 1;
  }
  for (let y of arr2) {
    table[y] = (table[y] || 0) + 1;
  }
  return Object.keys(table).filter((k) => table[k] === 1);
}
console.log(uncommon([1, 2, 3], [2, 3, 4]));


//6....................two sum in O(n)


function twoSum(arr, target) {
  let table = {};
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    if (table[comp] !== undefined) return [table[comp], i];
    table[arr[i]] = i;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); 


//7...................check the Anagrams

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let table = {};
  for (let char of str1) {
    table[char] = (table[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!table[char]) return false;
    table[char]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("pat", "mat"));



//8..............valid paranthies
function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // push opening bracket
    } else {
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false; // mismatch or no opening bracket
      }
    }
  }
  return stack.length === 0; // valid if nothing left
}

// Test
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([)]"));     // false
console.log(isValid("{[]}"));     // true
