//1....................Kth largest element
function kthlaregst(arr, k) {
  for (let i = 1; i <= k; i++) {
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if (i === k) {
      return arr[max];
    }
    arr[max] = -Infinity;
  }
}
console.log(kthlaregst([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200], 5));