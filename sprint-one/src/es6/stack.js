class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackSize = 0;
    this.storage = {};
  }

  push(value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  }

  pop() {
    if (this.stackSize > 0) {
      var temp = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return temp;
    } else {
      return;
    }
  }

  size() {
    return this.stackSize;
  }

}

var stack1 = new Stack();