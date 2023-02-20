import { Movie, Festival, Program } from "./movie-festival-classes.js"

Array.prototype.hasElement = function (arrElement) {
    var str1 = JSON.stringify(arrElement);

    for (var i = 0; i < this.length; i++) {
        var element = this[i];
        var str2 = JSON.stringify(element);
        if (str1 === str2) {
            return true;
        }
    }

    return false;
}

window.movies = [];
window.programs = [];
window.festivals = [];
window.addedPrograms = [];

$(document).ready(function () {

    $("#createButton").click(function (e) {
        e.preventDefault();

        var movieTitle = $('#title').val();
        var movieLength = $('#length').val();
        var movieGenre = $('#genre').find(":selected").text();

        var movie = new Movie(movieTitle, movieLength, movieGenre);

        var pushMovie = $(`<li>${movie.getData()}</li>`);
        var addOptionMovie = $(`<option> ${movie.getData()} </option>`)

        if (!movieTitle || !movieLength || movieGenre == '-') {
            alert('Please fill out all required data')
        } else if (movies.hasElement(movie)) {
            alert('The movie already exists!')
        } else {
            window.movies.push(movie)
            $("#output").append(pushMovie);
            $("#movieSelect").append(addOptionMovie);
            $('#form')[0].reset();
        }
    });

    $("#createProgram").click(function (e) {
        e.preventDefault();

        var programDate = $('#programDate').val();
        var [yyyy, mm, dd] = programDate.split("-");
        var revDate = `${mm}/${dd}/${yyyy}`;

        var program = new Program(revDate)

        var pushProgram = $(`<li>${revDate}, program duration: TBA </li>`);
        var addOptionProgram = $(`<option> ${revDate} </option>`)

        if (!programDate) {
            alert('Please choose program date')
        } else if (window.programs.hasElement(program)) {
            alert('Program already exists!')
        } else {
            window.programs.push(program);
            $("#programList").append(pushProgram);
            $("#programSelect").append(addOptionProgram);

            $('#form')[0].reset();
        }

    });

    $("#addMovieToProgram").click(function (e) {
        e.preventDefault();

        var selectedProgram = $('#programSelect').find(":selected").text();
        var selectedMovie = $('#movieSelect').find(":selected").text();
        let movieSelectedObj = {}

        for (var i = 0; i < window.movies.length; i++) {
            if (window.movies[i].getData().toString() == selectedMovie.toString().trim()) {
                movieSelectedObj = window.movies[i]
            }
        }

        let addOptionProgram = ''

        for (var i = 0; i < window.programs.length; i++) {
            if (selectedProgram.toString().trim() == window.programs[i].date.toString()) {
                if (window.programs[i].listOfMovies.hasElement(movieSelectedObj)) {
                    alert('Movie already in program!')
                } else {
                    window.programs[i].addMovie(movieSelectedObj)
                    festival = new Festival ();
                    festival.addProgram(window.programs[i])
                    
                    addOptionProgram = $(`<li> ${window.festival[i].getData()} </li>`)
                    if (window.addedPrograms.includes(window.programs[i].date.toString())) {
                        $("#programList").html(addOptionProgram)
                    } else {
                        $("#programList").append(addOptionProgram)
                        window.addedPrograms.push(window.programs[i].date.toString())
                        console.log(window.addedPrograms)
                    }
                }
            }
        }

        // console.log(position);

        // var movieOptionStore = $("#movieSelect option")
        // var movieOptions = [];
        // for (var i = 1; i<movieOptionStore.length; i++) {
        //     var option = movieOptionStore[i].label.split(',')
        //     movieOptions.push(option);
        // }

        // var selectedProgram = $('#programSelect').find(":selected").text();
        // var selectedMovie = $('#movieSelect').find(":selected").text();

        // var festival = new Festival (selectedProgram);
        // var moviesInProgram = [];
        // for (var i = 0; i<festival.listOfMovies.length; i++) {
        //     moviesInProgram.push(festival.listOfMovies[i]);
        // }

        // if (moviesInProgram.includes(selectedMovie.toString())) {
        //     alert('That movie is already in that program!')
        // } else {
        //     festival.listOfMovies.push(selectedMovie.toString());
        //     console.log(festival.listOfMovies)
        // }


    });

});