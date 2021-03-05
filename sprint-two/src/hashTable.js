

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValArr = [k, v];

  if(this._storage.get(index) === undefined){
    this._storage.set(index, [])
  }
  if(this.)

  this._storage.get(index).push(keyValArr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  const results = this._storage.get(index) || [];

  const keyValPair = results.find((keyVal) => {
    return keyVal[0] === k;
  });

  if (!keyValPair) {
    return undefined;
  }

  return keyValPair[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
