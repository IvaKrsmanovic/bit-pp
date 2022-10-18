a = 3, b = 2, c = 2

if (a==b&a==c&b==c) {
    console.log('equilateral')
} else if (a!==b&a!==c&b!==c) {
    console.log('scalene')
}
else {
    console.log('isosceles')
}

// Find the grade for input marks (you should have at least two input marks). Grades are:
// A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.


var results=[70,90,60]

for(var i = 0; i < results.length; i++) {
if (results[i]>=91) {
    console.log('A')
} else if (results[i]>=81){
    console.log('B')
} else if (results[i]>=71){
    console.log('C')
} else if (results[i]>=61){
    console.log('D')
} else {
        console.log('F')
}}

// Create two variables (or if you know how to do it - input fields). One should be a number, other
// should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
// it handle a few collective nouns like “sheep” and “geese”.

const pluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

console.log(pluralize(1, 'cat'))

// Write a program to show you age based on entered number (if you know how to create input field, if
//     not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
//     but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
//     example with 13.

age = 14

if (age>18) {
console.log('You are old enough to drive')
} else {
    console.log(18-age + ' ' + 'years to drive')
}

// 6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
// age. Show how much is that older/younger than you with text for example “He/She is 13 years
// older/younger than me”. If you are the same age - print that you are the same age.

age=15
newage=18

if (age==newage) {
    console.log('You are the same age')
    } else if (age>newage) {
        console.log('he/she is'+ ' ' + (age - newage) + ' ' + 'years younger than me')
    } else {
        console.log('he/she is' + ' ' + (newage - age) + ' ' + 'years older than me')
    }