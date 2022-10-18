var result = '';
var a = 3;
if (a > 2) {
    result = a + ' is greater than 2';
}
console.log(result);

var result = '';
var a = 1;
if (a > 2) {
    result = a + ' is greater than 2';
} else {
    result = a + ' is NOT greater than 2';
}
console.log(result);

var a = 1, b = 2;
if (a > b) {
    console.log('A vece od B');
} else {
    console.log('A manje od B');
}

var a = 1, b = 1;
if (a > b) {
    console.log('A vece od B');
} else if (a < b) {
    console.log('A manje od B');
}
else {
    console.log('A isto kao B');
}

d = 9
if (d % 2 == 0) {
    console.log('paran')
} else {
    console.log('neparan')
}

// log a program to check if the variable is a number. 
// If it’s a number, check if it is divisible by 2. 
// If it is, print the result, if not, show “X”

x = 9
if (typeof x == 'number') {
    if (x % 2 == 0) {
        console.log(x / 2)
    }
    else {
        console.log('X')
    }
}

// log a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
a = 3, b = 7, c = 2
result = a * b * c
if (result < 0) {
    console.log('The sign is -')
} else {
    console.log('The sign is +')
}

a = 1
b = 2
c = 3
d = 4
e = 5
console.log(Math.max(a, b, c, d, e))

a = 6
b = 2
c = 39
if (a < b && b < c) {
    console.log(a, b, c);
}else if(b < a && c < a) {
    if(b < c){
        console.log(b, c, a); 
    } else{
        console.log(c, b, a); 
    }
 } else if (b < a && a < c) {
    console.log(b, a, c);
  } else if(b < a && c < a) {
    console.log(b, c, a); 
  } else if(c < a && a < b) {
    console.log(c, a, b);
  } else {
    console.log(c, b , a);
  }