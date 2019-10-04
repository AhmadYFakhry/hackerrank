// Iterative 

function insert(root, data) {
    const newNode = new Node(data);
    if (!root) {
        root = newNode;
        return root;
    }
    let current = root;
    while (true) {
        if(current.data >= data) {
            if(!current.left) {
                current.left = newNode;
                return root;
            }
            else {
                current = current.left;
            }
        }
        else if(current.data < data) {
            if(!current.right) {
                current.right = newNode;
                return root;
            }
            else {
                current = current.right;
            }
        }
    }
}

// Recursive  

function insert(root, data) {
    const newNode = new Node(data);
    if (!root) {
        root = newNode;
        return root;
    }
    let current = root;
    if(current.data >= data) {
        current.right = newNode;
    }
    else {
        current.left = newNode;
    }
    return root;
}