function sortedInsert(head, data) {
    const newNode = new DoublyLinkedListNode(data);
    if(newNode.data < head.data) {
        //Insert at head
        const oldHead = head;
        head = newNode;
        head.next = oldHead;
        oldHead.prev = head;
        return head;
    }
    let current = head;
    // Insert in the middle
    while(current.next) {
        if(newNode.data >= current.data && newNode.data <= current.next.data) {
            newNode.prev = current;
            newNode.next = current.next;
            current.next.prev = newNode;
            current.next = newNode;
            return head;
        }
        current = current.next
    }
    // Insert at the end
    newNode.prev = current.next;
    current.next = newNode;
    return head;
}