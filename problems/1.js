// 1. Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

function Grades() {
  this.grades = [];
  this.average = average;
  this.add = add;
}

function add(grade) {
  this.grades.push(grade);
}

function average() {
  let sum = 0;
  for (let i = 0; i < this.grades.length; i++) {
    sum += this.grades[i];
  }
  return sum / this.grades.length;
}

let g = new Grades();

g.add(10);
g.add(20);

console.log(g.average());
