// 4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

function letter() {
  this.letter = [];
  this.add = add;
  this.display = display;
}

function add(letter) {
  this.letter.push(letter);
}

function display() {
  return this.letter.join('');
}

let val = new letter();

val.add('j');
val.add('a');
val.add('n');
val.add('e');

console.log(val.display());