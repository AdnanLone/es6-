/**
 * Created by adnan on 4/20/16.
 */

function reverseString(str){
    var newStr = str.split(' '); //when a String method is us
    //when a string method is used on a primitive string then
    //javascript automatically converts the primitive string to an object string
    var objStr = new String(str);
    console.log(typeof newStr );
    console.log(typeof objStr);
    return str;
}

console.log(reverseString('Hello'));