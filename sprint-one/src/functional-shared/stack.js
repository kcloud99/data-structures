var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {
    storage: {},
    stackSize: 0     
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    var temp = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return temp;
  } else {
    return;
  }
};

stackMethods.size = function() {
  return this.stackSize;
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