$(function() {
  $.ajax({
    url: "http://api.github.com/users/" + $("#user-page").data("userLogin") + "/received_events?page=1&per_page=100",
    dataType: "json",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
      }
  });
  $.ajax({
    url: "http://api.github.com/users/" + $("#user-page").data("userLogin") + "/events?page=1&per_page=100",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
    }
  })
  .done( function() {
    printGenericEvent(eventList);
    populateCommitHistory();
    filterEvents();
  });
});

var eventList = []

var collectEvents = function(eventsInfo) {
  for (i = 0; i < eventsInfo.length; i ++) {
    eventList.push(eventsInfo[i])
  }
};
