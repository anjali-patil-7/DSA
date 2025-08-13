////1....................implementation of insertion sort(asceending order)
function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
console.log(insertion([4, 2, 9, 1]));

//2.....................sort in descending order
function descending(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
console.log(descending([4, 3, 5, 2, 1]));

//3..................sorting character of string
function chara(str) {
  let out = str.split("");
  for (let i = 0; i < out.length; i++) {
    let curr = out[i];
    let j = i - 1;
    while (j >= 0 && out[j] > curr) {
      out[j + 1] = out[j];
      j--;
    }
    out[j + 1] = curr;
  }
  return out.join("");
}
console.log(chara("javascript"));

//4.............sort array of obj by properties
function obj(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].age > curr.age) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
let person = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 22 },
];
console.log(obj(person));


