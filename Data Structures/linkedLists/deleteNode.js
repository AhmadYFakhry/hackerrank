function deleteNode(head, position) {
  if (!head) {
    return head;
  }
  if (position === 0) {
    head = head.next;
    return head;
  }
  let index = 0;
  let current = head;
  while (index != position - 1) {
    current = current.next;
    index++;
  }
  const toDelete = current.next; // The node to delete
  const newNext = toDelete.next; // Link current.next to this
  current.next = newNext;
  return head;
}
