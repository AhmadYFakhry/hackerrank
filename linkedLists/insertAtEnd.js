function insertNodeAtTail(head, data) {
    const newNode = new SinglyLinkedListNode(data);
    if(!head) {
        head = newNode;
        return head;
    }
    let current = head;
    while(current.next != null) {
        console.log(current.data);
        current = current.next;
    }
    current.next = newNode;
    return head;
}

