function reverse(head) {
    let newHead = head;
    let current = head;
    let prev;
    while(current) {
        prev = current.prev;
        current.prev = current.next;
        current.next = prev;
        newHead = current
        current = current.prev;
    }
    return newHead;
}