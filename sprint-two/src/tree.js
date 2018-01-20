var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // adds an array of value to tree
  var someTree = Tree(value);
  this.children.push(someTree);
};

treeMethods.contains = function(target) {
  // look into object
  // starting object will be

  if (this.value === target) {
    return true;
  }
  //debugger;
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
      //return true;
    }
  }

  return false;
};

// var familyTree = Tree('Joe');
// var someOtherTree = Tree('kyle')
// familyTree.contains('Andy') // true
// someOtherTree.contains('kyle') // true

// familyTree =
// {
//   value: 'Joe',
//   children: [
//     {
//       value: 'Tom',
//       children: [
//         {
//           value: 'Sam',
//           children: []
//         }
//       ]
//     },

//     {
//       value: 'Andy',
//       children: []
//     }
//   ]
// }














