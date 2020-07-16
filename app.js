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