// 1. 
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method 
// should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like 
// "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!

class Car {
    constructor(brand, model, motion) {
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }

    checkMotion() {
        if (this.motion == 0) {
            return('The car is not in motion')
        } else if (this.motion > 0) {
            return('The car is in motion')
        } else if (this.motion < 0) {
            return('Incorrect input')
        }
    }

    accelerate(num) {
        this.motion += num;
    }

    brake(num) {
        if (this.motion >= num) {
            this.motion -= num;
        } else {
            this.motion = 0;
        }
    }

    stop() {
        this.motion = 0;
    }

    status() {
        if (this.motion > 0) {
            console.log(`${this.brand} ${this.model} is moving at ${this.motion}kmh, ${this.checkMotion().toLowerCase()}.`)
        } else {
            console.log(`${this.brand} ${this.model}, ${(this.checkMotion()).toLowerCase()}`)
        }
    }
}

var car = new Car ('Ford', 'Mondeo', 150);
car.status();

// 2.
// a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. 
// Volume should be 50 by default.
// b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
// f) Create a TV object and test it!

class TV {
    constructor (brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVolume (num) {
        if (this.volume + num < 100) {
            this.volume += num;
        } else {
            this.volume = 100;
        }
    }

    decreaseVolume (num) {
        if (this.volume >= num) {
            this.volume -= num;
        } else {
            this.volume = 0;
        }
    }

    setChannel (chnl) {
        if (chnl <= 50 && chnl >= 1) {
            this.channel = chnl;
        } else {
            console.log('Invalid channel number!')
        }
    }

    reset () {
        this.channel = 1;
        this.volume = 50;
    }

    status () {
        console.log (`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    }
}

var tv = new TV ('Fox');

tv.increaseVolume(60);
tv.decreaseVolume(20);
tv.status();
