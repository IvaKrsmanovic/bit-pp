// 1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.

function numberer(array) {
    output=[];
    check=[];
    for (i=0; i<array.length; i++){
        check.push(Number (array[i]));
    }
    for (i=0; i<check.length; i++){
        if (isNaN (check[i])==false && check[i]!=Infinity){
            output.push(array[i]);
        }
    }

    return output;
}

console.log(numberer(['1', '21', undefined, '42', '1e+3', Infinity]));

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.

function join (array){
    string='';
    for (var i=0; i<array.length; i++){
        if (isNaN(array[i])!=true && isFinite(array[i])==true && array[i]!=null){
            string+=array[i];
        }
    }
    return string;
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 3. Write a program to filter out falsy values from the array.

function omitF (array){
    newArray=[];
    for (var i=0; i<array.length; i++){
        if (!!array[i]==true){
            newArray.push(array[i]);
        }
    }
    return newArray;
}


console.log(omitF([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// 4. Write a program that calculates a number of integer values in the array.

function checkInt(array) {
    count=0;
    for (i=0; i<array.length; i++){
        if (Number.isInteger (array[i])){
            count++;
        }
    }

    return count;
}

console.log(checkInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

// 5. Write a program that calculates a number of float values in the array.


function checkFloat(array) {
    count=0;
    for (i=0; i<array.length; i++){
        if (Number(array[i]) === array[i] && array[i] % 1 !== 0){
            count++;
        }
    }

    return count;
}

console.log(checkFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));