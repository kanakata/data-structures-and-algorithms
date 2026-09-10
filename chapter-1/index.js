// javascript variables are global and can be used before declaration.
// declaration
var user_name;

// initialization
user_name = 'jane';

// standard javascript operators
// =,-,/,*,%,**

// javascript has a math library for advanced functions like square root and trigonometry.
// operator precedence is as follows (),*,/,=,-

// decision constructs include:
// the if statement which includes:
// if(){}
// if(){}else{}
// if(){}else if(){}else()
// the switch statement
// switch(){}
// they are used to make decisions in our program as our code is running based on a boolean expression.

// repetition constructs.
// they include:
// for used to repeat an action a desired amount of times
// while used to repeat an action as long as the expression provided is true

// functions
// they include returning and void functions
// parameters are not passed by reference but arrays are

// variable scope.
// scope in javascript is functioned.
// if you define a variable inside a function without a key word it is made global

// recursion
// is a way of a function calling itself over and over

// constructor function
function user(name, age, gender, phone, email) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.phone = phone;
  this.email = email;
  this.greet = this.greet;
}

function greet(name) {
  console.log(this.name);
}

function check() {
  if (this.age < 18) {
    console.log('user is under age');
  }
}

let user = new user();
user.greet();