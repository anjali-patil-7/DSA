////........Implemnatation of linear search
function linearsearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearsearch([10, 20, 30, 40], 20));


//1.....................first occurance of target

function firstoccur(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(firstoccur([1, 2, 2, 2, 3], 2));




//2.............last occurence of target

function lastoccur(arr, target) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      result = i;
    }
  }
  return result;
}
console.log(lastoccur([1, 2, 2, 2, 3], 2));


//3............count the target element
 function count(arr, target) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === target) {
       count++;
     }
   }
   return count;
 }
 console.log(count([1, 2, 2, 2, 2, 3, 4], 2));


//4..............replace a number with newvalue
function replace(arr, search, newvalue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      arr[i] = newvalue;
      return arr;
    }
  }
  console.log("element not found");
  return arr;
}
console.log(replace([10, 20, 30, 40], 20, 22));







