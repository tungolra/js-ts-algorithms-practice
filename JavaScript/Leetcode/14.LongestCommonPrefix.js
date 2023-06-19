/**
 * @param {string[]} strs
 * @return {string}
Definition: prefix represents sequence of chars that match in each word

basecase for empty input

store prefix var
compare first letter of first string to each string's first letter
loop through strings
   - set var for firstChar 
   - create flag to track no match
   loop through chars 
     - if no match, break from loop
   - when chars match, add to prefix var string
return prefix var 
 */
var longestCommonPrefix = function (strs) {
  let arrLen = strs.length;
  // base case for empty input
  if (arrLen === 0) return "";

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let firstChar = strs[0][i];
    let match = true;

    for (let j = 1; j < arrLen; j++) {
      let char = strs[j][i];

      if (firstChar !== char) {
        match = false;
        break;
      }
    }
    if (match) {
      prefix += firstChar;
    } else {
      break;
    }
  }

  return prefix;
};
