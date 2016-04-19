/**
 * Created by adnan on 4/18/16.
 */
// function sayHello (name = 'world') {
//     console.log('hello ' + name);
// }
//
// sayHello('adnan')
// sayHello();


function greetUser(user = {name: 'Anonymous'}) {
    console.log('Hello ' + user.name);
}

greetUser();

greetUser({name: 'adnan'});