class Calculator {
    constructor(string) {
        this.string = string;
    }

    getValue() {
        var numberPattern = /\d+/g;
        var array = this.string.match(numberPattern);
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push(Number(array[i]));
        }
        return newArray[0];
    }

    operation() {
        var numberPattern = /\d+/g;
        var array = this.string.match(numberPattern);
        var numbers = [];
        for (var i = 0; i < array.length; i++) {
            numbers.push(Number(array[i]));
        }

        var all = this.string.split(' ');
        var operator = all.filter(x => !array.includes(x));

        var output;
        if (operator.length == 0) {
            if (numbers[2]) {
                output = numbers[2];
            }
            else {
                output = 'Invalid input'
            }
        }
        else if (operator[0].match(/[DUP]/)) {
            output = numbers[0] * 2;
        }
        else {
            if (operator[0].match(/[+]/)) {
                output = numbers[0] + numbers[1];
            } else if (operator[0].match(/[-]/)) {
                output = numbers[0] - numbers[1];
            } else if (operator[0].match(/[*]/)) {
                output = numbers[0] * numbers[1];
            } else if (operator[0].match(/[/]/)) {
                output = numbers[0] / numbers[1];
            } else if (operator[0].match(/[a-z]/i)) {
                output = 'Incorrect instructions'
            }
        }
        return output;
    }
}

var stackCalc = new Calculator('5 2 i');
console.log(stackCalc.operation());

// coffee shop
// f) drinksOnly: returns only the item names of type drink from the menu.
// g) foodOnly: returns only the item names of type food from the menu.

class CoffeeShop {
    constructor(name) {
        this.name = name;
        this.order = [];
        this.menu = [{ name: 'Iced Coffee', type: 'Drink', price: '2.50' }, { name: 'Coffee', type: 'Drink', price: '1.50' },
        { name: 'Water', type: 'Drink', price: '1.00' }, { name: 'French Toast', type: 'Food', price: '4.50' },
        { name: 'Pancakes', type: 'Food', price: '5.00' }]
    }

    addOrder(item) {
        var items = [];
        for (var i = 0; i < this.menu.length; i++) {
            items.push(this.menu[i].name);
        }
        if (items.includes(item)) {
            this.order.push(item);
        } else {
            console.log('This item is currently unavailable');
        }
    }

    fulfillOrder() {
        if (this.order.length > 0) {
            console.log(`The ${this.order[0].toLowerCase()} is ready!`)
        } else if (this.order.length == 0) {
            console.log(`All orders have been fulfilled!`)
        }

        return this.order.shift();
    }

    dueAmount() {
        var sum = 0;
        for (var i = 0; i < this.order.length; i++) {
            for (var j = 0; j < this.menu.length; j++) {
                if (this.menu[j].name == this.order[i]) {
                    sum += Number(this.menu[j].price);
                }
            }
        }

        return sum.toFixed(2);
    }

    cheapestItem() {
        var prod = this.menu[0].name;
        var cheapest = Number(this.menu[0].price);
        for (var i = 0; i < this.menu.length; i++) {
            if (Number(this.menu[i].price) < cheapest) {
                cheapest = Number(this.menu[i].price);
                prod = this.menu[i].name
            }
        }

        return prod;
    }

    drinksOnly() {
        var drinks = [];
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type == 'Drink') {
                drinks.push(this.menu[i].name)
            }
        }

        return drinks;
    }

    foodOnly() {
        var food = [];
        for (var i = 0; i < this.menu.length; i++) {
            if (this.menu[i].type == 'Food') {
                food.push(this.menu[i].name)
            }
        }

        return food;
    }
}



var tcf = new CoffeeShop('Angulo');
tcf.addOrder('French Toast');
tcf.addOrder('Coffee');

console.log(tcf.dueAmount());
console.log(tcf.cheapestItem());
console.log(tcf.drinksOnly());
console.log(tcf.foodOnly());