function reverse(head) {
    let current = head;
    let following = head;
    let previous = null;
    while(current != null) {
        following = current.next;
        current.next = previous;
        previous = current;
        current = following;
    }
    return previous;
}