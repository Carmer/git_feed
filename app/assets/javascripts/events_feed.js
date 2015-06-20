$(function() {
  pageLoader();
});



var pageLoader = function() {
  var token = $("#user-page").data("userToken")
  $(".windows8").toggleClass("hidden")
  $.ajax({
    url: "http://api.github.com/users/" + $("#user-page").data("userLogin") + "/received_events?page=" + pageNumber + "&per_page=100?access_token=" + token,
    dataType: "json",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
      }
  });
  $.ajax({
    url: "http://api.github.com/users/" + $("#user-page").data("userLogin") + "/events?page=" + pageNumber+ "&per_page=100?access_token=" + token,
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
    }
  })
  .done( function() {
    $(".windows8").toggleClass("hidden")
    printGenericEvent(eventList);
    populateCommitHistory();
    filterEvents();
    searchEvents();
    scroller();
  });
}


var eventList = []

var collectEvents = function(eventsInfo) {
  for (i = 0; i < eventsInfo.length; i ++) {
    eventList.push(eventsInfo[i])
  }
};
