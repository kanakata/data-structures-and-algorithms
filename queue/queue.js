/**
 * Queue implementation.
 */
class Queue {
  #dataset = [];

  /**
   * @param {*} element
   * @returns the first element in the queue.
   */
  dequeue(element) {
    return this.#dataset.shift();
  }

  /**
   * adds an element into the queue
   * @param {*} element
   */
  enqueue(element) {
    this.#dataset.push(element);
  }

  /**
   * @returns the first element in the queue
   */
  front() {
    return this.#dataset[0];
  }

  /**
   * @returns the last element in the queue
   */
  back() {
    return this.#dataset[this.#dataset.length - 1];
  }

  /**
   * returns all elements in the queue.
   * @returns the whole queue
   */
  tostring() {
    return this.#dataset;
  }

  /**
   * get the length of the dataset
   */
  size() {
    return this.#dataset.length;
  }

  /**
   * checks if the queue is empty.
   * @returns bool (true if empty false if occupied)
   */
  empty() {
    if (this.#dataset.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * PriorityQueue implementation.
 */
class PriorityQueue {
  #dataset = [];
  /**
   * @param {*} element
   * @returns the first element in the queue.
   */
  dequeue(element) {
    return this.#dataset.shift()[0];
  }

  /**
   * adds an element into the queue basing on the priority.
   * @param {*} element
   */
  enqueue(element, priority) {
    if (this.empty()) {
      this.#dataset.push(element);
    } else {
      let added = false;
      this.values().forEach((value, index) => {
        if (priority < value[1]) {
          this.#dataset.splice(index, 0, [element, priority]);
          added = true;
        }
      });

      if (!added) {
        this.#dataset.push([element, priority]);
      }
    }
  }

  /**
   * @returns the first element in the queue
   */
  front() {
    return this.#dataset[0];
  }

  /**
   * @returns the last element in the queue
   */
  back() {
    return this.#dataset[this.#dataset.length - 1];
  }

  /**
   * returns all elements in the queue.
   * @returns the whole queue
   */
  values() {
    return this.#dataset;
  }

  /**
   * get the length of the dataset
   */
  size() {
    return this.#dataset.length;
  }

  /**
   * checks if the queue is empty.
   * @returns bool (true if empty false if occupied)
   */
  empty() {
    if (this.#dataset.length === 0) return true;
    return false;
  }
}
