//1................implementation of selection sort
function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
const arr = [5, 7, 6, 1, 3, 2];
console.log(selection(arr));


//2..........................selection sort by length

function Bylength(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].length < arr[min].length) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
let arr = ["apple", "banana", "kiwi", "grape"];
console.log(Bylength(arr));

//3...............Sort an Array of Strings Alphabetically

function chara(str) {
  for (let i = 0; i < str.length; i++) {
    let min = i;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j].toLowerCase() < str[min].toLowerCase()) {
        min = j;
      }
    }
    [str[i], str[min]] = [str[min], str[i]];
  }
  return str;
}
const str = ["banana", "apple", "cherry", "date"];
console.log(chara(str));

//4....................sort the array of obj

function selectionSortObjects(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].age < arr[minIndex].age) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(
  selectionSortObjects([
    { name: "A", age: 25 },
    { name: "B", age: 20 },
    { name: "C", age: 22 },
  ])
);