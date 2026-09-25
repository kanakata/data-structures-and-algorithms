class List {
  #list_size;
  #pos;
  #dataset;
  constructor() {
    this.#list_size = 0;
    this.#pos = 0;
    this.#dataset = [];
  }

  /**
   * @function clears the list
   * @returns void
   */
  clear() {
    this.#dataset = [];
    this.#list_size = this.#pos = 0;
  }

  /**
   * @param {data to checked for presence added to the list} element
   * @returns
   */
  find(element) {
    for (let i = 0; i < this.#dataset.length; ++i) {
      if (this.#dataset[i] == element) {
        return i;
      }
    }
    return -1;
  }

  toString() {
    return this.#dataset.join();
  }

  insert(element, after) {
    var pos = this.find(after);
    if (pos > -1) {
      this.#dataset.splice(pos + 1, 0, element);
      ++this.#list_size;
      return true;
    }
    return false;
  }

  append(element) {
    this.#dataset[this.#list_size++] = element;
  }

  remove(element) {
    var pos = this.find(element);
    if (pos > -1) {
      this.#dataset.splice(pos, 1);
      --this.#list_size;
      return true;
    }
    return false;
  }

  front() {
    this.#pos = 0;
  }

  end() {
    this.#pos = this.list - 1;
  }

  prev() {
    if (this.#pos > 0) {
      --this.#pos;
    }
  }

  next() {
    if (this.#pos < this.#list_size - 1) {
      ++this.#pos;
    }
  }

  length() {
    return this.#list_size;
  }

  currentPos() {
    return this.#pos;
  }

  getElement() {  
    return this.#dataset[this.#pos];
  }

  contains(element) {
    var pos = this.find(element);
    if (pos == -1) {
      return false;
    }
    return true;
  }
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  #head;
  #length;
  constructor() {
    this.#head = new LinkedListNode('head');
  }

  size() {
    return this.#length;
  }

  head() {
    return this.#head;
  }

  find(node_data) {
    var currentNode = this.#head;
    while (currentNode.data != node_data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findPrevious(current_node_data) {
    var currentNode = this.#head;
    while (
      currentNode.next != null &&
      currentNode.next.data != current_node_data
    ) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insertAfter(data, previous_node_data) {
    var newNode = new Node(data);
    var previousNode = this.find(previous_node_data);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
  }

  display() {
    var currentNode = this.#head;
    while (currentNode.next != null) {
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  }

  delete(data) {
    var previousNode = this.findPrevious(data);
    if (previousNode.next != null) {
      previousNode.next = previousNode.next.next;
    }
  }
}

class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  #head;
  constructor() {
    this.#head = new DoublyLinkedListNode('head');
  }

  find(node_data) {
    var currentNode = this.#head;
    while (currentNode.data != node_data) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(data, previous_node) {
    var newNode = new Node(data);
    var currentNode = this.find(previous_node);
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
  }

  remove(data) {
    var currentNode = this.find(data);
    if (currentNode.next != null) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
    }
  }
}
