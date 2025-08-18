///1...................implementation of merge sort (ascending order)
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const sort = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sort.push(left.shift());
    } else {
      sort.push(right.shift());
    }
  }
  return [...sort, ...left, ...right];
}
const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));


//2...................merge two sorted array 
function merge(arr1, arr2) {
  let sort = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      sort.push(arr1[i++]);
    } else {
      sort.push(arr2[j++]);
    }
  }
  return [...sort, ...arr1.slice(i), ...arr2.slice(j)];
}
console.log(merge([1, 3, 5], [2, 4, 6]));


///3...............sort the characters of a string using merge sort logic 
function chara(str) {
  if (str.length < 2) return str;

  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid);
  const right = str.slice(mid);
  return out(chara(left), chara(right));
}
function out(left, right) {
  let res = "";
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res += left[i];
      i++;
    } else {
      res += right[j];
      j++;
    }
  }
  return res + left.slice(i) + right.slice(j);
}
console.log(chara("dcbasw"));


//4.............merge and sort two string 
function mergetwo(str1, str2) {
  let i = 0,
    j = 0,
    res = "";
  while (i < str1.length && j < str2.length) {
    if (str1[i] <= str2[j]) {
      res += str1[i++];
    } else {
      res += str2[j++];
    }
  }
  return res + str1.slice(i) + str2.slice(j);
}
console.log(mergetwo("ace", "bdf"));

//5................merge two string alternatively

function alternate(str1, str2) {
  let i = 0,
    j = 0,
    res = "";
  while (i < str1.length || j < str2.length) {
    if (i < str1.length) res += str1[i++];
    if (j < str2.length) res += str2[j++];
  }
  return res;
}
console.log(alternate("abc", "qwer"));

