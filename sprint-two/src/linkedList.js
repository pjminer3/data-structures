var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    // NOTE: CHANGE LIST TO 'THIS'
    
    // create node
    var newNode = Node(value);
    // check if list.head === null => set ll.head to node created, set ll.tail to node created
    if (list.head === null) {
      list.head = newNode;
    } else {
      // else assign ll.tail.next to new node & assign ll.tail to new node
      list.tail.next = newNode;
    }
    
    list.tail = newNode;
  };

  list.removeHead = function() {
    
    // NOTE: TRY WITH DELETING HEAD
    
    // assign head value to new variable value
    var value = list.head.value;
    // reassign linked list head to linked list.head.next
    list.head = list.head.next;
    // return value
    return value;
  };

  list.contains = function(target) {
    debugger;
    // check if we're at head of list... if so
    if (arguments[1] === undefined) {
      // compare target to list.head.value, if true
      if (target === list.head.value) {
        // return true
        return true;
      } else {
      // else --
        // if .next === undefined => return false;
        if (list.head.next === null) {
          return false;
        } else {
        // check next node by calling contains with head.next
          return list.contains(target, list.head.next);
        }
        
      }
    } else {
    // else if w're not in head
      // compare arguments[1].value to target
      if (target === arguments[1].value) {
        // if true return true
        return true;
      } else {
      // else 
        // if (arguments[1].next === undefined) return false
        if (arguments[1].next === null) { 
          return false; 
        } else {
             // call cantains(target, arguments[1].next)
          return list.contains(target, arguments[1].next);
        }
      }
    }
        
        
      
      
    
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
