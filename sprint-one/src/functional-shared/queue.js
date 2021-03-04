var Queue = function() {
  var queueInstance = Object.assign({
    firstIndex: 0,
    lastIndex: 0,
    storage: {},
  }, queueMethods);

  return queueInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.lastIndex++] = value;
  },

  dequeue: function() {
    var startValue = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex++];
    if (this.firstIndex > this.lastIndex) {
      this.firstIndex = this.lastIndex;
    }
    return startValue;
  },

  size: function() {
    return this.lastIndex - this.firstIndex;
  },
};
