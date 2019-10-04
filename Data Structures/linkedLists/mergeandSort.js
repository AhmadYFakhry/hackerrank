function mergeLists(head1, head2) {
    if (!head1) return head2;
    if (!head2) return head1;
    let curr1, curr2, newHead;

    if (head1.data < head2.data) {
        newHead = head1;
        curr1 = head1.next
        curr2 = head2;
    } else {
        newHead = head2;
        curr1 = head1;
        curr2 = head2.next;
    }
    let current = newHead;
    while (curr1 && curr2) {
        if (curr1.data < curr2.data) {
            current.next = curr1;
            curr1 = curr1.next;
            current = current.next
        } else if (curr1.data === curr2.data) {
            current.next = curr1;
            curr1 = curr1.next;
            current = current.next
            current.next = curr2;
            curr2 = curr2.next;
            current = current.next
        } else {
            current.next = curr2;
            curr2 = curr2.next;
            current = current.next
        }
    }
    if (curr1) {
        current.next = curr1
    } else if (curr2) {
        current.next = curr2;
    }
    return newHead;
}