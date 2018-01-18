var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stacksize = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.stacksize++;
  this.storage[this.stacksize] = value;
};

Stack.prototype.pop = function() {
  if (this.stacksize > 0){
    var temp = this.storage[this.stacksize];
    delete this.storage[this.stacksize];
    this.stacksize--;
    return temp;
  } else {
    return;
  }
};

Stack.prototype.size = function() {
  return this.stacksize;
};

var stack1 = new Stack();