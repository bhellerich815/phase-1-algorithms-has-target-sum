function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if(array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/
// make a function called hasTargetSum that checks to see if two numbers from
// the array add up to a target sum. Ex: if array is [1,2,3,4] and target is 6,
// i should return true, because two of the numbers, 2 & 4 in the array add up to 6.
// if the target is 10, i should return false, as no numbers in the array add up to
// 10.

// hasTargetSum([22, 19, 4, 6, 30], 25)
// iterate through each number in the array. for the current number, identify
// complimentary number that adds to the target. compliment = target - current number
// iterate through rest of array and check if any number is our compliment, if yes,
// return true. If i get to the end of the array and have not found any numbers that
// add to the target, return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
