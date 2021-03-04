const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  var lastIndex = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastIndex++] = value;
  };

  someInstance.pop = function() {
    const deqValue = storage[lastIndex - 1];
    delete storage[lastIndex - 1];
    lastIndex--;
    if(lastIndex < 0){
      lastIndex = 0;
    }
    return deqValue;
  };

  someInstance.size = function() {
    return lastIndex;
  };

  return someInstance;
};
