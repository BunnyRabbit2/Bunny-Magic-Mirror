<script type="text/javascript" src="js/calendar-widget.js"></script>
<script src="https://apis.google.com/js/client.js?onload=checkAuth">
    </script>
    
    <div id="authorize-div" style="display: none">
      <span>Authorize access to Google Calendar API</span>
      <!--Button for the user to click to initiate auth sequence -->
      <button id="authorize-button" onclick="handleAuthClick(event)">
        Authorize
      </button>
    </div>

<div id="calendar-widget" class="widget-padding bottom-right">
    
</div>

<script type="text/javascript">
// setCalendar();
</script>