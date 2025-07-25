// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}  
// answer is 3 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer is 0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// answer is "hello"

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer is "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//answer is 5 and 5


//2.1 exercise1.js.js




// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}  
// answer is 3 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// answer is 0


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// answer is "hello"

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// answer is "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
//answer is 5 and 5


//2.1 exercise1.js.js



// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = test;
/* answer is const b = true;
const c = 789;
let a = 'test';
a = 'test'; */

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

/*  answer is const { firstName, lastName, age, eyeColor } = person;*/


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { 
  a: a,
  b: b,
  c: c
};
/*  answer is const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c };
*/


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
/* answer is const isValidAge = (age = 10) => {
  return age;
};
*/

// Symbol
// Create a symbol: "This is my first Symbol"
// answer is const mySymbol = Symbol("This is my first Symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
/*  answer is const whereAmI = (username, location) => {
  return (username && location) ? "I am not lost" : "I am totally lost!";
};
*/

//6.2 exercise3.js.js



//Solve these problems:

//#1 Create a one line function that adds adds two parameters// answer is const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)// answer returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)// answer reterns 31


//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSumm = (a) => (b) => a + b
const addgi = curriedSum(5)
add5(12)// answer returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)// answer returns 16

//What are the two elements of a pure function?// answer is deterministics and no side effects
