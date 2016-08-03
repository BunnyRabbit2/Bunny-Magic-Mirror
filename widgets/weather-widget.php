<div id="weather-widget" class="container top-right">
    <div id="weather-widget-current" >

    </div>
    <div id="weather-widget-forecast" >
    
    </div>
</div>

<script type="text/javascript" src="js/weather-widget.js"></script>

<script type="text/javascript">
    weatherWidget.getWeatherInfo(2643044); // Code for margate
    setInterval(weatherWidget.getWeatherInfo, 900000, 2643044);
</script>