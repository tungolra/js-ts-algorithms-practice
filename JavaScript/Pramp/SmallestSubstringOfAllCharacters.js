/**
 * Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
Constraints:

[time limit] 5000ms

[input] array.character arr

1 ≤ arr.length ≤ 30
[input] string str

1 ≤ str.length ≤ 500
[output] string
 */

/**
 *
 * @param {*} arr
 * @param {*} str
 *
 * Variable Sliding Window approach
 *
 * Time Complexity: O(n+m)
 * - we’re doing a linear iteration of both str and arr of lengths N and M 
 * respectively, so the runtime complexity is linear in the size of
 * the input, i.e. O(N+M).
 * 
 * Space Complexity: O(n)
 * - we’re using a Map/Hash Table countMap with M key/values pairs plus 
 * few constant size counters, which together give us an O(M) space 
 * complexity (linear in the size of arr).
 *
 * we can use a variable sliding window approach to solve this problem.
 * The idea is to use two pointers: start and end to keep track of the
 * current window.
 *
 * We’ll also use a hash map (in Python: dictionary) that keeps a count of
 * all the unique characters in the current window.
 *
 * Each time we expand the window (by moving the end pointer to the right),
 * we’ll check if we have all the desired characters in the hash map.
 * If all the counts are above zero, we can shrink the window from the left.
 *
 * We’ll keep track of the smallest window that has all the desired characters
 * and return it at the end.
 *
 */

function getShortestUniqueSubstring(arr, str) {
  let hash = {};
  // create hash
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = 0;
  }
  // set up pointers
  // min represents length of min window,
  // minStart represents start of min window,
  // count represents how many unique chars are in window
  let start = 0,
    end = 0,
    min = str.length + 1,
    minStart = 0,
    count = 0;

  // expand window
  while (end < str.length) {
    // update hash
    if (str[end] in hash) {
      // update count only if val of char in hash is 0
      if (hash[str[end]] === 0) {
        count++;
      }
      // incr val of char in hash
      hash[str[end]]++;
    }
    // move end pointer
    end++;

    // shrink window
    while (count === arr.length) {
      // update length of min window
     
      /* check if end - start is less than min because we want to find the 
      smallest window that has all the desired characters in the hash map 
      If all the counts are above zero, we can shrink the window from the left. 
      */
      if (end - start < min) {
        // when end - start is less than min, this is because
        // we have found a smaller window
        min = end - start;
        //
        minStart = start;
      }
      // update hash
      if (str[start] in hash) {
        hash[str[start]]--;
        // update count
        if (hash[str[start]] === 0) {
          count--;
        }
      }
      // move
      start++;
    }
  }

  return min === str.length + 1 ? "" : str.slice(minStart, minStart + min);
}

// Test Cases
console.log(
  "_Test 1_ \nExpected: 'zyx' \n",
  "Actual:",
  getShortestUniqueSubstring(["x", "y", "z"], "xyyzyzyx")
);
console.log(
  "_Test 2_ \nExpected: 'A' \n",
  "Actual:",
  getShortestUniqueSubstring(["A"], "A")
);
console.log(
  "_Test 3_ \nExpected: '' \n",
  "Actual:",
  getShortestUniqueSubstring(["A"], "B")
);
console.log(
  "_Test 4_ \nExpected: '' \n",
  "Actual:",
  getShortestUniqueSubstring(["x", "y", "z", "r"], "xyyzyzyx")
);
console.log(
  "_Test 5_ \nExpected: 'BANC' \n",
  "Actual:",
  getShortestUniqueSubstring(["A", "B", "C"], "ADOBECODEBANCDDD")
);
