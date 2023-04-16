/**
 * @param {number[]} height
 * @return {number}
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 All pairs of the n lines define a rectangle with a height given by the shorter 
 line and a width given by the distance between the lines. Return the area of 
 the rectangle with the largest area.
 */
var maxArea = function (height) {
  /**
   * Pseudocode: 
    0) track largest area 
    1) loop through the array once for the first value 
    2) loop through the array starting from the 2nd value and find area of each based on the first value
        - let container = height[i] > height[j] ? height[j] * (j-i)
        - let container = height[i] < height[j] ? height[i] * (j-i)  
        - container > most ? most = container 
     */

  let most = 0;
  let len = height.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let container;
      if (height[i] > height[j]) {
        container = height[j] * (j - i);
      } else {
        container = height[i] * (j - i);
      }
      if (container > most) {
        most = container;
      }
    }
  }
  return most;
};
