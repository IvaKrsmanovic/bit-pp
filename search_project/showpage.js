const url = 'https://api.tvmaze.com//search/shows?q=';
window.text = ''
$(document).ready(function () {

    let seasons =''
    let seasonNo = 0;
    let cast = '';
    let showInfo = JSON.parse(window.sessionStorage.getItem('selectedShow'))
    let show = $($(showInfo).get())["0"];
    console.log(show)

    $.ajax({
        url: `https://api.tvmaze.com/shows/${show.id}/seasons`,
        method: "GET",
    }).done(function (response) {
        seasonNo = response.length;
        for (var i =0; i<response.length; i++){
            seasons += `<li>${response[`${i}`].premiereDate} - ${response[`${i}`].endDate}</li>`;
        }
        if (show.status == 'To Be Determined') {
            seasons += `<li>TBD</li>`;
        }

        $.ajax({
            url: `https://api.tvmaze.com/shows/${show.id}/cast`,
            method: "GET",
        }).done(function (response) {
            if (response.length <= 5) {
            for (var i =0; i<response.length; i++){
                cast += `<li>${response[`${i}`].person.name}</li>`;
            }
        } else {
            for (var i = 0; i <6; i++) {
                cast += `<li>${response[`${i}`].person.name}</li>`;
            }
        }
            $('#inputHere').append(`
            <div class="col-12"><h4>${show.name}</h4></div>
            <div class="col-6" id="pic">
              <img src="${show.image.original}" alt="" id="showImg">
            </div>
            <div class="col-6" id="info">
              <div class="title">Seasons (${seasonNo})</div>
              <div>
              <ul>
                ${seasons}
              </ul>
            </div><div class="title">Cast</div><div><ul>${cast}</ul></div></div><div class="row" id="summary">${show.summary}</div>`)
    
        });
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
                $('.results').html(`<ul><a href="">${results.join(' ')}</a></ul>`);

            } else {
                $('.wrapper').removeClass('show');
            }

            $('li').click(function (e) {
                sessionStorage.clear();
                let show = response[$(this).index()].show
                window.sessionStorage.setItem("selectedShow", JSON.stringify(show));


            })

        })
    });

    $('.btn').click(function () {
        sessionStorage.clear();
        location.assign('index.html');
    })
});
