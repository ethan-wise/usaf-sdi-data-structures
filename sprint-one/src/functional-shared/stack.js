var Stack = function() {
  var stackInstance = Object.assign({
    lastIndex: 0,
    storage: {},
  }, stackMethods);

  return stackInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.lastIndex++] = value;
  },

  pop: function() {
    var currentValue = this.storage[this.lastIndex - 1];
    this.lastIndex--;
    if (this.lastIndex < 0) {
      this.lastIndex = 0;
    }
    return currentValue;
  },

  size: function() {
    return this.lastIndex;
  },
};
