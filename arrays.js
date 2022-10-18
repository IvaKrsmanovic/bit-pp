// 1. Write an array of months in a year. Using console.log display June, October and January from the array.

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(months.length);
console.log(months[5], months[9], months[0])

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
console.log(week.length)
console.log(week[6])

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].

a = [2, -4, 5, -2, -11]
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        console.log(a[i])
    }
}

// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

b = [5, 15, -5, 20, 12, 18, 72, 14, 9];

for (var i = 0; i < b.length; i++) {
    if (b[i]%3==0) {
        console.log(b[i],i)
    }
}

// 5.

c=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// What is the index of number 24 in the following array?

console.log(c[0][3])

//  Display the 3rd element of the array,

console.log(c[2])

//  Display the 2nd element of the 3rd element.

console.log(c[2][1])
