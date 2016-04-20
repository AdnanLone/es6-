/**
 * Created by adnan on 4/19/16.
 */
//
//TEMPLATE STRINGS EXAMPLE

// function greet (name = 'anonymous') {
//     // console.log('Hello ' + name);
//     console.log(`hello ${name}`);
// }
// greet('adnan');
// greet();
//
// console.log(`hey whats up
//
// how are you doing
//
// adnan`);


function greet(person = {name: 'Anonymous', age: 0}) {
    console.log(`Hello ${person.name}, You are ${person.age} years old`);
}

var person = {
    name: 'Adnan',
    age: 33
};

greet();
greet(person);


