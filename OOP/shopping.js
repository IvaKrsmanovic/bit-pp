"use strict";
(function () {

    function Product(name, price, expdate) {
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expdate = new Date(expdate);
        this.getInfo = function () {
            return `${this.name.slice(0, 2).toUpperCase()}${this.id}, ${this.name}, ${this.price}`
        }
    }

    var bread = new Product('bread', 3749234.724724, '06-06-2023');
    console.log(bread.getInfo());

    var apple = new Product('apple', 5656.4564856, '01-01-2024')
    var milk = new Product('milk', 5656.4564856, '01-01-2024')
    var rice = new Product('rice', 5656.4564856, '01-01-2024')


    function ShoppingBag() {
        this.shoppingList = [];
        this.addProduct = function (product) {
            if (product.expdate > new Date()) {
                this.shoppingList.push(product);
            }
        }

        this.avgPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.shoppingList.length; i++) {
                sum += parseFloat(this.shoppingList[i].price);
            }

            return (sum / this.shoppingList.length).toFixed(3);
        }

        this.mostExpensive = function () {
            var mostExp = this.shoppingList[0];
            for (var i = 0; i < this.shoppingList.length; i++) {
                if (mostExp.price < this.shoppingList[i].price) {
                    mostExp = this.shoppingList[i];
                }
            }

            return mostExp.getInfo();
        }

        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.shoppingList.length; i++) {
                sum += parseFloat(this.shoppingList[i].price);
            }

            return sum;
        }
    }

    var shoppingBag = new ShoppingBag();
    shoppingBag.addProduct(bread);
    shoppingBag.addProduct(apple);
    shoppingBag.addProduct(milk);
    shoppingBag.addProduct(rice);

    console.log(shoppingBag.shoppingList);
    console.log(shoppingBag.avgPrice());
    console.log(shoppingBag.mostExpensive());
    console.log(shoppingBag.totalPrice());

    function PaymentCard(balance, status, validUntil) {
        this.balance = parseFloat(balance.toFixed(2));
        this.status = status;
        this.validUntil = new Date(validUntil);
    }

    var paymentCard = new PaymentCard(5355.45645, 'active', '01-12-2026');

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (paymentCard.balance >= shoppingBag.totalPrice()) {
            console.log('Approved');
        } else {
            console.log('Denied');
            console.log('Missing ' + (shoppingBag.totalPrice() - paymentCard.balance));
        }
    }

    checkoutAndBuy(shoppingBag, paymentCard);

})();