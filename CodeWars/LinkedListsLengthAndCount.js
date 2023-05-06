/**
 * Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
I've decided to bundle these two functions within the same Kata since they are both very similar.
 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  /*
    0) initialize a counter
    0) base case: return 0 if head is null
    
    1) traverse list until head is null
      - initialize node as head 
      - set head to head.next each iteration
      - increment counter
      
    2) return counter
    
    */

  let count = 0;

  if (head === null) return 0;

  let node = head;
  while (node !== null) {
    node = node.next;
    count++;
  }

  return count;
}

function count(head, data) {
  /*
    0) initialize count
    0) base case: head is null, return 0
    1) traverse list while head is not null
      - intialize node var to head 
      - set node to node.next at iteration 
      - if node? === data, increment counter
    2) return counter
    */

  let count = 0;
  if (head === null) return 0;

  let node = head;
  while (node !== null) {
    if (node.data === data) {
      count++;
    }
    node = node.next;
  }
  return count;
}
