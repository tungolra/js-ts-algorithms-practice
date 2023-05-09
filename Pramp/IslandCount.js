/**
 * Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
alt

Constraints:

[time limit] 5000ms

[input] array.array.int binaryMatrix

1 ≤ binaryMatrix.length ≤ 100
1 ≤ binaryMatrix[i].length ≤ 100
[output] integer
 */

/*
  input: [ [0,    1,    0,    1,    0],
           [0,    0,    1,    1,    1],
           [1,    0,    0,    1,    0],
           [0,    1,    1,    0,    0],
           [1,    0,    1,    0,    1] ]
           
  output: 6 ("islands")
  
  Pseudocode: 
  0) initialize a counter 
  1) first for loop: 
    - initialize row array = row[i]
    - access each row
    
    1b) 2nd loop: 
      - initialize a queue = [] 
      - push to queue whenever value is 1 and start another loop
        - 
      - from i,j => decrement j until 0, increment j until 0
      - repeat above at each increment  of i until 0
      - 
    
    e.g: queue = [[0, 3], [1,3], [2,3],[1, 2], [1, 4]]
    
    queue[0][0]
*/

/*
  input: [ [0,    1,    0,    1,    0],
           [0,    0,    1,    1,    1],
           [1,    0,    0,    1,    0],
           [0,    1,    1,    0,    0],
           [1,    0,    1,    0,    1] ]
           
  output: 6 ("islands")
  
  Pseudocode: 
  0) initialize a counter 
  1) first for loop: 
    - initialize row array = row[i]
    - access each row
    
    1b) 2nd loop: 
      - initialize a queue = [] 
      - push to queue whenever value is 1 and start another loop
        - 
      - from i,j => decrement j until 0, increment j until 0
      - repeat above at each increment  of i until 0
      - 
    
    e.g: queue = [[0, 3], [1,3], [2,3],[1, 2], [1, 4]]
    
    queue[0][0]

    // Breadth First Search: O(^mn)
*/

function getNumberOfIslands(binaryMatrix) {
    // your code goes here
    let counter = 0; 
    
    for (let i = 0; i < binaryMatrix.length; i++){ 
      for (let j = 0; j < binaryMatrix[i].length; j++){ 
        let queue = []; 
        if (binaryMatrix[i][j] === 1) { 
          queue.push([i, j])
          
          counter++; 
        }
        
        while (queue.length != 0) { 
          // check vert and horiz
          
          let row = queue[0][0]
          let col = queue[0][1]
          
          queue.shift() 
          binaryMatrix[row][col] = 0; 
          
          if (col > 0 && binaryMatrix[row][col - 1] === 1){
            queue.push([row, col - 1])          
          } 
          if (col < binaryMatrix[row].length - 1 && binaryMatrix[row][col + 1] === 1){
            queue.push([row, col + 1])
          } 
          // up
          if (row > 0 && binaryMatrix[row - 1][col] === 1){
            queue.push([row - 1, col])
          } 
          // down
        // console.log("start: \n", binaryMatrix, "\n ---End", "\n Row: ", row, "\n Col: ", col )
          if (row < binaryMatrix.length - 1 && binaryMatrix[row + 1][col] === 1){
            queue.push([row + 1, col])
          } 
          
        }
        
        
      }
      
    }
    return counter; 
  }
  
  console.log(getNumberOfIslands([ [0,    1,    0,    1,    0],
             [0,    0,    1,    1,    1],
             [1,    0,    0,    1,    0],
             [0,    1,    1,    0,    0],
             [1,    0,    1,    0,    1] ]))