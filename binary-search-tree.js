class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    let left = current.left;
    let right = current.right;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    } else {
      let left = current.left;
      let right = current.right;
      if (val < current.val) {
        if (left === null) {
          current.left = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.left);
      } else {
        if (right === null) {
          current.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let notFound = false;

    if (val === current.val) return current;

    while (current && !notFound) {
      if (val > current.val) {
        current = current.right;
      } else if (val < current.val) {
        current = current.left;
      } else {
        notFound = true;
      }
    }

    if (!notFound) return undefined;

    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (val === current.val) return current;
    if (val > current.val) return this.findRecursively(val, current.right);
    if (val < current.val) return this.findRecursively(val, current.left);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let array = [];
    function traverse(node = this.root) {
      array.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse();
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let array = [];
    function traverse(node = this.root) {
      if (node.left) this.traverse(node.left);
      array.push(node.val);
      if (node.right) this.traverse(node.right);
    }
    traverse();
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let array = [];
    function traverse(node = this.root) {
      if (node.left) this.traverse(node.left);
      if (node.right) this.traverse(node.right);
      array.push(node.val);
    }
    traverse();
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let array = [];
    let toBeVisited = [];
    let current = this.root;

    toBeVisited.push(current);

    while (toBeVisited.length > 0) {
      current = toBeVisited.pop();
      array.push(current.val);
      if (current.left) {
        toBeVisited.push(current.left);
      }
      if (current.right) {
        toBeVisited.push(current.right);
      }
    }
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
