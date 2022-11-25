// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.

function slova(rec) {
    var countSamo = rec.match(/[aeiou]/gi).length;
    var countSug = rec.match(/(?![aeiou])[a-z]/gi).length;

    return 'Ima ' + countSamo + ' samoglasnika i ' + countSug + ' suglasnika.';
}

console.log(slova('neka recenica'));

// 2. Write a function that combines two arrays by alternatingly taking elements.

function intertwines(arrayA, arrayB) {
    array = [];
    for (var i = 0; i < arrayA.length; i++) {
        array.push(arrayA[i]);
        array.push(arrayB[i]);
    }

    return array;
}

console.log(intertwines(['a', 'b', 'c'], [1, 2, 3]));

// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateArray(list, k) {
    var newArray = [];
    for (var i = 0; i < list.length - k; i++) {
        newArray[i] = list[k + i]
    }
    for (var j = k-1; j >= 0; j--) {
        newArray[list.length - 1 - j] = list[k-1-j]
    }

    return newArray;
}

console.log(rotateArray([1,2,3,4,5,6],3));

// 4. Write a function that takes a number and returns array of its digits.

function turnIntoArray(number){
    var string= String (number);
    var newArray=[];
    for (var i=0; i<string.length; i++){
        newArray[i]=Number(string[i]);
    }

    return newArray;
}

console.log(turnIntoArray(5454458598));

// 5. Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable() {
    var result = ['* '];
    for (var i = 0; i <= 12; i++) {

        for (var j = 0; j < 11; j++) {

            if (i == 0 && j > 0) {
                result += '[' + j + ']';
            }
            else if (j == 0 && i > 0) {
                result += '[' + i + '] ';
            }
            else if (i > 0 && j > 0) {
                result += (i * j) + ' ';
            }
        }
        result += '\n'
    }

    return result;
}

console.log(multiplicationTable());

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function temperature(celsius){
    return celsius*9/5+32;
}

console.log(temperature(17));

// 7. Write a function to fin d the maximum element in array of numbers. Filter out all non-number
// elements.

function maximumElement(array){
    var max=array[0];
        for (var i=0; i<array.length; i++){
            if ((isNaN (array[i]))!=true){
                 if (array[i]>max){
                     max=array[i];
                 }
            }
        }

        return max;
}

console.log(maximumElement([2376,3176,'sjhsg',null,8194639]));

8. 
