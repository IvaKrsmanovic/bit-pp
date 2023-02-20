export class Movie {
    constructor (title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    genreAbb () {
        return this.genre.slice(0, 1).toUpperCase() + this.genre.slice(-1).toUpperCase();
    }

    getData() {
        return `${this.title}, ${this.length} min, ${this.genreAbb()}`
    }
}

export class Program {
    constructor (date) {
        this.date = date;
        this.listOfMovies = [];
    }

    programLength() {
        var programLength = 0;

        this.listOfMovies.forEach(function (movie) {
            programLength += Number(movie.length);
        }, this);

        return programLength;
    }

    addMovie(movie) {
        this.listOfMovies.push(movie);        
    }

    getData() {
        var movies = this.listOfMovies;
        var programDuration = this.programLength();
    
        var outputStr = this.date + ", program duration " + programDuration + "min \n";
    
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            outputStr += `\t\t` + movie.getData() + `\n`;
        }
    
        return outputStr;
    }
}

export class Festival {
    constructor () {
        this.listOfPrograms = [];
    }

    addProgram(program) {
        this.listOfPrograms.push(program);        
    }

    getMovieCount () {
    var programs = this.listOfPrograms;
    var moviesCount = 0;

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        moviesCount += program.listOfMovies.length;
    }

    return moviesCount;
    }

    getData () {
        var programs = this.listOfPrograms;
        var totalMovieCount = this.getMoviesCount();
    
        var outputStr = totalMovieCount + " movie titles\n"
    
        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            outputStr += "\t" + program.getData();
        }
    
        return outputStr;   
    }

}