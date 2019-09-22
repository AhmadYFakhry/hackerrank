function insertNodeAtHead(head, data) {
    const newNode = new SinglyLinkedListNode(data);
    if(!head) {
        head = newNode;
        return head;
    }
    const oldHead = head;
    head = newNode;
    head.next = oldHead;
    return head;

}

