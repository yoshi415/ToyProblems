// Implement a depth-first method on a tree class.

// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, 
// and returns a flat array of node values of the tree for which the filter returns true.

Tree.prototype.DFSelect = function(filter) {      
  var results = [];
  // depth is used as stack counter
  var subroutine = function(node, depth) {
    if (filter(node.value, depth)) {
      results.push(node.value);
    }
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      // recurse on each child & increment depth to go down one level
      subroutine(child, depth + 1);
    }
  };
  // 'this' is the head node
  subroutine(this, 0);

  return results;
};
