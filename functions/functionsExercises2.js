// 1. Write a function to check whether the `input` is a string or not.
// 'My random string' -> true
// 12 -> false

function string(input) {
            return typeof input=='string';
        }
console.log(string('sdfhk'));

// 2. Write a function to check whether a string is blank or not.

function blank(input) {
        return /^$/.test(input)==true
}


console.log(blank(' '));

// 3. Write a function that concatenates a given string n times (default is 1).

function concatenate(string,num) {
    result=string;
    for (i=1; i<num; i++) {
        result+=string
    }
    return result;
}

console.log(concatenate('Ha',2));

// 4. Write a function to count the number of letter occurrences in a string.

function letters(string,letter) {
    count=0;
    for (i=0; i<string.length; i++){
        if (string[i]===letter){
            count++;
        }
    }

    return count;
}

console.log(letters('My random strig','n'));

// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function occurrence(string,letter) {
    res=0;
    for (i=0; i<string.length; i++){
        if (string[i]===letter){
            res=i;
            break;
        } else {
            res=-1;
        }
    }

    return res;
}

console.log(occurrence('My random strig','n'));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function occurrence(string,letter) {
    res=0;
    for (i=0; i<string.length; i++){
        if (string[i]===letter){
            res=i;
        } else {
            res=-1;
        }
    }

    return res;
}

// function occurrence(string, letter) {
//     return string.lastIndexOf(letter);
// }

var result = occurrence('My random strig','n');

if (result==1) {
    console.log(result+'st');
} else if (result==2) {
    console.log(result+'nd');
} else if (result==3) {
    console.log(result+'rd');
} else if (result==-1|result==0) {
    console.log(result)
} else {
    console.log(result+'th')
}

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

function stringToArray (string) {
    array=[];
    for (var i=0; i<string.length; i++){
        if (string[i]!=' '){
            array.push(string[i]);
        } else {
            array.push('null');
        }
    }

    return array;
}

console.log(stringToArray('Random string'));

// Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i = i + 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(21));

// Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

function separator(string,sep){
    result='';
    for (var i=0; i<string.length; i++){
        if(string[i]==' '){
            if (sep==null){
                result+='-'
            } else {
            result+=sep;
        }
        } else {
            result+=string[i];
        }
    }
    return result;
}

console.log(separator('my random string'))

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function shorten (string, n){
    result='';
    for (i=0; i<n; i++){
        result+=string[i];
    }
    return result+'...';
}

console.log(shorten('random',3))

// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

function numeric(strings) {
    array = [];
    for (i = 0; i < strings.length; i++) {
        if (typeof strings[i] == 'number') {
            array.push(strings[i]);
        }
    }

    return array;
}

console.log(numeric(['1', '21', undefined, '42', '1e+3', Infinity]));

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retirement (year, gender){
    age=2022-year;
    if (gender=='m'|gender=='male'){
        if (age>65){
            return 'already retired';
        } else {
            return (65-age)+' years left to retirement';
        }
    } else {
        if (age>60){
            return 'already retired';
        } else {
            return (60-age)+' years left to retirement';
        }
    }
}

console.log(retirement(1994,'m'))

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanize(number){
    if (number==1){
        return number+'st'
    } else if (number==2){
        return number+'nd';
    } else if (number==3){
        return number+'rd'
    } else {
        return number+'th'
    }
}

console.log(humanize(8))