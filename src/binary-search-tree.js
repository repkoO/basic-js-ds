const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
  }

  add(data) {
    const newTreeNode = new Node(data);
      if (this.rootValue === null) {
        this.rootValue = newTreeNode;
      } else {
        this.insertNode(this.rootValue, newTreeNode)
      }
  }

  insertNode(node, newTreeNode) {
    if (newTreeNode.data < node.data) {
      if (node.left === null) node.left = newTreeNode;
      else this.insertNode(node.left, newTreeNode)
    } else {
      if (node.right === null) node.right = newTreeNode;
      else this.insertNode(node.right, newTreeNode)
    }
  }

  has(data) {
    return this.search(this.rootValue, data)
  }

  search(node, data) {
    if (node === null) return false;
    if (data === node.data ) return true;

    if (data < node.data) {
      return this.search(node.left, data)
    } else {
      return this.search(node.right, data)
    }
  }

  find(data) {
    return this.findData(this.rootValue, data)
  }

  findData(node, data) {
    if (node === null) return null;
    if (data === node.data ) return node;

    if (data < node.data) {
      return this.findData(node.left, data)
    } else {
      return this.findData(node.right, data)
    }
  }

  remove(data) {
    this.rootValue = this.removeValue(this.rootValue, data)
  }

  removeValue(node, data) {
    if (node === null) return null;

    if (data === node.data) {
      if (node.left === null && node.right === null) return null;
      else if (node.left === null) return node.right;
      else if (node.right === null) return node.left;
      else {
        const minValue = this.findMin(node.right);
        node.data = minValue.data;
        node.right = this.removeValue(node.right, minValue.data);
        return node;
      }
    }

    if (data < node.data) node.left = this.removeValue(node.left, data)
    else node.right = this.removeValue(node.right, data)
    return node;
  }

  findMin(node) {
    if (node.left === null) return node;
    else return this.findMin(node.left)
  }

  min() {
    if (this.rootValue === null) return null;

    let currentValue = this.rootValue;
    while (currentValue.left !== null) {
      currentValue = currentValue.left
    }
    return currentValue.data;
  }

  max() {
    if (this.rootValue === null) return null;

    let currentValue = this.rootValue;
    while (currentValue.right !== null) {
      currentValue = currentValue.right;
    }
    return currentValue.data;
  }
}

module.exports = {
  BinarySearchTree
};