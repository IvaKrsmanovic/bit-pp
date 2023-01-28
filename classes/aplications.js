// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons)
// like which increases the number of stars by one
// showStars which prints out the number of stars 

class Aplications {
    constructor () {
        
    }
}

class WebApp {
    constructor(name, url, technologies = [], licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
    }

    getData() {
        return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`
    }

    reactBased() {
        var isReact = false;
        for (var i = 0; i < this.technologies.length; i++) {
            if (/react/i.test(this.technologies[i]) == true) {
                isReact = true;
                break;
            }
        }

        if (isReact == true) {
            return `One of the used technologies is React`
        }
        else {
            return `None of the used technologies is React`;
        }
    }

}

var webapp = new WebApp('jj', 'hh', ['Whatevs'], 'yes', '4')
console.log(webapp.reactBased());

class MobileApp {
    constructor(name, platforms = [], licence, stars) {
        this.name = name;
        this.platforms = platforms;
        this.licence = licence;
        this.stars = stars;
    }

    getData() {
        return `${this.name}, ${this.platforms}, ${this.licence}, ${this.stars}`
    }

    forAndroid() {
        var isForAndroid = false;
        for (var i = 0; i < this.platforms.length; i++) {
            if (/android/i.test(this.platforms[i]) == true) {
                isForAndroid = true;
                break;
            }
        }

        if (isForAndroid == true) {
            return `One of the platforms is Android`
        }
        else {
            return `None of the platforms is Android`;
        }
    }
}

