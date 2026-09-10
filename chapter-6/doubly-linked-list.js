function Node(data) {
  this.data = data;
  this.next = null;
  this.previous = null;
}

function DoublyLinkedList() {
  this.head = new Node('head');

  this.find = function (node_data) {
    var currentNode = this.head;
    while (currentNode.data != node_data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.insert = function (data, previous_node) {
    var newNode = new Node(data);
    var currentNode = this.find(previous_node);
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
  };

  this.remove = function (data) {
    var currentNode = this.find(data);
    if (currentNode.next != null) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
    }
  };
}
