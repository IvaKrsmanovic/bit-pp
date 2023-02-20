const url = 'https://api.tvmaze.com//search/shows?q=';
window.fiftyShows = [];

$(document).ready(function () {

    for (var i = 1; i <= 50; i++) {
        if (urlExists(`http://api.tvmaze.com/shows/${i}`)) {
        $.ajax({
            url: `http://api.tvmaze.com/shows/${i}`,
            method: "GET",
        }).done(function (response) {
            window.fiftyShows.push(response)
            $('.row').append(`
                <div class="col-4">
                <figure>
                <img src=${response.image.medium} alt="" >
                <a href="" class="tvshow"><figcaption>${response.name}</figcaption></a>
                </figure>
                </div>`)

        }).fail(function (response) {
            console.log(response)
        })
    }
    else {
        continue;
    }
} 

    $('.row').click(function (e) {
        e.preventDefault();
        var clickedShow = $(e.target).text();
        var result = window.fiftyShows.find(obj => {
            return obj.name === clickedShow
        })

        window.sessionStorage.setItem("selectedShow", JSON.stringify(result));
        location.assign('showpage.html');

    });


    $('#search').keyup(function () {

        var searchInput = $("#search").val();
        let results = [];

        $.ajax({
            url: `${url}${searchInput}`,
            method: "GET",
        }).done(function (response) {

            if (searchInput.length) {

                for (var i = 0; i < 10; i++) {
                    results.push(`<li>${response[i].show.name}</li>`)
                }

                $('.wrapper').addClass('show');
                $('.results').html(`<ul><a href="" onclick="goToShowPage()">${results.join(' ')}</a></ul>`);

            } else {
                $('.wrapper').removeClass('show');
            }

            $('li').click(function (e) {
                e.preventDefault();
                let show = response[$(this).index()].show
                window.sessionStorage.setItem("selectedShow", JSON.stringify(show));


            })

        })
    });
});

function goToShowPage() {
    location.assign('showpage.html');
}

function urlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;
    else
        return false;
}