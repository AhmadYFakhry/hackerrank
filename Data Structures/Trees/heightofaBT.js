function height(root) {
  if (root == null) return -1;
  return Math.max(height(root.left) + 1, height(root.right) + 1);
}
