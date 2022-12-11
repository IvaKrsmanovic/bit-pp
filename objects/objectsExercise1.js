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

    for (var i = 0; i<word.length; i++) {
        
    }
}
