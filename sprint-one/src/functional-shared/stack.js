var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  //this.stackSize++
  //this.storage[] = value;
};

stackMethods.pop = function() {
  var temp;
};

stackMethods.size = function() {
  return;
};




/*
//extend_.extend(destination, *sources) 
Shallowly copy all of the properties in the source objects over to the destination object, 
and return the destination object. Any nested objects or arrays will be copied by reference, 
not duplicated. It's in-order, so the last source will override properties
 of 
the same name in previous arguments.

_.extend({name: 'moe'}, {age: 50});
=> {name: 'moe', age: 50}
*/