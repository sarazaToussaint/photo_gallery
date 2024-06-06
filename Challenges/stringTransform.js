const transformString = (input) => {
  const { length } = input;

  if (length % 15 === 0) {
    input = input.split('').reverse().join('');
    input = input.split('').map((char) => char.charCodeAt(0)).join(' ');
  } else if (length % 5 === 0) {
    input = input.split('').map((char) => char.charCodeAt(0)).join(' ');
  } else if (length % 3 === 0) {
    input = input.split('').reverse().join('');
  }
  return input;
};

// Test cases
console.log(transformString('Hamburger')); // Output: "regrubmaH"
console.log(transformString('Pizza')); // Output: "80 105 122 122 97"
console.log(transformString('Chocolate Chip Cookie')); // Output: "eikooCpihCetalocohC"
