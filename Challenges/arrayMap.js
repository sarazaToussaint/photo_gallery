const subarraySum = (arr, target) => {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end += 1) {
    currentSum += arr[end];

    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start += 1;
    }

    if (currentSum === target) {
      return true;
    }
  }
  return false;
};

// Test cases
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;

console.log(subarraySum(arr, target)); // Output: true
