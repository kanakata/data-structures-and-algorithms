/**
 * Binary search tree implementation.
 */
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  /**
   * add s data to the tree
   * @param {*} data
   * @returns
   */
  add(data) {
    const parentNode = this.root;
    if (parentNode == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (parentNode) {
        if (data < parentNode.data) {
          if (parentNode.left == null) {
            parentNode.left = new Node(data);
            return;
          } else if (parentNode.left !== null) {
            return searchTree(parentNode.left);
          }
        } else if (data > parentNode.data) {
          if (parentNode.right == null) {
            parentNode.right = new Node(data);
            return;
          } else if (parentNode.right != null) {
            return searchTree(parentNode.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(parentNode);
    }
  }
  /**
   * @returns
   */
  findMin() {
    let currentNode = this.root;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  /**
   * @returns
   */
  findMax() {
    let currentNode = this.root;
    while (currentNode.right != null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  /**
   * @param {*} data
   * @returns node
   */
  find(data) {
    let currentNode = this.root;
    while (currentNode.data != data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (currentNode == null) {
        return null;
      }
    }
    return currentNode;
  }
  /**
   * checks if data is present in a tree.
   * @param {*} data
   * @returns
   */
  isPresent(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data == currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  /**
   * @param {*} data
   */
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {}
  perOrder() {}
  postOrder() {}
}
