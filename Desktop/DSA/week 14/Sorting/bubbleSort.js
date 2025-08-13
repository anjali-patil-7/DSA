///...............implementation of sorting array(implementation/ ascending order)
function bubblesort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubblesort([3, 4, 5, 2, 1]));

//1............sorting in descending order
function descending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(descending([4, 2, 9, 1]));

//2................sorting using temp method
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(sort([3, 5, 4, 6, 7, 2, 1]));

//3................sort character in string
function chara(str) {
  let out = str.split("");
  for (let i = 0; i < out.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < out.length - i - 1; j++) {
      if (out[j] > out[j + 1]) {
        [out[j], out[j + 1]] = [out[j + 1], out[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return out.join("");
}
console.log(chara("javascript"));

//4..................sort array of object by properties
let people = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 22 },
];
for (let i = 0; i < people.length - 1; i++) {
  let swapped = false;
  for (let j = 0; j < people.length - i - 1; j++) {
    if (people[j].age > people[j + 1].age) {
      [people[j], people[j + 1]] = [people[j + 1], people[j]];
      swapped = true;
    }
  }
  if (!swapped) break;
}
console.log(people);

//5...................sort string by length
function length(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < str.length - i - 1; j++) {
      if (str[j].length > str[j + 1].length) {
        [str[j], str[j + 1]] = [str[j + 1], str[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return str;
}
console.log(length(["banana", "apple", "kiwi", "cherry"]));

///6....................
