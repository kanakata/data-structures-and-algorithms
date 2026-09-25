/**
 * Complete stack implementation
 */
class Stack {
  #dataset = [];
  #count = 0;
  /**
   * adds an element into a stack
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
   * Check the top element in the stack
   * @returns
   */
  peek() {
    if (this.#dataset.length === 0) return undefined;
    return this.#dataset[this.#count - 1];
  }
  /**
   * removes all the elements in a stack
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
