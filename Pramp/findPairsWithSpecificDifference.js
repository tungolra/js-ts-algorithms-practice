const util = require("util");

/**
 * Pairs with Specific Difference
Given an array arr of distinct integers and a nonnegative integer k, write 
a function findPairsWithGivenDifference that returns an array of all pairs 
[x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

Note: the order of the pairs in the output array should maintain the order of 
the y element in the original array.

Examples:

input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 100
[input]integer k

k ≥ 0
[output] array.array.integer
 */

/*


0) initialize empty array
0) initialize left and right pointers 

1) loop through array 
  - check left - right = k 
    - if k, create array and push to empty array, 
2) return initialized array

Output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

left = 0 | right = 1
> 
left -1 | right = 2 
... 
... 


Time Complexity -> O(n)
*/

function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let res = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j >= 0; j--) {
      if (arr[i] - arr[j] === k) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}

let test1 = ([0, -1, -2, 2, 1], 1);
let test2 = ([1, 5, 11, 7], 4);
let test3 = ([4, 1], 3);
console.log(
  `Test1: Input: ${test1} \n Expected: [[1,0],[0,-1],[-1,-2],[2,1]] \n Output: ${util.inspect(
    findPairsWithGivenDifference([0, -1, -2, 2, 1], 1)
  )}`
);
console.log(
  `Test2: Input: ${test2} \n Expected: [[7,1],[11,5]] \n Output: ${util.inspect(
    findPairsWithGivenDifference([1, 5, 11, 7], 4)
  )}`
);
console.log(
  `Test3: Input: ${test3} \n Expected: [[4,1]] \n Output: ${util.inspect(
    findPairsWithGivenDifference([4, 1], 3)
  )}`
);
