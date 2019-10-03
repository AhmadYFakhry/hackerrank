// Recursive 

function lca(root, v1, v2) {
    if(!root) {
        return nul;
    }
    // The lowest common ancestor will be in the left subtree
    if(v1 > root.data && v2 > root.data) {
        root = lca(root.left, v1, v2);
    }
    // The lowest common ancestor will be on the right subtree
    else if(v1 <= root.data && v2 < root.data) {
        root = lca(root.right, v1, v2);
    }
    // We are at the lowest common ancestor
    return root;
}

// Iterative 

function lca(root, v1, v2) {
    let temp = root;
    while(true) {
        // The lowest common ancestor will be in the left subtree
        if(temp.data > v1 && temp.data > v2) {
            temp = temp.left;
        }
        // The lowest common ancestor will be on the right subtree
        else if(temp.data < v2 && temp.data < v1) {
            temp = temp.right;
        }
        // We are at the lowest common ancestor
        else {
            return temp;
        }
    }
}