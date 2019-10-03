function lca(root, v1, v2) {
    if(!root) {
        return nul;
    }
    // The lowest common ancestor will be in the left subtree
    if(v1.data > root.data && v2.data > root.data) {
        lca(root.left, v1, v2);
    }
    // The lowest common ancestor will be on the right subtree
    else if(v1.data <= root.data && v2.data < root.data) {
        lca(root.right, v1, v2);
    }
    // We are at the lowest common ancestor
    else {
        return root;
    }
}