function List() {
  this.listSize = 0;
  this.pos = 0;
  this.#dataStore = [];

  /**
   * @function clears the list
   * @returns void
   */
  this.clear = function () {
    delete this.#dataStore;
    this.#dataStore = [];
    this.listSize = this.pos = 0;
  };

  /**
   * @param {data to checked for presence added to the list} element 
   * @returns 
   */
  this.find = function (element) {
    for (let i = 0; i < this.#dataStore.length; ++i) {
      if (this.#dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  };

  this.toString = function () {
    return this.#dataStore.join();
  };

  this.insert = function (element, after) {
    var pos = this.find(after);
    if (pos > -1) {
      this.#dataStore.splice(pos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  };

  this.append = function (element) {
    this.#dataStore[this.listSize++] = element;
  };

  this.remove = function (element) {
    var pos = this.find(element);
    if (pos > -1) {
      this.#dataStore.splice(pos, 1);
      --this.listSize;
      return true;
    }
    return false;
  };

  this.front = function () {
    this.pos = 0;
  };

  this.end = function () {
    this.pos = this.list - 1;
  };

  this.prev = function () {
    if (this.pos > 0) {
      --this.pos;
    }
  };

  this.next = function () {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  };

  this.length = function () {
    return this.listSize;
  };

  this.currentPos = function () {
    return this.pos;
  };

  this.getElement = function () {
    return this.#dataStore[this.pos];
  };

  this.contains = function (element) {
    var pos = this.find(element);
    if (pos == -1) {
      return false;
    }
    return true;
  };
}


