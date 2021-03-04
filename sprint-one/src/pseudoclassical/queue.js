var Queue = () {
  this.firstIndex = 0;
  this.lastIndex = 0;
  this.storage = {};
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
