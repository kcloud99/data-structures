var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.back] = val;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.back > this.front) {
    var temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  } else {
    return;
  }
};

Queue.prototype.size = function() {
  return this.back - this.front;
};

var queue1 = new Queue();





