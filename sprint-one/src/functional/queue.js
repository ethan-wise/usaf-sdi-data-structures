var Queue = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  let firstIndex = 0;
  let lastIndex = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex++] = value;
  };

  someInstance.dequeue = function() {
    const deqValue = storage[firstIndex];
    delete storage[firstIndex++];
    if(firstIndex > lastIndex){
      firstIndex = lastIndex;
    }
    return deqValue;
  };

  someInstance.size = function() {
     return lastIndex - firstIndex;
  };

  return someInstance;
};
