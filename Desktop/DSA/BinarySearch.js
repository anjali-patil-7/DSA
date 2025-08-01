//1..................Find the first occurrence of a number (duplicates allowed).
let arr = [2, 4, 4, 4, 6];
let target = 4;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log(`first occurrence at index : ${i}`);
    found = true;
    break;
  }
}
if (!found) {
  console.log(`not found `);
}

//2......................find the middle elements
let arr = [10, 20, 30, 40, 50];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  left++;
  right--;
}
console.log(`middle element is ${arr[left]}`);



//3................find the index of middle element
let arr = [10, 20, 30, 20, 10];
let left = 0;
let right = arr.length - 1;
while (left < right) {
  left++;
  right--;
}
console.log(`middle index of element ${left}`);