/**
 * 
 * Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer

Edge cases: 
- empty array
- array with 1 element

Considerations: 
- array with 2 elements
- negative numbers

 */

// brute force solution by calculating product of all ints except arr[i]
// time complexity: O(n^2) due to nested loops
function arrayOfArrayProducts(arr) {
  // base case for arr.length <= 1
  if (arr.length <= 1) {
    return [];
  }
  // your code goes here
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // push the result of ints multiplied into res
    // arr[i+1] * arr[i+2]... until we reach end
    let temp = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        temp *= arr[j];
      }
    }
    res.push(temp);
  }
  return res;
}

// console.log(
//   "should return: [20, 16, 80] \n Output: ",
//   arrayOfArrayProducts([8, 10, 2])
// );
// console.log(
//   "should return: [84, 24, 56, 42] \n Output: ",
//   arrayOfArrayProducts([2, 7, 3, 4])
// );

/**
 * Use technique: prefix/suffix products
 * Explanation of optimization: even if using two loops, it only loops over input array twice, so time & space complexity is O(n)
 * 
 * Pseudocode:
 * 0) initialize prefix array to store prefix products from left to right
 * 0) initialize suffix array to store prefix products from right to left
 * 0) initialize result array and fill with 1 based on length of input array
 * 0) base case for arr.length <= 1
 * 1) loop through arr from left to right and store prefix products
 *  - multiply by 1 to skip arr[i]
 *  - update left with values to the right of arr[i]
 * 2) loop through arr from right to left and store suffix products
 *  - multiply by 1 to skip arr[i]
 *  - update right with values to the left of arr[i]
 * 3) return res 
 *
 */

function arrayOfArrayProducts2(arr) {
  const len = arr.length;
  // base case for arr.length <= 1
  if (arr.length <= 1) {
    return [];
  }

  // initialize prefix and suffix arrays

  // initialize result array
  let res = new Array(len).fill(1);

  // prefix: loop through arr from left to right and store prefix products
  let left = 1;
  for (let i = 0; i < len; i++) {
    // multiply by 1 to skip arr[i]
    res[i] *= left;
    // update left with values to the right of arr[i]
    left *= arr[i];
  }
  // suffix: loop through arr from right to left and store suffix products
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= right;
    right *= arr[i];
  }
  return res;
}

console.log(
  "should return: [20, 16, 80] \n Output: ",
  arrayOfArrayProducts2([8, 10, 2])
);
console.log(
  "should return: [84, 24, 56, 42] \n Output: ",
  arrayOfArrayProducts2([2, 7, 3, 4])
);
