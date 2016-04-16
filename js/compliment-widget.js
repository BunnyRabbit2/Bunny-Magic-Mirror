var compliments = [];
var insults = [];
var complimentsReady = false;
var insultsReady = false;
var displayInsults = true;
var complimentDiv = document.getElementById("compliment-widget");

function loadCompliments() {

    $.get('raw/insults.txt', function (data) {
        insults = data.split('\n');
        insultsReady = true;
    });

    $.get('raw/compliments.txt', function (data) {
        compliments = data.split('\n');
        complimentsReady = true;
    });

}

function setCompliment() {
    loadCompliments();
    
    var html = '<h1>';
    
    if (Math.floor(Math.random() * 100) == 1 && displayInsults) {
        if (insultsReady) {
            html += insults[Math.floor(Math.random() * insults.length)];
        }
        else {
            setTimeout(setCompliment, 1000);
        }
    }
    else {
        if (complimentsReady) {
            html += compliments[Math.floor(Math.random() * compliments.length)];
        }
        else {
            setTimeout(setCompliment, 1000);
        }
    }
    
    html += '</h1>';
    
    complimentDiv.innerHTML = html;
    
    centerDiv("compliment-widget");
}