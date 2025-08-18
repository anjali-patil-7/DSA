//1..........................implementation (sort in asecending order)
function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}
console.log(quicksort([8, 20, -3, 4, -9]));

//2.............................descending order of sorting
function des(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...des(left), pivot, ...des(right)];
}
let arr = [8, 20, -3, 4, -9];
console.log(des(arr));

//3..........................sort the string by alphabethalically

function chara(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...chara(left), pivot, ...chara(right)];
}
console.log(chara(["banana", "apple", "cherry", "date"]));


//4.............................