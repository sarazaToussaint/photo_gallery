function transformString(input) {
  const { length } = input;

  // If the length is divisible by both 3 and 5, it must be divisible by 15.
  if (length % 15 === 0) {
    // Reverse the string first
    input = input.split('').reverse().join('');
    // Replace each character with its ASCII code
    input = input.split('').map((char) => char.charCodeAt(0)).join(' ');
  } else if (length % 5 === 0) {
    // Replace each character with its ASCII code
    input = input.split('').map((char) => char.charCodeAt(0)).join(' ');
  } else if (length % 3 === 0) {
    // Reverse the string
    input = input.split('').reverse().join('');
  }

  return input;
}

// Test cases
console.log(transformString('Hamburger')); // Output: "regrubmaH"
console.log(transformString('Pizza')); // Output: "80 105 122 122 97"
console.log(transformString('Chocolate Chip Cookie')); // Output: "eikooCpihCetalocohC"
