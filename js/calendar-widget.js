// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '680650835871-gmpokcs7andtsnums2fbj3q5k8fna5dk.apps.googleusercontent.com';

var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

/**
  * Check if current user has authorized this application.
  */
function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadCalendarApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
function handleAuthClick(event) {
  gapi.auth.authorize(
    { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
    handleAuthResult);
  return false;
}

/**
 * Load Google Calendar client library. List upcoming events
 * once client library is loaded.
 */
function loadCalendarApi() {
  gapi.client.load('calendar', 'v3', listUpcomingEvents);
  // gapi.client.load('calendar', 'v3', listCalendars);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
  var request = gapi.client.calendar.events.list({
    //'calendarId': 'primary',
    'calendarId': 'weareteamstorey@gmail.com',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 5,
    'orderBy': 'startTime'
  });

  request.execute(function (resp) {
    var html = "";

    var events = resp.items;

    if (events.length > 0) {
      html += '<ul class="list-group">';

      for (i = 0; i < events.length; i++) {
        var event = events[i];

        var whenDate = setEventDateText(event);
        var whenTime = setEventTimeText(event);

        html += '<li class="list-group-item">';
        html += '<div class="row">';
        html += '<div class="col-md-4">' + event.summary + '</div>';
        html += '<div class="col-md-4">' + whenTime + '</div>';
        html += '<div class="col-md-4">' + whenDate + '</div>';
        html += '</div>';
        html += '</li>';
      }

      html += '</ul>';
    } else {
      html = 'No upcoming events found.';
    }

    $("#calendar-widget").html(html);

  });
}

function setEventTimeText(event) {
  var when = event.start.dateTime;
  if (!when) {
    when = event.start.date;
  }

  when = new Date(when);

  var whenOut = "";

  var suffix = "am";

  var hours = when.getHours();

  if (hours == 24) {
    suffix = "am";
  }
  else if (hours > 11) {
    hours = hours - 12;
    suffix = "pm";
  }
  else {
    suffix = "am";
  }

  if (when.getMinutes() == 0) {
    whenOut = hours + suffix;
  }
  else {
    whenOut = hours + ":" + when.getMinutes() + suffix;
  }

  return whenOut;
}

function setEventDateText(event) {
  var when = event.start.dateTime;
  if (!when) {
    when = event.start.date;
  }

  when = new Date(when);

  var whenOut = "";

  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  whenOut += weekday[when.getDay()] + ", ";
  whenOut += when.getDate() + " ";
  whenOut += monthName[when.getMonth()] + " ";

  return whenOut;
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('calendar-widget');
  var textContent = document.createTextNode(message + '</br>');
  pre.appendChild(textContent);
}