var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    first: 0,
    last: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.first] = value;
  this.first++;
};



queueMethods.dequeue = function() {
  if (this.first > this.last) {
    var temp = this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.first - this.last; 
};

