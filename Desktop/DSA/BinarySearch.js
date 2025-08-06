///....................BINARY SEARCH IMPLEMENTATION
function binary(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binary([10, 20, 30, 40, 50], 30));



//1..................Find the Index of a Target
function findIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      return left + 1;
    } else {
      return right - 1;
    }
  }
  return -1;
}

console.log(findIndex([1, 3, 5, 7, 9], 5));


//2......................check if an element exists
function check(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

console.log(check([10, 20, 30, 40], 25));


//3.......................first occurance of number
function firstoccur(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // not found

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1; // move to left half
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(firstoccur([2, 4, 4, 4, 8], 4));


//4............................last occurance of number
function lastoccur(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // not found

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1; // move to right  half
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(lastoccur([2, 4, 4, 4, 8], 4));


//5..................Count how many times the number appears
function countoccur(arr, target) {
  let first = firstoccur(arr, target);
  let last = lastoccur(arr, target);

  if (first === -1) {
    return 0;
  } else {
    return last - first + 1;
  }
}
console.log(countoccur([1, 2, 2, 2, 3], 2));


//6......................Replace a number with the target value
function replacewithtarget(arr, search, newvalue) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === search) {
      arr[mid] = newvalue;
      return arr;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("number not found");
  return arr;
}

console.log(replacewithtarget([10, 20, 30, 40], 20, 202));








