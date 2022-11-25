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

