function reversePrint(head) {
    const reversed = [];
    let current = head;
    while (current != null) {
        reversed.push(current.data);
        current = current.next;
    }
    reversed.reverse();
    reversed.forEach(e => console.log(e));
}