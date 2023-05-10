/**
 * Root of Number
Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.

Examples:

input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
Constraints:

[time limit] 5000ms

[input] float x

0 ≤ x
[input] integer n

0 < n
[output] float
 */

/**
 *
 * @param {Number} x
 * @param {Number} n
 * @returns {Number}
 * Method: Guessing and checking
 * Time Complexity: O(log x)
 * Space Complexity: O(x)
 *
 * Pseudocode:
 * 0) base case for x === 0
 * 0) initialize a left pointer to 0
 * 0) initialize right pointer to x
 * 0) initialize mid pointer to (left + right) / 2
 * 1) implement binary search using while loop
 *  - condition: while mid - left >= 0.001
 *  - initialize midPowN to mid ** n
 *  - if mid ** n < x, left = mid
 *  - if mid ** n > x, right = mid
 *  - else, return mid
 *  - if if statements run, re-initilaize mid = (left + right) / 2
 */
function root(x, n) {
  if (x === 0) return 0;

  let left = 0;
  let right = x;
  let mid = (left + right) / 2;

  while (mid - left >= 0.001) {
    let midPowN = mid ** n;
    if (midPowN < x) {
      left = mid;
    } else if (midPowN > x) {
      right = mid;
    } else {
      return mid;
    }
    mid = (left + right) / 2;
  }
  return mid.toFixed(3);
}

// Test Cases

console.log(`Test 1: \n Expects:  1.913 \n Actual: ${root(7, 3)}`);
console.log(`Test 2: \n Expects:  3 \n Actual: ${root(27, 3)}`);
console.log(`Test 3: \n Expects:  2 \n Actual: ${root(16, 4)}`);
console.log(`Test 4: \n Expects:  5.429 \n Actual: ${root(160, 3)}`);
