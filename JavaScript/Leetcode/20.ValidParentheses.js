/**
 * @param {string} s
 * @return {boolean}
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Pseudocode:
 0) initialize empty stack; initialize hash of closing brackets to opening brackets
 1) loop through chars in s
  - if s[i] is opening bracket, push to stack
  - if s[i] is closing bracket, pop element from stack
    - if the popped element is not an opening bracket that matches closing bracket s[i], return false
 2) if stack is not empty, return false, else true
 */
var isValid = function (s) {
  let hash = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack = [];
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === "}" || s[i] === ")" || s[i] === "]") {
      if (stack.pop() !== hash[s[i]]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
