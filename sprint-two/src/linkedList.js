var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // adds new node to list at back of list
    // changes list.tail to last node
    //value.next =
    // test to see if head and tail
    // if exsist each item would push one forward

  };

  list.removeHead = function() {
    // removes first node in list and returns the value
    // changes list.head to next node in line
    //
  };

  list.contains = function(target) {
    // starts at list.head
    // checks node value
    // follows node.next to following node
    // repeat above steps
    // when target === node.value ==> return node
    //returns boolean reflecting whether or not the passed-invalue is in list
  };

  return list;
};


// var someList = LinkedList();
// var firstN = Node(8)
// var secondN = Node(50)
// var thirdN = Node('hello')
// var fourthN = Node('world')

// someList.addToTail(firstN) // {head: firstN, tail: index, addToTail: f(), removeHead: f(), contains: f(), node:{}
// someList.addToTail(secondN)
// // firstN.next = secondN
// someList.removeHead

// {
//   head: {
//     value: 8,
//     next: {
//       value: 50,
//       next: {
//         value: 'hello',
//         next: {}
//       }
//     }
//   }
// }

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
//linked list data structure where each element is a separate object. each element
// of a list is comprising of two items, the data and reference to the next node.
//last node has a ref to null, number of nodes is not fixed
/*
 * Complexity: What is the time complexity of the above functions?
 */
