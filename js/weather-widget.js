function kelvinToCelsius(value) {
    return Math.round((value - 273.15) * 10) / 10;
}

function kelvinToFahrenheit(value) {
    return Math.round(kelvinToCelsius(value) * 1.8 + 32);
}

function msToMph(value) {
    return Math.round(value * 2.236936);
}

function getBeaufortScale(value) {
    if (value < 4) return 1;
    if (value < 8) return 2;
    if (value < 13) return 3;
    if (value < 19) return 4;
    if (value < 25) return 5;
    if (value < 32) return 6;
    if (value < 39) return 7;
    if (value < 47) return 8;
    if (value < 55) return 9;
    if (value < 64) return 10;
    return 11;
}

function getWeatherIcon(code, icon) {
    var iconStyle = "";
    var testChar = icon.charAt(2);

    if (testChar == "n") {
        iconStyle = "wi-owm-night-" + code;
    }
    else {
        iconStyle = "wi-owm-day-" + code;
    }

    return iconStyle;
}

function getWeatherInfo() {
    var deg = "C"; // Options are "F" or "C"
    var speed = "MPH"; // Options are "MPH"" or "m/s"
    var useBeaufort = false;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + G_weatherCityID + "&APPID=" + G_openWeatherMapKey, function (data) {
        var html = "";

        var speedString = "";
        if (speed == "MPH") {
            speedString = msToMph(data.wind.speed) + " " + speed;
        }
        else if (speed == "m/s") {
            speedString = data.wind.speed + " " + speed;
        }

        var tempString = "";
        if (deg == "C") {
            tempString = kelvinToCelsius(data.main.temp) + "&deg;" + deg;
        }
        else if (deg == "F") {
            tempString = kelvinToFahrenheit(data.main.temp) + "&deg;" + deg;
        }

        html += '<div class="row">';
        html += '<div class="col-md-12"><h3>' + data.name + ', ' + data.sys.country + '</div>';
        html += '</div>';
        html += '<div class="row">';
        html += '<div class="col-md-6"><i class="weather-icon wi ' + getWeatherIcon(data.weather[0].id, data.weather[0].icon) + '"></i></div>';
        html += '<div class="vert-align-mid col-md-6"><i class="weather-icon-wind wi wi-wind from-' + data.wind.deg + '-deg"></i><h3>' + speedString + '</h3></div>';
        html += '</div>';
        html += '<div class="row text-uppercase">';
        html += '<div class="col-md-6"><h3>' + data.weather[0].main + '</br><small>' + data.weather[0].description + '</small></h3></div>';
        html += '<div class="col-md-6"><h1>' + tempString + '</h1></div>';
        html += '</div>';

        $("#weather-widget-current").html(html);
    });

    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=" + G_weatherCityID + "&APPID=" + G_openWeatherMapKey, function (data) {
        var html = "";

        html += '<div class="row">';
        for (i = 0; i < 3; i++) {
            var tempString = "";
            if (deg == "C") {
                tempString = kelvinToCelsius(data.list[i].main.temp) + "&deg;" + deg;
            }
            else if (deg == "F") {
                tempString = kelvinToFahrenheit(data.list[i].main.temp) + "&deg;" + deg;
            }

            var iconString = getWeatherIcon(data.list[i].weather[0].id, data.list[i].weather[0].icon);

            var twentyFourHour = false;
            var fcTime = new Date(data.list[i].dt * 1000);

            html += '<div class="col-md-4 weather-forecast-div">';
            html += '<div class="row">';
            html += '<div class="col-md-6"><h4>' + getForecastTimeString (fcTime.getHours(), twentyFourHour) + '</h4></div>';
            // html += '</div>';
            // html += '<div class="row">';
            html += '<div class="col-md-6"><i class="weather-icon-forecast wi ' + iconString + '"></i></div>';
            html += '</div>';
            html += '<div class="row">';
            html += '<div class="col-md-6"><h4>' + tempString + '</h4></div>';
            // html += '</div>';
            // html += '<div class="row">';
            html += '<div class="col-md-6"><h4>' + data.list[i].weather[0].main + '</h4></div>';
            html += '</div>';
            html += '</div>';

        }
        html += '</div>';

        $("#weather-widget-forecast").html(html);
    });
}

function getForecastTimeString (hoursIn, twentyFourHour) {
    var hoursText = "";

    if(twentyFourHour) {
        hoursText += hoursIn + ":00";
    }
    else {
        var meridiem = "am";

        if (hoursIn > 11) {
            hoursIn = hoursIn - 12;
            meridiem = "pm";
        }
        
        if (hoursIn === 0) {
            hoursIn = 12;
        }

        hoursText += hoursIn + meridiem;
    }

    return hoursText;
}