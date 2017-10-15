var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.peek = function() {
    return this.head.value;
  };

  list.addToTail = function(value) {
    // create node
    var newNode = Node(value);
    // check if list.head === null => set ll.head to node created, set ll.tail to node created
    if (this.head === null) {
      this.head = newNode;
    } else {
      // have new node's .previous point to current tail
      newNode.previous = this.tail
      // else assign ll.tail.next to new node & assign ll.tail to new node
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.addToHead = function(value) {
    // create new node
    var newNode = Node(value);

    if (this.tail === null) {
      // assign new node to liststail
      this.tail = newNode;
    } else {
      // point new node's next to current head
      newNode.next = this.head;
      // point current head's previous to new node
      this.head.previous = newNode;
    }

    // point head to new node
    this.head = newNode;
  };
  
  list.removeTail = function() {
    // store value of tail
    var value = this.tail.value;
    if (this.tail.previous !== null) {
      // set this.tail to this.tail.previous
      this.tail = this.tail.previous;
      // set this.tail next to null;
      this.tail.next = null;
    } else {
      // if there is no previous value to original tail (aka tail was the only node) set both head and tail to null 
      this.tail = null;
      this.head = null;
    }
    // return value
    return value;
  };

  list.removeHead = function() {
    // assign head value to new variable value
    var value = this.head.value;
    if (this.head.next !== null) {
      // reassign linked list head to linked list.head.next
      this.head = this.head.next;
      // set new head's previous value to null (because there is no previous value)
      this.head.previous = null;
    } else {
      // if there is no head.next that means head was the only node.  After removing there are no more nodes to this.head & this.tail = null
      this.head = null;
      this.tail = null;
    }
    // return value
    return value;
  };

  list.contains = function(target) {
    // debugger;
    // check if we're at head of list... if so
    if (arguments[1] === undefined) {
      // compare target to list.head.value, if true
      if (target === this.head.value) {
        // return true
        return true;
      } else {
      // else --
        // if .next === undefined => return false;
        if (this.head.next === null) {
          return false;
        } else {
        // check next node by calling contains with head.next
          return this.contains(target, this.head.next);
        }
      }
    } else {
    // else if we're not in head
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
          return this.contains(target, arguments[1].next);
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    - list.addToTail(val): O(1)
    - list.removeHead(): O(1)
    - list.contains(val): O(n)
 */
