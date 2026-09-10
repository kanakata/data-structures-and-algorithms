/**
 * Dictionary implementation
 */
function Dictionary() {
  this.datastore = new Array();

  /**
   * adds a key value pair into the dictionary.
   * @param {*} key
   * @param {*} value
   */
  this.add = function (key, value) {
    this.datastore[key] = value;
  };

  /**
   * @param {*} key
   * @returns the value of the key passed
   */
  this.find = function (key) {
    return this.datastore[key];
  };

  /**
   * removes a key value pair from the dictionary
   * @param {*} key
   * @returns bool
   */
  this.remove = function (key) {
    if (delete this.datastore[key]) return true;
  };

  /**
   * @returns the whole dictionary
   */
  this.showAll = function () {
    return this.datastore;
  };

  /**
   * @returns the number of key value pairs in the dictionary
   */
  this.count = function () {
    var count = 0;
    for (let i = 0; i < Object.keys(this.datastore).length; i++) {
      count++;
    }
    return count;
  };

  /**
   * deletes the key value pairs in the dictionary.
   */
  this.clear = function () {
    delete this.datastore;
    this.datastore = [];
  };

  /**
   * sort the dictionary.
   * @returns
   */
  this.sort = function () {
    var keys = [];

    for (let i = 0; i < Object.keys(this.datastore).length; i++) {
      keys.push(Object.keys(this.datastore)[i]);
    }

    keys.sort();

    var result = [];

    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = this.datastore[keys[i]];
    }

    return result;
  };
}