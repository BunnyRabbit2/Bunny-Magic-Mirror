complimentWidget = {};

complimentWidget.compliments = [];
complimentWidget.insults = [];
complimentWidget.complimentsReady = false;
complimentWidget.insultsReady = false;
complimentWidget.displayInsults = true;

complimentWidget.loadCompliments = function () {

    $.get('raw/insults.txt', function (data) {
        if (complimentWidget.insults.length == 0) {
            complimentWidget.insults = data.split('\n');
            complimentWidget.insultsReady = true;
        }
    });

    $.get('raw/compliments.txt', function (data) {
        if (complimentWidget.compliments.length == 0) {
            complimentWidget.compliments = data.split('\n');
            complimentWidget.complimentsReady = true;
        }
    });


}

complimentWidget.setCompliment = function (complimentDiv, displayInsultsIn) {
    complimentWidget.displayInsults = displayInsultsIn;

    complimentWidget.loadCompliments();

    var html = '<h1>';

    if (Math.floor(Math.random() * 100) == 1 && complimentWidget.displayInsults) {
        if (complimentWidget.insultsReady) {
            html += complimentWidget.insults[Math.floor(Math.random() * complimentWidget.insults.length)];
        }
        else {
            setTimeout(complimentWidget.setCompliment, 1000, complimentDiv, displayInsultsIn);
        }
    }
    else {
        if (complimentWidget.complimentsReady) {
            html += complimentWidget.compliments[Math.floor(Math.random() * complimentWidget.compliments.length)];
        }
        else {
            setTimeout(complimentWidget.setCompliment, 1000, complimentDiv, displayInsultsIn);
        }
    }

    html += '</h1>';

    if (complimentDiv != null) {
        $(complimentDiv).html(html);

        centerDiv(complimentDiv);
    }
}