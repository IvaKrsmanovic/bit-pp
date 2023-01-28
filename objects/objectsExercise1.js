// 1. Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:
// {
// 'product': 'Milk',
// 'quantity': 1,
// 'price': 1.50
// }

function getProduct(name, quantity, price) {
    var product = {
        name,
        quantity,
        price
    }
    
    return product;
}

function getPrice(list) {
    var totalPrice = 0;
    list.forEach((product) => {
        totalPrice += (product.price * product.quantity)
    })
    return totalPrice
}

var groceries = [getProduct('milk', 2, 170), getProduct('bread', 3, 80), getProduct('butter', 1, 300)]
console.log(getPrice(groceries));

// 2. You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns 'The most expensive
// one is the {name of jewelry piece}'.
// Example:
// mostExpensive([{name:'DiamondEarings', price: 980}, {name:'Gold watch', price:250},
// …])
// - The most expensive one is the diamond Ring.

// function getJewelry(name, price) {
//     var product = {
//         name,
//         price
//     }
    
//     return product;
// }

function getPrice(list) {
    var mostExpensiveItem = list[0].name
    var mostExpensive = list[0].price;
    for (var i = 0; i<list.length; i++) {
        if (list[i].price > mostExpensive) {
            // console.log(product.price);
            mostExpensiveItem = list[i].name;
            continue;
        }
    }
    
    return mostExpensiveItem
}

// console.log(getPrice([getJewelry('ring', 17000), getJewelry('braclet', 20000)]));

console.log(getPrice([{name:'DiamondEarings', price: 980}, {name:'Gold watch', price:250}]));

// 3. Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.
// Examples:
// mapLetters('dodo') ➞ { d: [0, 2], o: [1, 3] }
// mapLetters('froggy') ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters('grapes') ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(word) {
    const map = {};
   for(let i = 0; i < word.length; i++){
      if(map.hasOwnProperty(word[i])){
         map[word[i]] = map[word[i]].concat(i);
      }else{
         map[word[i]] = [i];
      };
   };
   return map;
}

console.log(mapLetters('dodo'));

function calculateTotalPrice(groceries = []) {
    if (!groceries || groceries.length == 0) {
        return 0;
    }

    var result = 0;
    for (var i = 0; i < groceries.length; i++) {
        var element = groceries[i];
        if (element && element.price && element.price > 0 && element.quantity && element.quantity > 0) {
            result += element.price * element.quantity;
        }
    }

    return result;
}

var groceries = [{ product: 'Milk', quantity: 1, price: 1.5 }, { product: 'Milk', quantity: 2, price: 3 }, { product: 'Milk', quantity: 3, price: 1.5 }]
console.log(calculateTotalPrice(groceries));
// Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},...])
function mostExpensive(jewelry = []) {
    if (!jewelry || jewelry.length == 0) {
        return 'Empty'
    }

    var name = '';
    var maxPrice = 0;
    for (var i = 0; i < jewelry.length; i++) {
        var element = jewelry[i];
        if (element.price > maxPrice) {
            maxPrice = element.price;
            name = element.name;
        }
    }

    return name;
}

console.log(mostExpensive([{ name: 'DiamondEarings', price: 980 }, { name: 'Gold watch', price: 250 }
]))

// Given a word, create an object that stores the indexes of each letter in an array
function mapLetters(str = '') {
    if (!str || str.length == 0) {
        return '';
    }

    var result = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (result['' + letter]) {
            continue;
        }
        var newArray = [i];
        for (var j = 0; j < str.length; j++) {
            if (letter == str[j] && i != j) {
                newArray.push(j);
            }
        }

        result['' + letter] = newArray;
    }

    return result;
}

console.log(mapLetters('dodo'));

function mapLetters2(str = '') {
    if (!str || str.length == 0) {
        return '';
    }

    var result = {};
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if (result['' + letter]) {
            result['' + letter].push(i);
        } else {
            var newArray = [i]
            result['' + letter] = newArray;
        }
    }

    return result;
}

console.log(mapLetters2('dodo'));

// who cursed the most in the fight between you and your spouse?
function determineWhoCursedTheMost(input = []) {
    if (!input || input.length == 0) {
        return '';
    }

    var sumA = 0;
    var sumB = 0;

    for (var i = 0; i < input.length; i++) {
        sumA += input[i].me;
        sumB += input[i].spouse;
    }

    if (sumA > sumB) {
        return 'ME';
    } else if (sumA < sumB) {
        return 'SPOUSE';
    }

    return 'DRAW';
}

console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 40, spouse: 5 }, { me: 9, spouse: 10 }, { me: 9, spouse: 10 }]));
console.log(determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55 }]));


//RGB TO HEX
function checkColor(color = 0) {
    return color < 0 || color > 255
}

function rgbToHex(color = {}) {
    if (!color || checkColor(color.red) || checkColor(color.green) || checkColor(color.blue)) {
        return 'INVALID'
    }

    var red = color.red.toString(16).padStart(2, '0');
    var green = color.green.toString(16).padStart(2, '0');
    var blue = color.blue.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}

function hexToRGB(str = '') {
    if (!str || !str.startsWith('#') || str.length != 7) {
        return null;
    }

    var colorString = str.split('#')[1];
    var red = parseInt(colorString.substring(0, 2), 16);
    var green = parseInt(colorString.substring(2, 4), 16);
    var blue = parseInt(colorString.substring(4), 16);

    return { red, green, blue };
}

var hex = rgbToHex({ red: 0, green: 128, blue: 192 });
console.log(hex);
console.log(hexToRGB(hex));

// make change
function makeChange(change = 0) {
    if (change < 0) {
        return null;
    }

    var map = {};
    var mod_q = change % 25;
    map['q'] = (change - mod_q) / 25

    var mod_d = mod_q % 10;
    map['d'] = (mod_q - mod_d) / 10;

    var mod_n = mod_d % 5;
    map['n'] = (mod_d - mod_n) / 5;
    map['p'] = mod_n;

    return map;
}

console.log(makeChange(51));

function avgNotes(input = []) {
    if (!input || input.length == 0) {
        return null;
    }

    var result = [];
    for (var i = 0; i < input.length; i++) {
        var item = input[i];
        var newObject = { name: item.name }
        var sum = 0;
        for (var j = 0; j < item.notes.length; j++) {
            sum += item.notes[j];
        }

        var avg = parseFloat(sum / item.notes.length).toFixed(2);
        newObject['avgNote'] = avg;
        result.push(newObject);
    }

    return result;
}

console.log(avgNotes([{ name: 'John', notes: [4, 3, 1, 8, 18] }, { name: 'Mark', notes: [3, 3, 2, 8] }]));

function getBestStudent(input = []) {
    if (!input || input.length == 0) {
        return null;
    }

    var maxAverage = 0;
    var name;
    for (var i = 0; i < input.length; i++) {
        var item = input[i];
        var avgGrade = 0;
        var sum = 0;
        for (var j = 0; j < item.grades.length; j++) {
            sum += item.grades[j];
        }

        avgGrade = parseFloat(sum / item.grades.length).toFixed(2);
        if (avgGrade > maxAverage) {
            maxAverage = avgGrade;
            name = item.name;
        }
    }

    return { name: name, averageGrade: maxAverage };
}

var student = getBestStudent([{ name: 'John', grades: [100, 90, 80] }, { name: 'Mark', grades: [100, 95, 80] }])
var studentString = student.toString();
console.log(student);
console.log(studentString);