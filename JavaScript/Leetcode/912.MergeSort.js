/**
 * Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var merge = function(left, right){ 
    let result = []

    let leftIdx = 0; 
    let rightIdx = 0; 

    // go through left until end rightidx equals length of left arr; same for right
    while (leftIdx < left.length && rightIdx < right.length) { 
        // if left[leftIdx] < right[rightIdx] ? push left[leftIdx]into result and increment, 
        // else, push right[rightIdx] & increment rightIdx
        if (left[leftIdx] < right[rightIdx]){
            result.push(left[leftIdx])
            leftIdx++
        } else { 
            result.push(right[rightIdx])
            rightIdx++
        }
    }
    // combine result array with sliced remainder of any elements not pushed into results from left and right arrays
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))

}

var sortArray = function(nums) {

    // base case for when array is length 1 or 0 to just return the array
    if (nums.length <= 1) return nums 

    // get middle index
    let mid = Math.floor(nums.length / 2)
    // get left nums 
    let left = nums.slice(0, mid); 
    // get right nums 
    let right = nums.slice(mid) 

    // recursively call sortArray on left and right arrays
    return merge(sortArray(left), sortArray(right))
};