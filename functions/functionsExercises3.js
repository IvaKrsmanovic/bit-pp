// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).

function insert (string,add,position){
var result = '';
if(position!=null){
for (var i = 0; i<=string.length;i++) {
    if (i == position) {
        result += add;
    } else if (i < position){
        result += string[i];
    } else {
        result+= string[(i-1)];
    }
}} else {
    result=add+string;
}
return result;
}

console.log(insert('some random string','JS',5));

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

function join (array){
    string='';
    for (var i=0; i<array.length; i++){
        if (isNaN(array[i])!=true && array[i]!=null && array[i]!=undefined && array[i]!=Infinity){
            string+=array[i];
        }
    }
    return string;
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]))


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

// 4. Write a function that reverses a number. The result must be a number.

function reverse(number){
result='';
num=number.toString();
for (var i=(num.length-1); i>=0; i--){
    result+=num[i];
}
return Number(result);
}

console.log(reverse(123));

// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
// last 'n' elements of the array.

function last(array, n) {
    newArray = [];
    if (n == null) {
        newArray = array[(array.length - 1)]
    } else {
        for (var i = (array.length - n); i < (array.length); i++) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(last([3, 4, 1, 8, 7, 1]))

// 6. Write a function to create a specified number of elements with pre-filled numeric value
// array.

function fill(times, element) {
    result = [];

    for (i = 0; i < times; i++) {
        if (element != null) {
            result.push(element);
        } else {
            result.push(null);
        }
    }
    return result;
}

console.log(fill(4))

// 7. perfect number

// 8. Write a function to find a word within a string.

function findWord(text,word){
    var words = text.split(' ')
    count=0;
    for (i=0; i<words.length; i++){
        if (words[i]==word){
            count++;
        }
    }
    return 'The word '+word+' was found '+count+' times';
    
}

console.log(findWord('fox jump fox fox whatever','fox'))

// 9. Write a function to hide email address.

function shorten (email){
    var result='';
    var position
    for (i=0; i<email.length; i++){
        if (email[i]=='@'){ 
            position=i;
        }
    for (i=0; i<position; i++){
        
    }    
        result+=string[i];
    }
    return result+'...';
}

console.log(shorten('random',3))