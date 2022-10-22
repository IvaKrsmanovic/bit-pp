var i = 0;
while (i<= 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i< 10);

var  a = 11;
do {
    console.log(a);
} while (a< 10)

for (var a = 0; a < 5; a++) {
    console.log(a);
    for (i=4; i > a; i--) {
        console.log('Value of i is '+i, 'Value of a '+a)
    }
}


var negativeNumbers = [2, 3, -5, -8, 4, -11, 0, 0];
var i = 0;

while (i < negativeNumbers.length) {
    var element = negativeNumbers[i];
    if (element < 0) {
        console.log("Negative number: ", element);
    }

    i++;
}

i = 0;
do {
    var element = negativeNumbers[i];
    if (element < 0) {
        console.log("Negative number: ", element);
    }

    i++;
}while (i < negativeNumbers.length)

var length = negativeNumbers.length;

for (var i = 0; i< length; i++) {
    var element = negativeNumbers[i];
    if (element< 0) {
        console.log("Negative number:", element)
    }
}

for (var element in negativeNumbers) {
    if (element <0) {
        console.log("Negative number:", element);
    }
}

// 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.

sum=0
for (var a = 0; a <= 10; a++) {
    sum += a
    }
console.log('Zbir prvih 10 prirodni projeva je',sum)

// 2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.

num=2
op=4
res=1
for (var a = 0; a <= op-1; a++) {
    res *= num
    }
console.log(res)

// 3. Write a code to calculate the factorial of a given number and show it on screen.
// Example: The Factorial of 5 is 120.

num=6
res=1
for (a=1; a<=num; a++) {
    res *= a
}

console.log(res)

// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

n = 6
x = []
sum = 0

for (a = 1; a <= n * 2; a++) {
    if (a % 2 == 0) {
        x.push(a)
        sum += a
    }
}
console.log('The even numbers are', x, 'and the sum is', sum)

// 5.Write a code to calculate the sum of digits in a number and show that sum on screen. 
// Example: "Sum of digits in number 232 is 7".

var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);

// 6. Write a code to count all letters in a word and show that count on screen. 
// Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

var word = "123";
var count = 0;
var uslov=/[a-z]/gi

// if (word.match(uslov).length==0) {
//     for (i=0; i<(word.match(uslov)).length; i++) {
//         count++;
//     }}
//     else {
//     console.log('Nema slova u reci!')
// }

// console.log(count)

for (i=0; i<(word.match(uslov)).length; i++) {
        count++;
    }
    
console.log(count)

// 7. Write a code to find on which index in array is letter "C" and show that index on screen. 
// Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

b = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];

for (var i = 0; i < b.length; i++) {
    if (typeof b[i] === 'string'){
        if ((b[i]).match(/c/i)) {
            console.log(i)
        } 
}}

//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

for (i=0; i<=15; i++) {
    if (i%2==0) {    
    console.log('Broj',i,'je paran')
    }
    else {
        console.log('Broj',i,'je neparan')
    }
}

//2. Write a program to sum the multiples of 3 and 5 under 1000.

sum=0
for (i=0; i<1000; i++) {
    if (i%3==0 && i%5==0) {    
    sum+=i
    }}

console.log(sum)

//3. Write a program to compute the sum and product of an array of integers.

a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
sum=0
prod=1

for (i=0; i<a.length; i++){
    sum+=a[i];
    prod*=a[i];
}

console.log(sum,prod)

//4. Write a program which prints the elements of the following array as a single string. 

var x=['1','A','B','c','r',true, NaN, undefined]

print=''
for(i=0; i<x.length; i++){
    print+=x[i];
    print+=' ';
}

console.log(print)


//5. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
for(i=0; i<a.length; i++){
    for(j=0; j<a[i].length; j++){
        console.log(a[i][j])    
    }
}

// 6. Write a program that outputs the sum of squares of the first 20 numbers.

sum=0
for(i=0; i<=20; i++){
    prod=i*i;
    sum+=prod;
    }

console.log(sum)    

// Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

var David=80
var Marko=77
var Dany=88
var John=95
var Thomas=68

students=[David,Marko,Dany,John,Thomas]

console.log(students)
sum=0

for(i=0;i<students.length;i++){
    sum+=students[i]
}

prosek=sum/(students.length)
console.log(prosek)

// The grades are computed as follows :

// &lt; 60% F
// &lt; 70% D
// &lt; 80% C

// &lt; 90% B
// &lt; 100% A

if (prosek>90) {
    console.log('A')
} else if (prosek>80){
    console.log('B')
} else if (prosek>70){
    console.log('C')
} else if (prosek>60){
    console.log('D')
} else {
        console.log('F')
}

// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

for (i=0; i<=100; i++) {
    if(i%3==0 && i%5!=0){
        console.log('Fizz');
    }
    else if(i%5==0 && i%3!=0){
        console.log('Buzz');
    }
    else if (i%5==0 && i%3==0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}

// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes

var e = 3;
var a = [5, -4.2, 3, 7];

for (i=0; i<a.length; i++){
    if (a[i]===e){
        console.log('Jeste deo niza');
    }
}

if(a.includes(e)){
    console.log('Jeste deo niza');
} else {
    console.log('Nije deo niza');
}

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

a=[-3, 11, 5, 3.4, -8];
var niz=[];

for (i=0; i<a.length; i++){
    if (a[i]>0) {
        niz.push(a[i]*2);
    } else {
        niz.push(a[i]);
    }
}

console.log(niz);

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var a=[4, 2, 2, -1, 6];

min = Infinity;

for (i=0; i<a.length; i++) {
    if (a[i] < min) {
    min = a[i];
}
}

console.log(min);

// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var a=[4, 2, 2, -1, 6, 1.5, 0.2];

min = Infinity;
sec = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }
    for (j = 0; j < a.length; j++) {
        if (a[j] > min && a[j] < a[i]) {
            sec = a[j];
        }
    }
}

console.log(min);
console.log(sec);

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

a=[3, 11, -5, -3, 2];
sum=0;

for(i=0; i<a.length; i++){
    if(a[i]>0){
        sum+=a[i];
    }
}

console.log(sum);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

a=[2, 4, -2, 7, -2, 4, 2];
rez='';

for (i=0; i<a.length; i++){
    if(a[i]===a[(a.length-1-i)]){
        rez=true;
    } else {
        rez=false;
    }
}


if (rez===true){
    console.log('Simetrican');
} else {
    console.log('Nije simetrican');
}


// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

a = [4, 5, 6, 2];
b = [3, 8, 11, 9];
niz = []

for (i = 0; i < a.length; i++) {
    niz.push(a[i]);
    niz.push(b[i]);
}

console.log(niz)

// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

a = [4, 5, 6, 2];
b = [3, 8, 11, 9];
niz=[];

for (i = 0; i < a.length; i++) {
    niz.push(a[i]);
}
for (j = 0; j < b.length; j++) {
    niz.push(b[j]);
}

console.log(niz)

// 9. Write a program that deletes a given element e from the array a.

var e = 2;
var a = [4, 6, 2, 8, 2, 2];

for (i = 0; i < a.length; i++){
    if(a[i]===e){
        delete a[i];
    }
}

console.log(a)

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
var e = 78;
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var niz=[]

for (i = 0; i < a.length; i++) {
    if (a.length - 1 > p) {
        if (i < p) {
            niz.push(a[i]);
        } else if (i = p) {
            niz.push(e);
        } else if (i > p) {
            niz.push(a[i]);
        }
    } else {
        console.log('Error')
    }
}