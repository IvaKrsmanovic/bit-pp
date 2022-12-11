// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var result = (function (array) {
    output = [];
    for (i = 0; i < array.length; i++) {
        if (i == 0) {
            output.push(array[array.length - 1]);
        } else if (i == array.length - 1) {
            output.push(array[0]);
        } else {
            output.push(array[i])
        }
    }

    return console.log(output);
})([4, 5, 11, 9]);

result;

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

var result = (function (a, b) {
    return console.log(a * b);
})(4, 5);

result;

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

var result = (function (word) {
    var count = 0;
    var output = '';
    for (var i = 0; i < word.length; i++) {
        if (word[i] == 'm' | word[i] == 'M') {
            output += '*';
            count++;
        } else {
            output += word[i]
        }
    }

    return console.log([output, count]);
})('programMing');

result;

var transformed = (function (sentence, letter, replacementCharacter) {
    var counter = 0;
    var result = '';
    for (var i=0; i<sentence.length; i++){
        if (sentence[i].toLowerCase()!==letter.toLowerCase()){
            result += sentence[i];
            continue;
        }

        result += replacementCharacter;
        counter++;
    }

    return `${result}, ${counter}`;
})('programMing', 'm', '*');

console.log(transformed);

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

function email() {

    return function (name, surname) {
        console.log(name + '.' + surname + '@gmail.com');
    };
}

var result = email();

result('pera', 'peric');

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

var getNumberToDecimalConverter = function (base) {
    if (!base) {
        return 0;
    }

    function convert (number) {
        return parseInt (number, base);
    }

    return function (value) {
        return convert(value);
    }
}

var octalToDecimal = getNumberToDecimalConverter(8);
var num = octalToDecimal('034');
console.log(num);

// 6. Write a function that checks if a given string is a valid password.

function checkType(data, type){
    if (!data || typeof data != type){
        return false;
    }

    return true;
}


var passwordChecker = function (array, success, error){

    if(!checkType(success, 'function') || !checkType(error, 'function')) {
        return false;
    }

    function isNumeric (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function isPasswordValid (password){
        if (typeof password != 'string' || password.length < 6) {
            return false;
        }

        for (var i = 0; i < password.length; i++) {
            if (isNumeric (password[i])){
                return true;
            }
        }

        return false;
    }

    var isValid = isPasswordValid(password);
    if (isValid) {
        return success();
    }

    return error();
}

var success = function(){
    console.log ('Your password is valid');
}

var error = function(){
    console.log('Your password is invalid');
}

passwordChecker('jshdsjhd', success, error);

7.

function checkType(data, type){
    if (!data || typeof data != type){
        return false;
    }

    return true;
}

var filter = function (input, conditionChecker) {
    if (!checkType(conditionChecker, 'function') || !input || input.length == 0) {
        return input;
    }

    var result = [];
    for (var i =0; i<input.length; i++) {
        if (!conditionChecker(input[i])) {
            continue;
        }

        result.push(input[i]);
    }

    return result;
}

function checkElement(element) {
    return element >= 20;
}

console.log(filter([5, 8, 25, 85], checkElement));