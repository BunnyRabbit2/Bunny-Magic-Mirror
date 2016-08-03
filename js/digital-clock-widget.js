clockWidget = {};

clockWidget.twentyFourHour = false;

clockWidget.createTimeString = function() {

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeText = "";
    var meridiem = "AM";

    if (clockWidget.twentyFourHour) {
        timeText = clockWidget.clockAddZeros(hours) + ":" + clockWidget.clockAddZeros(minutes) + ":" + clockWidget.clockAddZeros(seconds);
    }
    else {
        // Convert from 24 hour to 12 hour format
        if (hours > 11) {
            hours = hours - 12;
            meridiem = "PM";
        }

        // 0 AM and 0 PM should read as 12
        if (hours === 0) {
            hours = 12;
        }

        timeText = clockWidget.clockAddZeros(hours) + ":" + clockWidget.clockAddZeros(minutes) + ":" + clockWidget.clockAddZeros(seconds) + " " + meridiem;
    }
    
    return timeText; 
}

clockWidget.clockAddZeros = function(numberIn) {
    if (numberIn < 10) {
        numberIn = "0" + numberIn;
    }

    return numberIn;
}

clockWidget.createDateString = function() {
    var date = new Date();
    
    var dateString = "";
    
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    dateString += weekday[date.getDay()] + ", ";
    dateString += date.getDate() + " ";
    dateString += monthName[date.getMonth()] + " ";
    dateString += date.getFullYear();
    
    return dateString;
}

clockWidget.displayTime = function(divID, twentyFourHourIn) {
    
    clockWidget.twentyFourHour = twentyFourHourIn;
    var displayDate = true;
    var html = '';
    
    html += '<div class="row">';
    html += '<div class="col-md-12 time">' + clockWidget.createTimeString() + '</div>';
    html += '</div>';
    
    if(displayDate) {
        html += '<div class="row"><h3>';
        html += clockWidget.createDateString();
        html += '</h3></div>';
    }
    
    $(divID).html(html);
}