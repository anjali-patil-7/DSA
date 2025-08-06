//1................print the numbers from n to 1
function bla(n) {
  if (n === 0) return;
  console.log(n);
  bla(n - 1);
}
bla(5);

//2..............print numbers from 1 to n
function mla(n, i = 1) {
  if (i > n) return;
  console.log(i);
  mla(n, i + 1);
}
mla(5);

//3..............Factorial of the number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//4.............sum of n natural numbers
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log(sum(4));

// sum(4)
// = 4 + sum(3)
// = 4 + (3 + sum(2))
// = 4 + (3 + (2 + sum(1)))
// = 4 + (3 + (2 + (1 + sum(0))))
// = 4 + (3 + (2 + (1 + 0)))       ← base case reached here
// = 4 + (3 + (2 + 1))
// = 4 + (3 + 3)
// = 4 + 6
// = 10


//5.............fibonacci numbers at position 5 
function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(5));


//5.5......................fibnocci sequenses
function fibnocci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibnocci(n - 1) + fibnocci(n - 2);
}
for (let i = 0; i < 10; i++) {
  console.log(fibnocci(i));
}

//6...................reverse the string
function revstr(str) {
  if (str.length <= 1) return str;
  return revstr(str.slice(1)) + str[0];
}
console.log(revstr("hello"));


//7............check the string is palindrome or not
function ispal(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return ispal(str, left + 1, right - 1);
}
console.log(ispal("anjali"));


//8...........find the max number from array
function max(arr, n = arr.length) {
  if (n === 1) return arr[0];
  return Math.max(arr[n - 1], max(arr, n - 1));
}
console.log(max([1, 3, 5, 7, 9]));

//9...............Linear search using rescurion
function linearSearch(arr, target, index = 0) {
  if (index === arr.length) return -1; // Base case: reached end, not found
  if (arr[index] === target) return index; // Element found
  return linearSearch(arr, target, index + 1); // Move to next element
}

// Example
console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([1, 2, 3], 5));             // Output: -1



//10...................Binary search using recursion
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1; // Base case: not found

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;        // Found
  else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Search right half
  }
}

// Example
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(binarySearch([1, 3, 5, 7], 6));          // Output: -1



//11................find the prime numbers upto n 
function isprime(n, i = 2) {
  if (n < 2) return false;
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return isprime(n, i + 1);
}
function printprime(n, curr = 2) {
  if (curr > n) return;
  if (isprime(curr)) console.log(curr);
  printprime(n, curr + 1);
}
printprime(30);


//12.................