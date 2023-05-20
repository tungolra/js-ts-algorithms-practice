/**
 * Linked Lists - Append

Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

 */

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  /*
    0) base case: listA & listB is empty, return null; 
    0) base case: if one is empty, just return the non-empty list
    1) traversing the list until null
      - initialize the first list to a node var 
      - reinitialize to node.next at iteration
    2) node.data = listB 
    3) return head
    */

  if (listA === null && listB === null) return null;
  if (listA === null) return listB;
  if (listB === null) return listA;

  let node = listA;
  while (node.next !== null) {
    node = node.next;
  }

  node.next = listB;

  return listA;
}
