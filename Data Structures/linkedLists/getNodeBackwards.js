// You’re given the pointer to the head node of a linked list and a specific position.
// Counting backwards from the tail node of the linked list, get the value of the node at the given position.
// A position of 0 corresponds to the tail, 1 corresponds to the node before the tail and so on.

function getNode(head, positionFromTail) {
  if (!head || !head.next) return head.data;
  let count = 0;
  let current = head;
  while (current.next) {
    current = current.next;
    count++;
  }
  current = head;
  let length = count;
  count = length - positionFromTail;
  if (count < 0) {
    return null;
  } else {
    while (count > 0) {
      current = current.next;
      count--;
    }
    if (count === 0) {
      return current.data;
    }
  }
}
