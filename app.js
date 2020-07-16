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