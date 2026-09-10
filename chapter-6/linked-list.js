// node
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');

  this.find = function (node_data) {
    var currentNode = this.head;
    while (currentNode.data != node_data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  this.findPrevious = function (current_node_data) {
    var currentNode = this.head;
    while (
      currentNode.next != null &&
      currentNode.next.data != current_node_data
    ) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  // insertion after.
  this.insertAfter = function (data, previous_node_data) {
    var newNode = new Node(data);
    var previousNode = this.find(previous_node_data);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  };

  this.display = function () {
    var currentNode = this.head;
    while (currentNode.next != null) {
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  };

  this.delete = function (data) {
    var previousNode = this.findPrevious(data);
    if (previousNode.next != null) {
      previousNode.next = previousNode.next.next;
    }
  };
}

const ll = new LinkedList();
ll.insertAfter('say a prayer', 'head');
ll.insertAfter('brush my teeth', 'say a prayer');
ll.insertAfter('take a bath', 'brush my teeth');
ll.display();
ll.delete('brush my teeth');
ll.display();
