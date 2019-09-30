function insert(root, data) {
    const newNode = new Node(data);
    if (!root) {
        root = newNode;
        return root;
    }
    let current = root;
    while (true) {
        if (current.data > newNode.data) {
            if (current.left) {
                current = current.left;
            } else {
                current.left = newNode;
                return root;
            }
            if (current.right) {
                current = current.right;
            } else {
                current.right = newNode;
                return root;
            }
        }
    }
}