function kelvinToCelsius(value) {
    return value - 273.15;
}

function kelvinToFahrenheit(value) {
    return kelvinToCelsius(value) * 1.8 + 32;
}
    
function getWeatherInfo()
{
    var deg = "C";
    
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather?id=" + G_weatherCityID + "&APPID=" + G_openWeatherMapKey, function( data ) {
        var html = "";
        
        html += '<h1>' + data.weather[0].main + '</h1>';
        html += '<h3>' + kelvinToCelsius(data.main.temp) + deg + '</h3>';
        
        $("#weather-widget").html(html);
    });
}