function getDifferentNumber(arr) {
    /*
    find the smallest non-negative int from array 
    
    
    constraints: 
    - arr not always sorted 
    
    pseudocode: 
    0) copy the array and sort
    0) set left and right pointers 
    1) loop through the array
      - check if left pointer is greater than 0 
        - if so, return left value - 1 
        - if not, return right value + 1
        
    Option 2: 
    0) copy array into set 
    1) loop through length of arr
      - arr[i] === 0 ? arr[arr.length - 1] + 1 : i
      [ 1 , 4, 5 , 2]
      //loop from 0 to length of array
      //is 0 in the set? - > if true, move on. if false, return 0 as answer
      //is 1 in the set? ->
      
      //[1,5,7,0]
      //
    */ 
    
  
    const set = new Set(arr)
    let val = 0; 
  
    for (let i = 0; i < arr.length; i++){ 
      if (!set.has(i)){ 
        return i
      }
    }  
    return arr.length
  }
  
    
  
  /* Test Cases 
  let test = 
  console.log(`Test 1: \n Expected: \n Actual: ${getDifferentNumber(test1)}`)
  */