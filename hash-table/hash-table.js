/**
 * Hash table implementation
 */
class HashTable {
  #table;
  #collision_handler;
  constructor(size = 137, collision_handler = 'separate probing') {
    this.#collision_handler = collision_handler.toLocaleLowerCase().trim();
    this.#table = new Array(size);
  }

  buildChains() {
    if (this.#collision_handler == 'separate chaining') {
      for (let i = 0; i < this.#table.length; i++) {
        this.#table[i] = new Array();
      }
    }
  }

  put(data, key = data) {
    let data_hash = key == data ? this.#hash(data) : this.#hash(key);
    if (this.#collision_handler == 'separate chaining') {
      let index = 0;
      if (this.#table[data_hash][index] == undefined) {
        this.#table[data_hash][index++] = data;
      } else {
        while (this.#table[data_hash][index] != undefined) {
          ++index;
        }
        this.#table[data_hash][index] = data;
      }
    } else {
      if (this.#table[data_hash] == undefined) {
        this.#table[data_hash] = data;
      } else {
        while (this.#table[data_hash] != undefined) {
          data_hash++;
        }
        this.#table[data_hash] = data;
      }
    }
  }

  get(key) {
    let index = 0;
    let data_hash = this.#hash(key);
    if (this.#collision_handler == 'separate chaining') {
      if (this.#table[data_hash][index] == key) {
        return this.#table[data_hash][index];
      } else {
        index++;
        while (this.#table[data_hash][index] != key) {
          index++;
        }
        return this.#table[data_hash][index];
      }
    } else {
    }
  }

  #hash(data, bucket_number = 37) {
    let total = 0;
    data = String(data);
    for (let i = 0; i < data.length; i++) {
      total += bucket_number * total + data.charCodeAt(i);
    }
    total = total % this.#table.length;
    if (total < 0) {
      total += this.#table.length - 1;
    }
    return parseInt(total);
  }

  showDistro() {
    if (this.#collision_handler == 'separate collision') {
      let n = 0;
      for (let i = 0; i < this.#table.length; ++i) {
        if (this.#table[i][0] != undefined) {
          console.log(i + ' : ' + this.#table[i]);
        }
      }
    } else {
      for (let i = 0; i < this.#table.length; ++i) {
        if (this.#table[i] != undefined) {
          console.log(i + ' : ' + this.#table[i]);
        }
      }
    }
  }
}
