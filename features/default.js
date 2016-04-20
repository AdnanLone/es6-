/**
 * Created by adnan on 4/18/16.
 */
//nodemon --exec babel-node file.js
//babel-node file.js --presets es2015

//EXAMPLES

function sayHello(name = 'world') {
    console.log('hello ' + name);
}

sayHello('adnan')
sayHello();


function greetUser(user = {name: 'Anonymous'}) {
    console.log('Hello ' + user.name);
}

greetUser();

greetUser({name: 'ali'});


