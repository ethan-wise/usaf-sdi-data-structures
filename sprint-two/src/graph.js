

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  const indexOfNode = this.nodes.indexOf(node);
  const removedNode = this.nodes[indexOfNode];

  this.nodes.splice(indexOfNode, 1);

  this.edges = this.edges.filter((edge) => {
    if (edge.fromNode === node || edge.toNode === node) {
      return false;
    }
    return true;
  });

  return removedNode;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (const edge of this.edges) {
    if (edge.fromNode === fromNode && edge.toNode === toNode) {
      return true;
    }
    if (edge.fromNode === toNode && edge.toNode === fromNode) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push({ fromNode, toNode });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges = this.edges.filter((edge) => {
    if (edge.fromNode === fromNode && edge.toNode === toNode) {
      return false;
    }
    if (edge.fromNode === toNode && edge.toNode === fromNode) {
      return false;
    }
    return true;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


