function insertNodeAtPosition(head, data, position) {
  const newNode = new SinglyLinkedListNode(data);
  if (!head) {
    head = newNode;
    return head;
  }
  let index = 0;
  let before = head;
  while (index !== position - 1) {
    before = before.next;
    index++;
  }
  console.log(before.data);
  const post = before.next;
  before.next = newNode;
  newNode.next = post;
  return head;
}
