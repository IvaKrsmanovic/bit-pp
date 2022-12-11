// 1. Write a function that checks if a given string contains digit 5.


function checkType(data, type) {
    if (!data || typeof data != type) {
        return false;
    }

    return true;
}

var filter = function (input, conditionChecker) {
    if (!checkType(conditionChecker, 'function') || !input || input.length == 0) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        if (!conditionChecker(input[i])) {
            continue;
        }

        return true;
    }

    return false;
}

function checkElement(element) {
    return element == 5;
}

console.log(filter('shf5qehkf5', checkElement));

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.


var transformed = (function (sentence, string, replacementCharacter) {
    var counter = 0;
    var result = '';
    for (var i = 0; i < sentence.length; i++) {
        for (var j = 0; j < string.length; j++) {
            if ((string[j + 1]) && (sentence[i + 1])) {
                if (sentence[i].toLowerCase() == string[j].toLowerCase() && sentence[i + 1].toLowerCase() == string[j + 1].toLowerCase()) {
                    for (var k = 0; k < string.length; k++) {
                        result += replacementCharacter;
                        counter++;
                    }
                }

                else {
                    result += sentence[i];
                }
            }
        }
    }

    return `${result}, ${counter}`;
})('Programming in JS is so fun!', 'JS', '*');

console.log(transformed);

// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”

var transformed = function (string, character, position) {
    var result = '';
    for (var i = 0; i < string.length; i++) {
        if (i == position - 1) {
            result += character;
            result += string[i]
            continue;
        }

        result += string[i];
    }

    return result;
}

console.log(transformed('Good orning', 'm', 6));

// 5. Write a function that deletes every second element of the given array.

function checkType(data, type) {
    if (!data || typeof data != type) {
        return false;
    }

    return true;
}

var filter = function (input, element) {

    var result = [];
    var output = [];
    for (var i = element - 1; i < input.length; i += element) {
        result.push(i);
    }

    for (var i = 0; i < input.length; i++) {
        if (!result.includes(i)) {
            output.push(input[i]);
        }
    }
    return output;
}

console.log(filter([6, 5, 8, 5, 7, 5, 2, 0], 3));

//6. Write a function that replaces the elements of the given array between two positions with
// their doubled values.


function checkType(data, type) {
    if (!data || typeof data != type) {
        return false;
    }

    return true;
}

function double(num) {
    return num * 2;
}

var filter = function (input, conditionChecker) {
    if (!checkType(conditionChecker, 'function') || !input || input.length == 0) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        if (!conditionChecker(i)) {
            result.push(input[i]);
        } else {
            result.push(double(input[i]));
        }
    }

    return result;
}

function checkElement(position) {
    return position >= 2 && position <= 6;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], checkElement));

// 7. Write a function that checks if every element of the first array is contained in the second
// array. Be careful with repetitions!

function sortArrayByLetter(input, letter) {
    if (!input || input.length == 0 || !letter || letter.length != 1) {
        return input;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var counter = 0;
        for (var j = 0; j < input[i].length; j++) {
            var element = input[i][j];
            if (element == letter) {
                counter++;
            }
        }

        if (result.length > 1) {
            var maxCount = 0;
            for (var z=0; z<result.length; z++){
                if (result[z][1]>maxCount) {
                    maxCount = result[z][1]
                }
            }
            
            if (maxCount<counter) {
                result = [input[i], counter].concat(result);
            }
        } else {
            result.push([input[i], counter]);
        }
    }
    return result;
}

console.log(sortArrayByLetter(['apple','tea','amazing','morning','JavaScript'],'a'))

