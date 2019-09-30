
function levelOrder(root) {
    const queue = [];
    queue.push(root);
    while(queue.length > 0) {
        let tempNode = queue.shift();
        console.log(tempNode);
        if(tempNode.left) queue.push(tempNode.left);
        if(tempNode.right) queue.push(tempNode.right);
    }
}