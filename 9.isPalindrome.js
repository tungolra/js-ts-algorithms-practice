/**
 * @param {number} x
 * @return {boolean}
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 */
var isPalindrome = function (x) {
    /**
    negative are included 
    insensitive to middle number for odd integers lengths
    0) initialize left & right pointer
    1) set base case if x = 1, true
    2) check if left and right match
        - if match, split and recursively call isPalindrome
     */

    let str = x.toString()
    let left = 0;
    let right = str.length - 1
    if (str.length === 1 || str.length === 0) {
        return true;
    }

    if (str[left] === str[right]) {
        isPalindrome(str.split(left + 1, right))
    } else {
        return false
    }

};

var isPalindrome = function (x) {
    /**
    without converting x to string
    
    0) initialize rev = 0 & and num = x
    1) set base case for neg ints = false 
    2) reverse the number while num > 0
    3) compare rev to num, return false if not equal
     */

    if (x < 0) { 
        return false; 
    }

    let rev = 0; 
    let num = x;
    
    while (num > 0) { 
        rev = rev * 10 + num % 10; 
        num = Math.floor(num/10); 
    }

    if (rev === x){
        return true; 
    } else { 
        return false; 
    }

};