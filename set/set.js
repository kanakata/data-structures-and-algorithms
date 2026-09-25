/**
 * Complete set implementation
 */
class Set {
  #dataset = [];
  /**
   * checks if an element is present in a set.
   * @param {*} element
   * @returns
   */
  #has(element) {
    if (this.#dataset.indexOf(element) >= 0) return true;
    return false;
  }
  /**
   * returns all all elements ina set.
   * @returns
   */
  values() {
    return this.#dataset;
  }
  /**
   * adds an element to a set.
   * @param {*} element
   * @returns
   */
  add(element) {
    if (this.#has(element)) return false;
    this.#dataset.push(element);
    return true;
  }
  /**
   * returns the size of a set.
   * @returns
   */
  size() {
    return this.#dataset.length;
  }
  /**
   * removes an element from set.
   * @param {*} element
   * @returns
   */
  remove(element) {
    if (!this.#has(element)) return false;
    this.#dataset.splice(pos, 1);
    return true;
  }
  /**
   * combines two sets.
   * @param {*} set
   * @returns
   */
  union(set) {
    let union_set = new Set();

    this.values().forEach((element) => {
      union_set.add(element);
    });

    set.forEach((element) => {
      union_set.add(element);
    });

    return union_set;
  }
  /**
   * creates a set with elements thar appear in both sets.
   * @param {*} set
   * @returns
   */
  intersection(set) {
    let intersection_set = new Set();
    this.values().forEach((element) => {
      if (set.has(element)) {
        intersection_set.add(element);
      }
    });
    return intersection_set;
  }
  /**
   * returns elements
   * @param {*} set
   * @returns
   */
  difference(set) {
    let difference_set = new Set();
    this.values().forEach((element) => {
      if (!set.has(element)) {
        difference_set.add(element);
      }
    });
    return difference_set;
  }
  /**
   * check if a set is a 
   * @param {*} set 
   * @returns 
   */
  subset(set) {
    return this.values().every((element) => {
      return set.has(element);
    });
  }
}