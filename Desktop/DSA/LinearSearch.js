//1.............Find index if a number exists in the array.
let arr = [4, 7, 1, 9, 12];
let target = 9;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log("found at index : ", i);
  }
}

//2.................Return the index of the first occurrence of a number.
let arr1 = [5, 3, 5, 2, 5];
let target1 = 5;
for (let i = 0; i < arr.length; i++) {
  if (arr1[i] === target1) {
    console.log(`index of target element  : ${i}`);
    break;
  }
}

//2..............check and Return "Not Found" if element is missing.
let arr = [10, 20, 30];
let target = 100;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log(`element found in : ${i}`);
    found = true;
    break;
  }
}
if (!found) {
  console.log(`element not found`);
}

//3...............Check if any element is greater than a given number.
let arr = [3, 6, 9, 2, 5];
let x = 8;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > x) {
    console.log(`yes, ${arr[i]} is greater than 8`);
  }
}

//4...............Find index of last occurrence of a number.
let arr = [4, 2, 3, 2, 4];
let target = 4;
let lastindex = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    lastindex = i;
  }
}
if (lastindex !== -1) {
  console.log(`last occurence at index ${lastindex}`);
} else {
  console.log(`not found`);
}


//5..............Find the first even number in an array.
let arr = [1, 3, 2, 7, 8, 9, 4, 6];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`first event number is ${arr[i]} at index ${i}`);
    break;
  }
}

//6............Find the element with the highest frequency.
let arr = [1, 2, 2, 3, 2, 1];
let count = 0;
let target = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    count++;
  }
}
console.log(`element ${target} occurs ${count} times`);

