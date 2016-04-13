<div id="digital-clock-widget" class="debug-border widget-padding">
</div>

<script type="text/javascript">
    centerDiv("digital-clock-widget");
    
    var twentyFourHour = false;
    
    function displayTime() {
        var clockDiv = document.getElementById("digital-clock-widget");
        
        var currentTime = new Date();
        
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        
        var timeText = "";
        var meridiem = "AM";
        
        if(twentyFourHour) {
            timeText = clockAddZeros(hours) + ":" + clockAddZeros(minutes) + ":" + clockAddZeros(seconds);
        }
        else {
            // Convert from 24 hour to 12 hour format
            if (hours > 12) {
                hours = hours - 12;
                meridiem = "PM";
            }

            // 0 AM and 0 PM should read as 12
            if (hours === 0) {
                hours = 12;    
            }
            
            timeText = clockAddZeros(hours) + ":" + clockAddZeros(minutes) + ":" + clockAddZeros(seconds) + " " + meridiem;
        }
        
        clockDiv.innerText = timeText;
    }
    
    function clockAddZeros(numberIn)
    {
        if (numberIn < 10) {
            numberIn = "0" + numberIn;
        }
        
        return numberIn;
    }
    
    setInterval(displayTime, 1000);
</script>