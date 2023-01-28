
// Date, program length from all movies
// First movie title, length and genre
// Second movie title, length and genre
// Third movie title, length and genre
// Fourth movie name and length and genre

"use strict";
(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return this.name.slice(0, 1).toUpperCase() + this.name.slice(-1).toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = parseInt(length);
        this.getData = function () {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`
        }
    }

    var comedy = new Genre('comedy')
    var drama = new Genre('drama')
    var movie1 = new Movie('Knives Out', comedy, '130min')
    var movie2 = new Movie('Glass Onion', drama, '150min')

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];

        this.addMovie = function (movie) {
            return this.listOfMovies.push(movie);
        }

        this.totalLength = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
            sum += parseInt(this.listOfMovies[i].length);
        }
        return sum;
    }

        this.movies = function () {
            var arrayMovies = [];
            for (var i = 0; i < this.listOfMovies.length; i++) {
                arrayMovies.push(this.listOfMovies[i].getData())
            }

            return arrayMovies;
        }

        this.getData = function () {
            return `${this.date.toDateString()}, program duration ${this.totalLength()}min, ${this.movies()}`
        }
    }

    var program1 = new Program('01-01-2023');
    var program2 = new Program('01-02-2023');
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie1);
    program2.addMovie(movie2);

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }

        this.movieCount =  function () {
            var count = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                var program = this.listOfPrograms[i];
                count+= program.listOfMovies.length;
            }

            return count;
        }

        this.info = function () {
            var programArray = [];
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                programArray.push(this.listOfPrograms[i].getData());
            }

            return programArray
        }

        this.getData = function () {
            return `${this.name} festival has ${this.movieCount()} movie titles ${this.info()}`
        }
    }

    var festival1 = new Festival ('Exit');
    festival1.addProgram(program1);
    festival1.addProgram(program2);
    console.log(festival1.getData());

})();