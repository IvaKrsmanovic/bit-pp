// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function checkElement(a, e) {
    var contains = false;
    for (var index = 0; index < a.length; index++) {
        if (a[index] === e) {
            contains = true;
            break;
        }
    }
    return contains;
}

console.log(checkElement([5, -4.2, 8, 7], 3));

// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiply(array){
    output=[];
    for (var i=0; i<array.length; i++){
        if (array[i]>0) {
            output.push(array[i]*2);
        } else {
            output.push(array[i]);
        }
    }

    return output;
}

console.log(multiply([-3, 11, 5, 3.4, -8]));

// Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimum(array) {
    var min = array[0];
    position = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            position = i;
        }
    }

    return 'Minimum je ' + min + ' na poziciji ' + position;
}

console.log(minimum([4, 2, 2, -1, 6]));

// 3. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]

function secondMin(array) {
    min = array[0];
    sec = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        for (var j = 0; j < array.length; j++) {
            if (array[j] > min && array[j] < array[i]) {
                sec = array[j];
            }
        }
    }

    return sec;
}

console.log(secondMin([4, 2, 2, -1, 6]));

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]

function sumPositive(array){
    var sum=0;
    for (var i=0; i<array.length; i++){
        if (array[i]>0) {
            sum+=array[i];
        }
    }

    return sum;
}

console.log(sumPositive([3, 11, -5, -3, 2, 10]));

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function symmetric(array) {
    var sym = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[(array.length - 1 - i)]) {
            sym = true;
        } else {
            sym = false;
            break;
        }
    }

    return sym;
}

console.log(symmetric([2, 4, -2, 7, -2, 4, 2]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]


function intertwines(arrayA,arrayB){
    array=[];
    for (var i=0; i<arrayA.length; i++){
        array.push(arrayA[i]);
        array.push(arrayB[i]);
    }

    return array;
}

console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]

function concatenates(arrayA, arrayB){
    var array=[];
    for (var i=0; i<(arrayA.length+arrayB.length); i++){
        if (i<arrayA.length){
            array[i]=arrayA[i];
        } else {
            array[i]=arrayB[i - arrayA.length];
        }
    }

    return array;
}

console.log(concatenates([4, 5, 6, 2], [3, 8, 11, 9]));

// Write a program that deletes a given element e from the array a.
// var e = 2;
// var a = [4, 6, 2, 8, 2, 2];

function deleteElement(array,e){
    output=[];
    for (var i = 0; i < array.length; i++){
        if(array[i]!=e){
            output.push(array[i]);
        }
    }
    
    return output;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2],2));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


function insertElement(array, p, e) {
    output = [];
    if (array.length > p) {
        for (i = 0; i <= p; i++) {
            if (i != p) {
                output.push(array[i]);
            } else {
                output.push(e);
            }
        }
        for (j = p; j < array.length; j++) {
            output.push(array[j]);
        }
        return output;
    }
    else {
        return 'Error';
    }
}

console.log(insertElement([2, -2, 33, 12, 5, 8], 6, 78))