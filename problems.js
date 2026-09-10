function stack() {
  this.datastore = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
  this.top = 0;
}

// pushing an element into the stack.
function push(element) {
  this.datastore[this.top++] = element;
}

function pop() {
  return this.datastore[--this.top];
}
function peek() {
  return this.datastore[this.top - 1];
}
function clear() {
  this.top = 0;
}
function length() {
  return this.top;
}

// palindrome
function palindrome(word) {
  const s = new stack();

  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }

  let nw = '';

  for (let i = 0; i < word.length; i++) {
    nw += s.pop(word[i]);
  }

  if (word == String(nw)) {
    console.log(word + ' is a palindrome!!!');
  } else {
    console.log(word + ' is not a palindrome!!!');
  }
}

palindrome('das');
palindrome('dad');
palindrome('racecar');
palindrome('mom');
palindrome('palindrome');

// recursion
function factorial(number) {
  const s = new stack();

  while (number > 1) {
    s.push(number--);
  }

  let product = 1;

  while (s.top > 0) {
    product *= s.pop();
  }

  return product;
}

console.log(factorial(5));
