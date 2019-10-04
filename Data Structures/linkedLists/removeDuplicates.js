// You're given the pointer to the head node of a sorted linked list, where the data in the nodes is in ascending order. 
// Delete as few nodes as possible so that the list does not contain any value more than once. 
// The given head pointer may be null indicating that the list is empty.

function removeDuplicates(head) {
    let current = head;
    let next = head.next;
    while (current && next) {
        if (current.data === next.data) {
            current.next = next.next;
            next = next.next;
        } else {
            current = current.next;
            next = next.next;
        }
    }
    return head;
}