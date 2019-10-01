function topView(root) {
    if(!root) {
        return;
    }
    const s = [], q = [];
    s.unshift(root.data);
    let cur = root;
    let left = root.left;
    while(left) {
        s.unshift(left.data);
        left = left.left;
    }
    while(s.length !== 0) {
        console.log(`${s.shift()} `);
    }
    let right = root.right;
    q.push(right.data);
    while(right) {
        q.push(right.data);
        right = right.right;
    } 
    while(q.length !== 0) {
        console.log(`${q.pop()} `);
    }
    return;
}