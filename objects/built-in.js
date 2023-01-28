// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicateElements (array = []) {
    if (!array || array.length<=0) {
        return null;
    }

    newArray = array.concat(array).sort();

    return newArray;
}

console.log(duplicateElements([2, 4, 7, 11, -2, 1]))

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicates(array) {
    var unique = [];
    for(i=0; i < array.length; i++){  
        if(unique.indexOf(array[i]) === -1) {  
            unique.push(array[i]);  
        }  
    }
    return unique.sort(function(a, b){return a-b});
}

console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// 3. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function checkElements (array = []) {
    if (!array || array.length == 0) {
        return null;
    }

    if (array.length % 2 != 0) {
        return true;
    }

    return false;
}

console.log(checkElements([1, 2, 9, 2, 1]));

// Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function countElements (array = []) {
    if (!array || array.length==0) {
        return null;
    }

    // var newArray = array.sort(function(a, b){return a-b});
    var middle = array[Math.floor(array.length / 2)];
    var count = 0;
    if (array.length % 2 != 0) {
        for (var i = 0; i<array.length; i++) {
            if (array[i] < middle) {
                count++;
            }
        }
    
    return count;
    }

    return `Error`

}

console.log(countElements([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function minimum(array = []) {
    if (!array || array.length==0) {
        return null;
    }

    var min = Math.min.apply(null, array)
    var position = array.lastIndexOf(min);

    return { minValue: min, minLastIndex: position }
}

console.log(minimum([1, 4, -2, 11, 8, 1, -2, 3]));

// Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function isKeyInArray (array = [], key) {
    for (var i = 0; i< array.length; i++) {
        if (array.find(item => item[i] == key)) {
            return true;
        }

        return false;
    }
}

function searchCount (array = [], key) {
    if (!array || array.length==0) {
        return null;
    }

    function condition(value) {
            return value >= key;
          }

      return array.filter(condition);
}


console.log(searchCount([2, 3, 8, -2, 11, 4], 6));

// Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: ['JavaScript', 'Programming', 'fun', 'product']
// Output: ['Programming', 'product']

function filterItems(array, query) {
    return array.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(['JavaScript', 'Programming', 'fun', 'product'], 'PRO'));

// Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: 'apples', price: 100},
// {name: 'milk', price: 80},
// {name:'bananas', price: 150}

// // b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

function shoppingList (list = []) {
    var totalPrice = list.reduce((a, b) =>a + b.price, 0)
    var average = (totalPrice / list.length).toFixed(3);
    var max = Math.max.apply(Math, list.map(function(o) { return (o.price); }))
    
    return { totalPrice: totalPrice, averagePrice: average, maxPrice: max, mostExpensive: product}
}


console.log(shoppingList([{name: 'apples', price: 100},{name: 'milk', price: 80},{name:'bananas', price: 150}]));
