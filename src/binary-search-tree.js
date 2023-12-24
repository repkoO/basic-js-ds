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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};