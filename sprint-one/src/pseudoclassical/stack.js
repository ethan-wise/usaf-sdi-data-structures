function Stack() {
  this.lastIndex = 0;
  this.storage = {};
}

Stack.prototype.push = function (value) {
  this.storage[this.lastIndex++] = value;
};

Stack.prototype.pop = function () {
  var currentValue = this.storage[this.lastIndex - 1];
  this.lastIndex--;
  if (this.lastIndex < 0) {
    this.lastIndex = 0;
  }
  return currentValue;
};

Stack.prototype.size = function () {
  return this.lastIndex;
};
