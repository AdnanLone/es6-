// var test = 10;
// console.log('initial value of test is  ' + test);//10
//
// function implementTest() {
//     console.log('INSIDE FUNCTION first line value of test ' + test);//10
//
//     test = 22;
//
//     console.log('INSIDE FUNCTION after changing the value of test in local variable ' + test);//22
// }
//
// console.log('before calling the function implementTest ' + test);//10
//
// implementTest();
// console.log('after calling the function implementTest ' + test);//22
//
// if (true) {
//    var test1 = 33;
//     console.log('inside for loop ' + test1);
// }
//  // test1 =78;
// console.log('after for loop execution ' + test1 );
//

var z=3;

function x() {
    y =1;
    z=9;
     z =200;
    console.log(z);
    z=0;

}

x();
console.log(y);

console.log(z);