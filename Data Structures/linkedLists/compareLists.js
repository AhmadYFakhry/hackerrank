function CompareLists(llist1, llist2) {
    if(!llist1 || !llist2) return 0;
    if(llist1.data != llist2.data) return 0;
    let cur1 = llist1;
    let cur2 = llist2;
    while(cur1 && cur2) {
        if(cur1.data !== cur2.data) return 0;
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return 1;
}
