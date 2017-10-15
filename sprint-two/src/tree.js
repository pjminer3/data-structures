var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  // your code here
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

var removeChild = function(parentTree, val) {
  // set idx = null;
  var idx = null;
  // loop through children the checking their value
  _.each(parentTree.children, function(child, index) {
    if (child.value === val) {
      // if their value matches, reset index to the index of the child
      idx = index;
    }
  });
  // splice out the index
  parentTree.children.splice(idx, 1);
};

treeMethods.removeFromParent = function() {
  var ParentTree = this.parent;
  // call removeChild(this.value)\
  removeChild(this.parent, this.value);
  // reset this.parent to null
  this.parent = null;
};

// treeMethods.removeChild = function(val) {
//   // set idx = null;
//   var idx = null;
//   // loop through children the checking their value
//   _.each(this.children, function(child, index) {
//     if (child.value === val) {
//       // if their value matches, reset index to the index of the child
//       idx = index;
//     }
//   });
//   // splice out the index
//   this.children.splice(idx, 1);
// };

treeMethods.countChildren = function() {
  // set var numChildren to 0
  var tree = this;
  var numChildren = 0;
  var childrensChildren = function(tree) { 
  // create recursive function that adds length of children array to children var
    numChildren += tree.children.length;
    if ( tree.children.length > 0 ) {
      for ( var i = 0; i < tree.children.length; i++ ) {
        // calls itself on all its children
        childrensChildren(tree.children[i]);
      }
    }
    return undefined;
  };
  // call function on tree
  childrensChildren(tree);
  return numChildren; 
};

treeMethods.addChild = function(value) {
  // create new tree node
  var childTree = Tree(value);
  // assign new tree's parent to the 'this' tree
  childTree.parent = this;
  // push childtree into this children
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
