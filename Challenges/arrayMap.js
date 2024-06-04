/* eslint-disable no-plusplus */
function subarraySumExists(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // While currentSum is larger than target, move the start pointer to the right
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if currentSum equals target
    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Example usage:
// let arr = [4, 2, 7, 1, 9, 5];
// let target = 17;
console.log(subarraySumExists([4, 2, 7, 1, 9, 5], 17)); // Output: true
