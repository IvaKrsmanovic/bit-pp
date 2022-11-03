// 1. Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    if (a > b) {
        m = a;
    } else {
        m = b;
    }

    return m;
}

var result = max(534654, 658468);
console.log(result);

// Nikola
function maxOutOfTwo(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

console.log(maxOutOfTwo(11, 8));

// 2. Write a program that checks if a given number is odd.

function odd(a) {
    if (a % 2 == 0) {
        c = 'The number is not odd';
    } else {
        c = 'The number is odd';
    }

    return c;
}

var result = odd(658468);
console.log(result);

// Nikola
function checkIfIsOdd(a) {
    return a % 2 !== 0;
}

console.log(checkIfIsOdd(3))

// 3. Write a program that checks if a given number is a three digit long number.

function check(a) {
    return /^\d{3}$/.test(a);
}

var result = check(123);
if (result == true) {
    console.log('The number is three digit');
} else {
    console.log('The number is not three digit');
}

// Nikola
function checkDigitLength(a) {
    return (a + '').length;
}

var digitLength = checkDigitLength(332);
if (digitLength >= 3) {
    console.log('The digit length is', digitLength);
}

// 4. Write a program that calculates an arithmetic mean of four numbers.

function mean(a, b, c, d) {
    c = (a + b + c + d) / 4;
    return c;
}

var result = mean(10, 20, 2, 5);
console.log(result);

// ILI

function meanUpdate() {
    var args = arguments;
    var prelim = 0
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        prelim += value;
        result = prelim / args.length
    }

    return result;
}

var meanA = meanUpdate(6, -5, 3, 6, 5);
console.log(meanA)

// Nikola
function arithmeticMean() {
    var args = arguments;
    var result = 0;

    for (var i = 0; i < args.length; i++) {
        var value = args[i + ''];
        result += value;
    }

    return result / args.length;
}

console.log(arithmeticMean(3, 4, 5, 18, 22))


// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****


function draw(n) {
    var string = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                string += "*";
            }
            else {
                if (j === 0 || j === n - 1) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    return string;
}

var result = draw(7);
console.log(result);

// Nikola
function square(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i == 0 || i == (a - 1)) {
                result += '*'
            } else {
                if (j == 0 || j == (a - 1)) {
                    result += '*'
                } else {
                    result += ' '
                }
            }

        }

        result += '\n';
    }

    console.log(result);
}

square(5);


// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function stars(a, b, c) {
    var string = "";
    for (i = 0; i < a; i++) {
        string += '*';
    }
    string += "\n";
    for (j = 0; j < b; j++) {
        string += '*';
    }
    string += "\n";
    for (k = 0; k < c; k++) {
        string += '*';
    }
    string += "\n";
    return string;
}

var result = stars(3, 2, 5);
console.log(result);

// Nikola
function draw(a) {
    var result = '';
    for (var i = 0; i < a; i++) {
        result += '*'
    }

    console.log(result);
}

function drawLines() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        var value = args[i + '']
        draw(value);
    }
}

drawLines(8, 3, 5)

// 7. Write a program that calculates a number of digits of a given number.

function countDigits (a){
    b= a.toString().split('');
    count = 0;
    for (i=0; i<b.length; i++){
        if (/\d/.test(i)==true) {
            count++;
        }
    }
    return count;
}

var result = countDigits(4651451245613245);
console.log(result);

// Nikola

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function appear(a,e){
    var count=0;   
    for (index=0; index<a.length; index++){
        if (a[index]===e){
            count++;
        }
    }
    return count;
}

var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var result= appear(a,e);
console.log(result)

// Nikola
function calculateAppearances(input, value) {
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (value === input[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(calculateAppearances([3, 4, 1, 8, 7, 1], 1))


// 9. Write a program that calculates the sum of odd elements of a given array.

function sumOdd (a) {
    var sum=0;
    for (i=0; i<a.length; i++){
        if (a[i]%2!=0){
            sum+=a[i];
        }
    }

    return sum;   
}

var a = [2, 4, 7, 8, 7, 7, 1];
var result = sumOdd(a);
console.log(result);

// Nikola
function sumOfElements(input) {
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 != 0)
            result += input[i];
    }

    return result;
}

console.log(sumOfElements([4, 3, 1, 8, 7, 1]))

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

function countA (a){
    count = 0;
    for (i=0; i<a.length; i++){
        if (/[a]/i.test(a[i])==true) {
            count++;
        }
    }
    return count;
}

var result = countA('agjefwjAaaAdgjs');
console.log(result);

// Nikola
function sumOfLetterAppearences(inputString, inputLetter) {
    var counter = 0;
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].toLowerCase() == inputLetter.toLowerCase()) {
            counter++;
        }
    }

    return counter;
}

console.log(sumOfLetterAppearences('It\'s a beautiful day', 'i'));


// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

function print (string,num) {
    pr='';
    for (i=0; i<num; i++){
      pr+=string;  
    }
return pr;

}

var result = print('abc',2);
console.log(result);

// Nikola
function concatenateString(input, n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += input;
    }

    return result;
}

console.log(concatenateString('Test', 4))