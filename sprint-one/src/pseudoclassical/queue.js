function Queue() {
  this.firstIndex = 0;
  this.lastIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastIndex++] = value;
};

Queue.prototype.dequeue = function() {
  var startValue = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex++];
  if (this.firstIndex > this.lastIndex) {
    this.firstIndex = this.lastIndex;
  }
  return startValue;
};

Queue.prototype.size = function() {
  return this.lastIndex - this.firstIndex;
};
