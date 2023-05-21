/*
  find the longest common subsequence
  
  Considerations: 
  - 1:1 deletion
  - always lowercase
  - placement matters! 
  - strings can vary in length
  - the number of deletions would be the length of the str1 + str2
  
  Pseudocode: 
  0) base case: if one string is empty, return length of string
  0) initialize matrix of str1.length (row) and str2.length (col)
  
  1) loop through matrix (nested)
    - populate first row if i == 0, matrix@i,j = j; if j == 0, matrix@i,j == i
    - populate subsequent rows based on char comparison between str1[i] to all char in str2
      - if they match, matrix[row][col]'s deletion distance for each position is matrix[i-1][j-1]
      - if char at i and j don't match, increm 
  
*/

function deletionDistance(str1, str2) {

  const str1Len = str1.length;
  const str2Len = str2.length;

  // Allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
  const memo = new Array(str1Len + 1);
  for (let i = 0; i <= str1Len; i++) {
    memo[i] = new Array(str2Len + 1);
  }
  for (let i = 0; i <= str1Len; i++) {
    for (let j = 0; j <= str2Len; j++) {
      console.log(`${str1}: ${str1[i-1]}, || ${str2}: ${str2[j-1]}`)
      if (i === 0) {
        // If str1 is empty, the deletion distance is the length of str2
        memo[i][j] = j;
      } else if (j === 0) {
        // If str2 is empty, the deletion distance is the length of str1
        memo[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        console.log("match?", str1[i - 1] === str2[j - 1])
        console.log({i}, {j})
        console.log({"memo[i - 1][j - 1]":memo[i - 1][j - 1]})
        // If the characters at the current positions are the same,
        // the deletion distance is the same as the previous positions
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        let min = Math.min(memo[i - 1][j], memo[i][j - 1]);
        console.log("match?", str1[i - 1] === str2[j - 1])
        console.log({i}, {j})
        console.log({"memo[i - 1][j]": memo[i - 1][j]}, "||", {"memo[i][j - 1]": memo[i][j - 1]},"=",{min}  )
        // If the characters are different, add 1 to the minimum deletion distance
        // from either deleting a character in str1 or deleting a character in str2
        memo[i][j] = 1 + min;
      }
    }
    console.log(memo)
  }

  // Return the deletion distance for the entire strings
  return memo[str1Len][str2Len];
}

/* Tests */
console.log(
  `_Test 1_ \n Expected: 3 \n Actual: ${deletionDistance("dog", "frog")}`
);
console.log(
  `_Test 2_ \n Expected: 0 \n Actual: ${deletionDistance("some", "some")}`
);
console.log(
  `_Test 3_ \n Expected: 9 \n Actual: ${deletionDistance("some", "thing")}`
);
console.log(
  `_Test 4_ \n Expected: 4 \n Actual: ${deletionDistance("awesome", "awe")}`
);
console.log(
  `_Test 5_ \n Expected: 2 \n Actual: ${deletionDistance("ab", "ba")}`
);
console.log(
  `_Test 6_ \n Expected: 0 \n Actual: ${deletionDistance("", "")}`
);
