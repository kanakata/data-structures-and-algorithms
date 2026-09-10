// separate chaining
function HashTable(size, collision_handler = 'separate probing') {
  this.table = new Array(size);
  this.collision_handler = collision_handler.toLocaleLowerCase().trim();
  this.buildChains = function () {
    if (this.collision_handler == 'separate chaining') {
      for (let i = 0; i < this.table.length; i++) {
        this.table[i] = new Array();
      }
    }
  };

  this.put = function (data, key = data) {
    var data_hash = key == data ? this.hash(data) : this.hash(key);
    if (this.collision_handler == 'separate chaining') {
      var index = 0;
      if (this.table[data_hash][index] == undefined) {
        this.table[data_hash][index++] = data;
      } else {
        while (this.table[data_hash][index] != undefined) {
          ++index;
        }
        this.table[data_hash][index] = data;
      }
    } else {
      if (this.table[data_hash] == undefined) {
        this.table[data_hash] = data;
      } else {
        while (this.table[data_hash] != undefined) {
          data_hash++;
        }
        this.table[data_hash] = data;
      }
    }
  };

  this.get = function (key) {
    var index = 0;
    var data_hash = this.hash(key);
    if (this.collision_handler == 'separate chaining') {
      if (this.table[data_hash][index] == key) {
        return this.table[data_hash][index];
      } else {
        index++;
        while (this.table[data_hash][index] != key) {
          index++;
        }
        return this.table[data_hash][index];
      }
    } else {
    }
  };

  this.hash = function (data) {
    data = String(data);
    const H = 37;
    var total = 0;
    for (let i = 0; i < data.length; i++) {
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  };

  this.showDistro = function () {
    if (this.collision_handler == 'separate collision') {
      var n = 0;
      for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
          console.log(i + ' : ' + this.table[i]);
        }
      }
    } else {
      for (let i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
          console.log(i + ' : ' + this.table[i]);
        }
      }
    }
  };
}

var sentence =
  'hello my name is jane doe, i live in london and i work as a software developer.'.split(
    ' '
  );
'hello'.replace();
function clean(array) {
  var sentence = array;
  for (let i = 0; i < sentence.length; i++) {
    sentence[i].trim();
    if (sentence[i].endsWith(',') || sentence[i].endsWith('.')) {
      sentence[i] = sentence[i].replace(
        sentence[i].charAt(sentence[i].length - 1),
        ''
      );
    }
  }
  return sentence;
}

var HT = new HashTable(137, 'linear probing');
HT.buildChains();
var data = clean(sentence);
for (var i = 0; i < data.length; i++) {
  HT.put(data[i]);
}
HT.showDistro();
// console.log(HT.table);
