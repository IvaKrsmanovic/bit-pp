// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: 'You will be a X in Y, and married to Z with N kids.'
// Call that function 3 times with 3 different values for the arguments.

function tellFortune (children,partner,location,job){
    return 'You will be a '+job+' in '+location+', and married to '+partner+' with '+children+' kids.';
}

console.log(tellFortune(4,'Milan','Belgrade','researcher'));

// 2. Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: 'Your doggie is NN years old in dog years!'
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

function calculateDogAge(puppy){
    return 'Your doggie is '+puppy*7+' years old in dog years!';
}

console.log(calculateDogAge(7));

// 3. Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: 'You will need NN to last you until the ripe old age of
// X'
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount) {
    return 'You will need '+(80-age)*365*amount+' cuties to last you until the ripe old age of 80';
}

console.log(calculateSupply(25,4));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output 'NN°C is NN°F'


function celsiusToFahrenheit(celsius){
    return celsius+'°C is '+ celsius*9/5+32 + '°F';
}

console.log(celsiusToFahrenheit(17));

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output 'NN°F is NN°C'

function fahrenheitToCelsius(fahrenheit){
    return fahrenheit+'°F is '+ Math.round((fahrenheit-32)*5/9) + '°C';
}

console.log(fahrenheitToCelsius(60));

// Create a function that validates a password to conform to the following rules:
// - Length between 6 and 24 characters,
// - At least one uppercase letter (A-Z).
// - At least one lowercase letter (a-z).
// - At least one digit (0-9).
// - Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
// - Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; " ' ? < > , .
// - Examples: validatePassword('P1zz@') ➞ false // Too short.
// - validatePassword('iLoveYou') ➞ false // Missing a number.
// - validatePassword('Fhg93@') ➞ true // OK!

function validatePassword (password) {
    var validation=true;
    if (/[a-z]+/.test(password)!=true) {
        validation=false;
        return 'Missing a lowercase letter';
    }

    if (/[A-Z]+/.test(password)!=true) {
        validation=false;
        return 'Missing an uppercase letter';
    }

    if (/[0-9]+/.test(password)!=true) {
        validation=false;
        return 'Missing a number';
    }

    for (var i=0; i<password.length; i++){
        if (password[i]==password[i+1] & password[i]==password[i+2]){
            console.log (password[i],password[i+1],password[i+2])
            validation=false;
            return 'No three same characters repeated!';
        }
    }

    if (password.length<6) {
        validation=false;
        return 'Too short';
    }

    if (password.length>24) {
        validation=false;
        return 'Too long';
    }

    if (validation==true){
        return 'OK!';
    }
}

console.log(validatePassword('hhPiiy2@'));

// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function diamondArrays(n) {
    var output=[];
    for (var i=1; i<=n; i++) {
        for (var j=1;j<=i;j++){
            output.push(i);
        }
    }

    for (var i=n-1; i>0; i--) {
        for (var j=1; j<=i; j++){
            output.push(i);
        }
    }    
    
    return output;
}

console.log(diamondArrays(5));


//Prime numbers

function primeNumbers(num){
    var result = [];
    for (var i=2; i<=num; i++){
        var notPrime = false;
        for (var j=2; j<=i; j++){
            if (i%j===0 && i!=j){
                notPrime = true;
                break;
            }
        }

        if (!notPrime) {
            result.push(i)
        }
    }

    console.log (`There are ${result.length} prime numbers: `+ result);
}

primeNumbers(19);

