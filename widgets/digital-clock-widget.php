<div id="digital-clock-widget" class="widget-padding top-left">
</div>

<script type="text/javascript" src="js/digital-clock-widget.js"></script>

<script type="text/javascript">
    clockWidget.twentyFourHour = false;

    clockWidget.displayTime("#digital-clock-widget");
    setInterval(clockWidget.displayTime, 1000, "#digital-clock-widget");
</script>