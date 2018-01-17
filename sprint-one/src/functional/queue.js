var Queue = function() {
  var someInstance = {};

  var newIndex = 0;
  var oldIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to prop newIndex on storage variable
    storage[newIndex] = value; 
    newIndex++;
  };
  // adding new objects

  someInstance.dequeue = function() {
    if (Object.keys(storage).length > 0) {
      var temp = storage[oldIndex];
      debugger;
      delete storage[oldIndex];
      oldIndex++;
      return temp;
    } else {
      return;
    }
  };
  //removing oldest objects

  someInstance.size = function() {
    return newIndex - oldIndex;
  };
  //tracking size of the total queue
  return someInstance;
};

//var someObj = Queue();
// var someOtherObj = Queue();
console.log(someObj)

// console.log(someObj.enqueue('ted')); // {1: ted}
// console.log(someObj.enqueue('2'));  // {1: ted, 2: 2}
// console.log(someObj.enqueue('undefined')); // {1: ted, 2: 2, 3: undefined}
// console.log(someObj.dequeue()); // {2: 2, 3: undefined}


