/**
 * Complete stack implementation
 */
class Stack {
  #dataset = [];
  #count = 0;
  /**
   * adds an elements into a stack
   * @param {*} element
   */
  push(element) {
    this.#dataset[this.#count++] = element;
  }
  /**
   * removes an element from a stack
   * @returns
   */
  pop() {
    if (this.#dataset.length === 0) return undefined;
    --this.#count;
    return this.#dataset.pop();
  }
  /**
   * check the top element in the stack
   * @returns
   */
  peek() {
    if (this.#dataset.length === 0) return undefined;
    return this.#dataset[this.#count - 1];
  }
  /**
   * removes all the elements ina stack
   */
  clear() {
    this.#dataset = [];
    this.#count = 0;
  }
  /**
   * gets the length of a stack
   * @returns
   */
  length() {
    return this.#count;
  }
}