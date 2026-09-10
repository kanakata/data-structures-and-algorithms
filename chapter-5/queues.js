/**
 * Queue implementation.
 */
function Queue() {
  this.#datastore = [];

  /**
   * @param {*} element
   * @returns the first element in the queue.
   */
  this.dequeue = function (element) {
    return this.#datastore.shift();
  };

  /**
   * adds an element into the queue
   * @param {*} element
   */
  this.enqueue = function (element) {
    this.#datastore.push(element);
  };

  /**
   * @returns the first element in the queue
   */
  this.front = function () {
    return this.#datastore[0];
  };

  /**
   * @returns the last element in the queue
   */
  this.back = function () {
    return this.#datastore[this.#datastore.length - 1];
  };

  /**
   * returns all elements in the queue.
   * @returns the whole queue
   */
  this.tostring = function () {
    return this.#datastore;
  };

  /**
   * checks if the queue is empty.
   * @returns bool (true if empty false if occupied)
   */
  this.empty = function () {
    if (this.#datastore.length == 0) {
      return true;
    } else {
      return false;
    }
  };
}
