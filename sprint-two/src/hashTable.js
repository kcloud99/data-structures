

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    //create bucket if it doesn't exist
    bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);

  } else {
    var updated = false;
    // if bucket does exist, loop through bucket to check values
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // if key exists? update it to new value
      if (tuple[0] === k) {
        tuple[1] = v;
        // set flag to know whether it was updated
        updated = true;
        break;
      }

    }
    // if key doesnt already exist
    // set key/value as tuple in bucket
    if (!updated) {
      bucket.push([k, v]);
      this._storage.set(index, bucket);
    }
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    return false;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    return false;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return bucket.splice(tuple, 1);
    }
  }

// go through buckets.length
// if tuple[0] exists   delete tuple? or delete value of tuple?

// remove k or k[v]

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


