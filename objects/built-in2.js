// Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.

var reverseNumber = number => parseFloat(number.toString().split('').reverse().join(''))

console.log(reverseNumber(12345))

// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

var reverseString = string => string.split('').reverse().join('');

console.log(reverseString('hello'));

// Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.

var firstSeparate = string => string.split(' ');
var alphabetizeString = str => str.split('').sort().join('').trim();

function alphabetizeString(string) {
    var str = string.split(' ')
    var returnString = ''
    for (var i = 0; i < str.length; i++) {
        newStr = str[i].split('').sort().join('').trim();
        returnString += ` ${newStr}`
    }

    return returnString;
}

console.log(alphabetizeString('Republic Of Serbia'));

// Write a function to split a string and convert it into an array of words.

function makeArray(string) {
    return string.split(' ');
}

console.log(makeArray('John Snow'));

// Write a function to convert a string to its abbreviated form.

function abbreviate(str) {
    var sep = str.split(' ');
    if (sep.length > 1) {
        return (sep[0] + " " + sep[1].charAt(0) + ".");
    }
}

console.log(abbreviate('John Snow'));

// Write a function that adds string to the left or right of string, by replacing it’s characters.

function replacePart(start, replace, position) {
    if (position == 'r') {
        return replace.concat(start.slice(replace.length));
    } else if (position == 'l') {
        return (start.slice(0, start.length - replace.length)).concat(replace);
    }
}

console.log(replacePart('something', 'none', 'l'))

// Write a function to capitalize the first letter of a string and returns modified string.

function capitalizeFirst (string) {
    return ((string.charAt(0)).toUpperCase()).concat(string.slice(1))
}

console.log(capitalizeFirst('some text idk anymore'));

// Write a function to hide email addresses to protect them from unauthorized users.

function protectEmail (email) {
    return email.slice(0,4).concat('...',email.slice(email.indexOf('@')))
}

console.log(protectEmail('ivabkrsmanovic@gmail.com'))

//Write a program that accepts a string as input and swaps the case of each character. For
// example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.


function switchCases (string) {
    var newString=''
    for (var i = 0; i<string.length; i++) {
        if (string.charAt(i).toUpperCase() == string.charAt(i)) {
            newString += string.charAt(i).toLowerCase()
        } else {
            newString += string.charAt(i).toUpperCase()
        }
    }

    return newString;
}

console.log(switchCases('The Quick Brown Fox'));