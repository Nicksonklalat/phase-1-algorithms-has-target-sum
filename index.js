function hasTargetSum(array, target) {
  let seenNumbers = new Set();

  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time complexity: O(n), where n is the number of elements in the array.
*/

/* 
  Add your pseudocode here:
  - Initialize an empty set to store seen numbers.
  - Iterate through each number in the array:
    - Calculate the complement needed to reach the target sum.
    - Check if the complement exists in the set:
      - If yes, return true (we found a pair).
      - If no, add the current number to the set.
  - If no pair is found by the end of the loop, return false.
*/

/*
  Add written explanation of your solution here:
  The function `hasTargetSum` uses a set to keep track of numbers we have seen so far as we iterate through the array.
  For each number, it calculates the complement needed to reach the target sum. It checks if this complement 
  already exists in the set of seen numbers. If it does, it means there exists another number in the array that, 
  together with the current number, sums up to the target. If not, it adds the current number to the set and 
  continues to the next number. If no such pair is found by the end of the loop, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom tests provided in the original code
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Additional tests based on the provided test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
