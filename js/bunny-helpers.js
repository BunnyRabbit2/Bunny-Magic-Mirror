var bunnyHelpers = {};

bunnyHelpers.kelvinToCelsius = function (value) {
    return Math.round((value - 273.15) * 10) / 10;
}

bunnyHelpers.kelvinToFahrenheit = function (value) {
    return Math.round(kelvinToCelsius(value) * 1.8 + 32);
}

bunnyHelpers.msToMph = function (value) {
    return Math.round(value * 2.236936);
}

bunnyHelpers.getBeaufortScale = function (value) {
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