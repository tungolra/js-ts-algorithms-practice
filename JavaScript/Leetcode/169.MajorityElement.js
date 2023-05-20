/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

 */
var majorityElement = function (nums) {
  /**
    0) initialize new obj
    1) loop through nums
        - create key for each num 
            + set value to 1 in first instance
            + accumulate value for existing keys
        - check if nums[i] greater than array length / 2   
     */
  const obj = new Object();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
    if (obj[nums[i]] > len / 2) {
      console.log(obj[nums[i]]);
      return nums[i];
    }
  }
};
