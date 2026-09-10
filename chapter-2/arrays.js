// an array is a liner collection of elements
// elements do not have to be of the same type.
// creating arrays
var arr = []; // method one length = 0 NOTE: recommended more efficient
var arr = [1, 2, 3]; // method two length = 3
var arr = new Array(); // method three length = 0
var arr = new Array(1, 2, 3); // method three length = 3
var arr = new Array(10); // method three length = 10

// verifying if an object is an array
Array.isArray(arr); // returns a boolean

// accessing elements
arr[0]; // returns the first element
arr[1]; // returns the second element
arr[2]; // returns the third element

// populating an array

for (var i = 0; i <= 10; i++) {
  arr[i] = i; // populates the array with numbers 0-10
}

// creating arrays from strings
var sentence = 'my name is jane doe';
var words = sentence.split(' '); // returns ["my", "name", "is", "jane", "doe"]

// assigning one array to another
// 1) shallow copy
var array_one = [1, 2, 3];
var array_two = array_one; // NOTE: this only acts as a reference i.e altering array_one alters array_two

// 2) deep copy
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

var arr1 = [1, 2, 3];
var arr2 = [];
copy(arr1, arr2);

// accessor functions
// searching for an element using indexof()
var people = ['jane', 'joe', 'john', 'job', 'jesse', 'john'];
var person = 'john';
var position = people.indexOf(person);
if (position >= 0) {
  console.log('Hurray!! found ' + people[position] + ' at index ' + position); // returns Hurray!! found john at index 2
} else {
  console.log('person not found');
}
// NOTE: indexof() returns position of the first occurrence and returns -1 if o match is found.

// searching for an element using lastindexof()
var people = ['john', 'joe', 'john'];
var person = 'john';
var position = people.lastIndexOf(person);
if (position >= 0) {
  console.log('Hurray!! found ' + people[position] + ' at index ' + position); // returns Hurray!! found john at index 2
} else {
  console.log('person not found');
}
// NOTE: lastIndexof() returns position of the last occurrence and returns -1 if o match is found.

// returning string representation of an array (method join())
var people = ['jane', 'joe', 'john'];
console.log(people.join()); // returns jane,joe,john

// returning string representation of an array (method toString())
var people = ['jane', 'joe', 'john'];
console.log(people.toString()); // returns jane,joe,john

// creating NEW arrays from existing arrays
// 1) using concat()
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // returns [1,2,3,4,5,6]

// 2) using splice()
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = arr1.splice(1, 3);
console.log(arr2); // returns [2,3,4]

// mutator functions
// adding elements to an array
// 1) using push() adds element to the end of an array
var arr = [1, 2, 3];
console.log(arr); // returns [1,2,3]
arr.push(4);
console.log(arr); // returns [1,2,3,4]

// 2) using unshift() adds element to the beginning of an array
var arr = [2, 3, 4];
console.log(arr); // returns [2,3,4]
arr.unshift(1);
console.log(arr); // returns [1,2,3,4]

// removing elements from an array
// 1) using pop() removes element to the end of an array
var arr = [1, 2, 3];
console.log(arr); // returns [1,2,3]
arr.pop();
console.log(arr); // returns [1,2]

// 2) using shift() removes element to the beginning of an array
var arr = [2, 3, 4];
console.log(arr); // returns [1,2,3]
arr.shift();
console.log(arr); // returns [3,4]

// adding and removing elements from the middle of an array method(splice())
// 1) adding
var arr = [1, 2, 5, 6];
console.log(arr); // returns [1,2,5,6]
arr.splice(2, 0, 3, 4);
console.log(arr); // returns [1,2,3,4,5,6]

// 2) removing
var arr = [1, 2, 10, 20, 30, 3, 4];
console.log(arr); // returns [1, 2, 10, 20, 30, 3, 4]
arr.splice(2, 3);
console.log(arr); // returns [1,2,3,4]

// putting arrays in order
// reversing an array
var arr = [1, 2, 3, 4];
console.log(arr); // returns [1,2,3,4]
arr.reverse();
console.log(arr); // returns [4,3,2,1]

// sorting an array
// NOTE: the sort() method only works well with strings
var arr = ['charles', 'danny', 'ben', 'abel'];
console.log(arr); // returns ['charles', 'danny', 'ben', 'abel']
arr.sort();
console.log(arr); // returns ['abel', 'charles', 'ben', 'danny']

// for numbers we pass an ordering function to the sort() method
function order(num1, num2) {
  return num1 - num2;
}

var arr = [3, 5, 1, 4, 2];
console.log(arr); // returns [3, 5, 1, 4, 2]
arr.sort(order);
console.log(arr); // returns [1,2,3,4,5]

// iterator functions
// 1) non array generating iterator functions
// a) foreach()
function square(num) {
  console.log(num ** 2); // returns [1,4,9,16]
}
var arr = [1, 2, 3, 4];
arr.forEach(square);

// b) every() returns true if every element matches the condition passed
function isEven(num) {
  return num % 2 == 0;
}
var arr = [1, 2, 3, 4];
var even = arr.every(isEven);
if (even) {
  console.log('all elements are even');
} else {
  console.log('all elements are not even');
}

// c) some() returns true is at least one element matches a gic=ven condition
function isEven(num) {
  return num % 2 == 0;
}
var arr = [1, 2, 3, 4];
var even = arr.some(isEven);
if (even) {
  console.log('some of the elements are even');
} else {
  console.log('none of the elements are even');
}

// d) reduce() acts from left to right
function add(old, active) {
  return old + active;
}
var arr = [1, 2, 3, 4];
var sum = arr.reduce(add);
console.log(sum); // returns 10

// e) reduceRight() acts from right to left
function add(old, active) {
  return old + active;
}
var arr = [1, 2, 3, 4];
var sum = arr.reduceRight(add);
console.log(sum); // returns 10

// 2) iterator functions that returns new array
// a) map()
function add(num) {
  return num * 2;
}
var arr = [1, 2, 3, 4];
var new_arr = arr.map(add);
console.log(new_arr); // returns [2,4,6,8]

// b) filter()
function isEven(num) {
  return num % 2 == 0;
}
var arr = [1, 2, 3, 4];
var even = arr.filter(isEven);
console.log(even); // returns [2,4]

// creating array of arrays(multidimensional arrays and two-dimentional arrays )
// 1) 2d arrays
var two_dimention_array = [];
for (var i = 0; i <= 5; i++) {
  two_dimention_array[i] = [1, 2, 3];
}
console.log(two_dimention_array); // returns [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];

// processing two dimentional array elements
// columnar processing
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    'Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}

// rowise processing
var grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
  for (var row = 0; row < grades[col].length; ++row) {
    total += grades[row][col];
  }
  average = total / grades[col].length;
  console.log('Test ' + parseInt(col + 1) + ' average: ' + average.toFixed(2));
  total = 0;
  average = 0.0;
}

// jagged arrays
// are arrays where the inner array length are not equal.
var grades = [
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    'Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}