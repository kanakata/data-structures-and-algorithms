function Stack() {
  this.#datastore = [];
  this.top = 0;
  this.push = function (element) {
    this.#datastore[this.top++] = element;
  };
  this.pop = function () {
    --this.top;
    return this.#datastore.pop();
  };
  this.peek = function () {
    return this.#datastore[this.top - 1];
  };
  this.clear = function clear() {
    delete this.#datastore;
    this.#datastore = [];
    this.top = 0;
  };
  this.length = function length() {
    return this.top;
  };
}