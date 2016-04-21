// also read hoisting in javascript
// in JS var declarations are processed before any code is executed
// so decalring the variable anywhere in the code is equivalent to
// declaring it at the top
//
// in this function age is initialized with being declared wiht the var keyword
// age will be added to the global scope in this case

function showAge() {
    age = 199;
    console.log('inside showAge' + age);//199
}
showAge();//199
console.log('outside showAge' + age);//199
//-----------------------********----------------------------------
console.log('-----------------------********-------------------');
//-----------------------********----------------------------------

function getSalary() {
    console.log('mySalary before declaring the local variable mySalary ' + mySalary);
    var mySalary = 99;
    console.log('mySalary after declaring the local variable mySalary ' + mySalary);
}
var mySalary = 2000;
console.log('mySalary before function call ' + mySalary);
getSalary();
console.log('mySalary before after call ' + mySalary);

//-----------------------********----------------------------------
console.log('-----------------------********-------------------');
//-----------------------********----------------------------------

function getSalary2() {
    console.log('mySalary2 before declaring the local variable mySalary ' + mySalary2);
    mySalary2 = 99;
    console.log('mySalary2 after declaring the local variable mySalary ' + mySalary2);
}
var mySalary2 = 2000;
console.log('mySalary2 before function call ' + mySalary2);
getSalary2();
console.log('mySalary2 before after call ' + mySalary2);

//-----------------------********----------------------------------
console.log('-----------------------********-------------------');
//-----------------------********----------------------------------

function getSalary3() {
    var mySalary3;
    console.log('mySalary3 before declaring the local variable mySalary ' + mySalary3);
    mySalary3 = 9898;
    console.log('mySalary3 after declaring the local variable mySalary ' + mySalary3);
    mySalary3 = 9898;
}
var mySalary3 = 2000;
console.log('mySalary3 before function call ' + mySalary3);
getSalary3();
console.log('mySalary3 before after call ' + mySalary3);

//
// using let
// let has a block level scope
// example 1 using var inside if statement

var x = 0;//global scope 0
console.log('initial value ' + x);
if (true) {
    var x = 12;//global scope 12
    console.log('inside if statement ' + x);
}

console.log(x);//global var therefore value is changed to 12

// -------
// example 2
// same results as x is in global scope

var x = 0;//global scope 0
console.log('initial value ' + x);
if (true) {
    x = 12;//global scope 12
    console.log('inside if statement ' + x);
}
console.log(x);//global var therefore value is changed to 12

// example 3
// using let

var x = 0;//global scope 0
console.log('initial value ' + x);
if (true) {
    let x = 12;//let has a block level scope, value of x is 12 inbetween the {}
    console.log('inside if statement ' + x);
}
console.log(x);//0 because let x =12 has scope only in {}
//therefore the value of x in global scope is still 0


// example 4
// if a variable is defined using let keyword at the global level
// then nothing special happens
// its the same as using var keyword

let name = 'adnan';
console.log(name);
function test() {
    console.log(name);
}
test();

// example 5
// using let in a for loop
// it is usually done to clean up the scope
// in let case i will be undefined after for loop ends
// in var case i is still available after the for loop ends

// case using var

for (var i = 0; i < 3; i++) {
    console.log(`For loop: i = ${i}`);//0 1 2
}
console.log(i);//3

// case using let

for (let i=0; i<3; i++){
    console.log(`For loop i: ${i}`);//0 1 2
}
console.log(i);// i is not defined
// let makes variables available to the code that only needs it
// here we dont  need i after the for loop ends
// so we can use let

// example 6
// using let in a function
// variable defined using let is accessible to inner functions

function outerFun() {
    let x = 100;//here let and var have same effects
    return function () {
        console.log(x);
    }
}

outerFun()();
