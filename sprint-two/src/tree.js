var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};


treeMethods.contains = function(target) {
  // debugger;
  var result = false;
  
  var recurse = function(target, tree) {
    if (target === tree.value) {
      result = true;
    } else if (tree.children.length >= 0) {
      _.each(tree.children, function(child) {
        recurse(target, child);
      });
    } 
  };
  recurse(target, this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
    - tree.addChild(val): O(1)
    - tree.contains(val): O(n)
 */
