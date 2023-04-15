/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    /* 
    1) hash the nums array  
    2) sort the object
    3) compare values from values from end of array with first values 
        - use variable to track if left + right = target
        - if target, return indices in array
        - if less, increase the left pointer
        - if right, decrease the right pointer
    */

    let hash = nums.map((num, i) => ({ val: num, idx: i }))

    hash.sort((a, b) => a.val - b.val)

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let current = hash[left].val + hash[right].val
        if (current === target) {
            return [hash[left].idx, hash[right].idx]
        } else if (current < target) {
            left++;
        } else if (current > target) {
            right--;
        }
    }
    return [];

};