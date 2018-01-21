var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, binaryTreeMethods);
  return newTree;
};

var binaryTreeMethods = {};

/*
 * Complexity: What is the time complexity of the above functions?
 */

binaryTreeMethods.insert = function (value) {

  var someTree = BinarySearchTree(value);

  if (someTree.value < this.value) {
    if (this.left === null) {
      this.left = someTree;
    } else {
      this.left.insert(value);
    }
  }

  if (someTree.value > this.value) {
    if (this.right === null) {
      this.right = someTree;
    } else {
      this.right.insert(value);
    }
  }

};



binaryTreeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  }

  if (this.left === null && this.right === null) {
    return false;
  }

  if (target < this.value) {
    if (this.left.contains(target)) {
      return true;
    }
  }

  if (target > this.value) {
    if (this.right.contains(target)) {
      return true;
    }
  }

  return false;
};


binaryTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }

};


















