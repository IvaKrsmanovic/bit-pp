// Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.

a=1;
result='';

switch (a){
    case 1:
        result='Ponedeljak';
        break;
    case 2:
        result='Utorak';
        break;
    case 3:
        result='Sreda';
        break;
    case 4:
        result='Cetvrtak';
        break;
    case 5:
        result='Petak';
        break;
    case 6:
        result='Subota';
        break;
    case 7:
        result='Nedelja'
        break;
    default:
        result='Broj mora biti izmedju 1 i 7'
        break;
}

console.log(result);

// Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

a=3;
result='';

switch (a){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result='Radni dan';
        break;
    case 6:
    case 7:
        result='Vikend';
        break;
    default:
        result='Broj mora biti izmedju 1 i 7'
        break;
}

console.log(result);

// Write a program that for a 1-12 number input (representing a month in a year) shows that
// month’s name. All other cases output a message explaining that input must be a number
// between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

a=3;
result='';

switch (a){
    case 1:
        result='Januar';
        break;
    case 2:
        result='Februar';
        break;
    case 3:
        result='Mart';
        break;
    case 4:
        result='April';
        break;
    case 5:
        result='Maj';
        break;
    case 6:
        result='Jun';
        break;
    case 7:
        result='Jul'
        break;
    case 8:
        result='Avgust';
        break;
    case 9:
        result = 'Septembar';
        break;
    case 10:
        result = 'Oktobar';
        break;
    case 11:
        result = 'Novembar';
        break;
    case 12:
        result = 'Decembar'
        break;
    default:
        result='Broj mora biti izmedju 1 i 12'
        break;
}

console.log(result);

/* Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - Good job, B - Pretty good, C -
Passed, D - Not so good, F - Failed. Input different from letters A-F outputs a message
Unknown grade.
 */

a='C';
result='';

switch (a){
    case 'A':
        result='Good job';
        break;
    case 'B':
        result='Pretty good';
        break;
    case 'C':
        result='Passed';
        break;
    case 'D':
        result='Not so good';
        break;
    case 'F':
        result='Failed';
        break;
    default:
        result='Unknown grade'
        break;
}

console.log(result);

/* Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message'Please
choose a different city'. */

a='Tirana';
result='';

switch (a){
    case 'Beograd':
    case 'Novi Sad':
    case 'Nis':
    case 'Kragujevac':
        result='Srbija';
        break;
    case 'Sarajevo':
    case 'Banja Luka':
        result='BiH';
        break;
    case 'Skoplje':
    case 'Bitolj':
    case 'Tetovo':
        result='Makedonija';
        break;
    case 'Bec':
        result='Austrija';
        break;
    case 'Tirana':
        result='Albanija';
        break;
    default:
        result='Izaberi drugi grad'
        break;
}

console.log(result);

/* Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12. */

a=3;
result='';

switch (a){
    case 1:
    case 2:
    case 12:
        result='Zima';
        break;
    case 3:
    case 4:
    case 5:
        result='Prolece';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Leto';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Jesen';
        break;
    default:
        result='Broj mora biti izmedju 1 i 12'
        break;
}

console.log(result);

/* Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

a='*';
x=6
y=2
result='';

switch (a) {
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '*':
        result = x * y;
        break;
    case '/':
        result = x / y;
        break;
    default:
        result='Nije operacija'
        break;
}

if (result==Infinity){
    console.log('Ne moze nula')
} else if (isNaN(result)){
        console.log('Ne moze nula')
    } else {
        console.log(result)
    }