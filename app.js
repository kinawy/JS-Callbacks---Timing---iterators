// Call back functions

function greeting (name, callback) {
    let sentence = 'Hello, my name is ' + name;
    // return sentence;
    let otherSentence = callback();

    return sentence + otherSentence;
}

let myName = 'Sameh';
console.log(greeting(myName, anotherGreeting));

function anotherGreeting () {
    let sentence = ' and I forgot my last name.'
    return sentence;
}

function printArray (array, callback) {
    for (let i = 0; i< array.length; i++) {
        let num = array[i];
        console.log(num);
    }
    callback(array);
}

function printArrayAgain (array) {
    for (let i = 0; i< array.length; i++) {
        let num = array[i];
        console.log(num);
    }
}

printArray(['chicken', 'john'], printArrayAgain);

//Exercise

function calculator (num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1,num2);

    return result
}

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function subtractNumbers (num1, num2) {
    let pro = num1 - num2;
    return pro;
}
addNumbers(5,77);
subtractNumbers(5,77)
console.log(calculator(5,77,addNumbers,subtractNumbers));

function superHero (call1, call2) {
    let result = call1 + call2;

    return result;
}

function laserEyes (power) {
    let result = 'I have ' + power + ' eyes ';
    return result;
}
function superStrength (strength) {
    let result = 'I also have super ' + strength;
    return result;
}

console.log(superHero(laserEyes('laser'), superStrength('strength')));

// Timing Functions

function blastOff () {
    let num = 0;
    for (let i = 10; i>num; i--) {
        console.log(i);
    }
    console.log("blast off!!");
}
setTimeout(blastOff, 5000);

function myName1 (name) {
    console.log(name);
}
let name1 = 'my name is sameh';
setTimeout(function(){
    myName1(name1);
}, 1000);