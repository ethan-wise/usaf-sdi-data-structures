var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // LinkedList({ head: Node(1, list.tail), tail: Node(2, Node(3, Node(4, Node(5, null)))) })
  // [1, [2, [3, [4, null]]]]

  list.addToTail = function(value) {
    const newNode = new Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    const remHeadVal = list.head.value;
    list.head = list.head.next;
    return remHeadVal;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }

    let endOfList = false;
    let current = list.tail;

    while (!endOfList) {
      if (current.value === target) {
        return true;
      }
      if (current.next === null) {
        endOfList = true;
      }
      current = current.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
