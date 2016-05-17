
var teamIDs = [19, 6] // populate this with the correct ids for the teams you want

function populateNhlDiv() {
    var useDebugDates = false;

    var today = new Date();

    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    var dayBeforYesterday = new Date();
    dayBeforYesterday.setDate(yesterday.getDate() - 1);

    if (useDebugDates) {
        today = new Date("2016-02-15");
        yesterday = new Date("2016-02-14");
        dayBeforYesterday = new Date("2016-02-13");
    }

    var startDate = "";
    var endDate = "";

    // 8am is the switch point into the next day. Pretty much guarantees all games are done
    if (today.getHours() > 8) {
        startDate = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();
        endDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    }
    else {
        startDate = dayBeforYesterday.getFullYear() + "-" + (dayBeforYesterday.getMonth() + 1) + "-" + dayBeforYesterday.getDate();
        endDate = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();
    }

    // Add debug dates in a sec

    $.getJSON("https://statsapi.web.nhl.com/api/v1/schedule?startDate=" + startDate + "&endDate=" + endDate, function (data) {
        var html = "";

        var newStart = new Date(startDate);
        var newEnd = new Date(endDate);

        // Yesterdays Games
        if (data.dates[0].games.length > 0) {
            html += '<div class="row"><div class="col-md-12">Games for ' + newStart.getDate() + '/' + (newStart.getMonth() + 1) + '</div></div>';
            var noGames = true;

            $.each(data.dates[0].games, function (i, game) {
                for (i = 0; i < teamIDs.length; i++) {
                    if (game.teams.away.team.id == teamIDs[i] || game.teams.home.team.id == teamIDs[i]) {
                        // We have a match!
                        html += '<div class="row nhl-game"><div class="col-md-12">';
                        
                        html += '<div class="row"><div class="col-md-12"><h4>' + game.status.detailedState + '</h4></div></div>'
                        html += '<div class="row"><div class="col-md-4"><p>' + nhlTeamNames[game.teams.away.team.id].abbreviation + '</p></div><div class="col-md-4"><p> @ </p></div><div class="col-md-4"><p>' + nhlTeamNames[game.teams.home.team.id].abbreviation + '</p></div></div>'
                        html += '<div class="row"><div class="col-md-4"><p>' + game.teams.away.score + '</p></div><div class="col-md-4"><p> - </p></div><div class="col-md-4"><p>' + game.teams.home.score + '</p></div></div>'

                        noGames = false;

                        html += '</div></div>';
                    }
                }
            });

            if (noGames) {
                html += '<div class="row nhl-game"><div class="col-md-12"><h4>No Games For Chosen Teams</h4></div></div>';
            }
        }

        // Todays Games
        if (data.dates[1].games.length > 0) {
            html += '<div class="row"><div class="col-md-12">Games for ' + newEnd.getDate() + '/' + (newEnd.getMonth() + 1) + '</div></div>';

            var noGames = true;

            $.each(data.dates[1].games, function (i, game) {
                for (i = 0; i < teamIDs.length; i++) {
                    if (game.teams.away.team.id == teamIDs[i] || game.teams.home.team.id == teamIDs[i]) {
                        // We have a match!
                        html += '<div class="row nhl-game"><div class="col-md-12">';
                        
                        html += '<div class="row"><div class="col-md-12"><h4>' + game.status.detailedState + '</h4></div></div>'
                        html += '<div class="row"><div class="col-md-4"><p>' + nhlTeamNames[game.teams.away.team.id].abbreviation + '</p></div><div class="col-md-4"><p> @ </p></div><div class="col-md-4"><p>' + nhlTeamNames[game.teams.home.team.id].abbreviation + '</p></div></div>'
                        if (game.status.statusCode > 1) {
                            html += '<div class="row"><div class="col-md-4"><p>' + game.teams.away.score + '</p></div><div class="col-md-4"><p> - </p></div><div class="col-md-4"><p>' + game.teams.home.score + '</p></div></div>'
                        }

                        noGames = false;
                        
                        html += '</div></div>';
                    }
                }
            });

            if (noGames) {
                html += '<div class="row nhl-game"><div class="col-md-12"><h4>No Games For Chosen Teams</h4></div></div>';
            }
        }

        $("#nhl-widget").html(html);
    });
}