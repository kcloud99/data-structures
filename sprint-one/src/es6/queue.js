class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }
  
  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.back > this.front) {
      var temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return temp;
    } else {
      return;
    }
  } 

  size() {
    return this.back - this.front;
  }

}

var queue1 = new Queue();
