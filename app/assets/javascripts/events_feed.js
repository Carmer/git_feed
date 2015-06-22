$(function() {
  pageLoader();
});

var pageLoader = function() {
  $(".event-feed-list").attr("id", "community-feed-list")
  var token = $("#user-page").data("userToken")
  $(".windows8").toggleClass("hidden")
  $.ajax({
    url: "http://api.github.com/users/" + $("#user-page").data("userLogin") + "/received_events?page=" + pageNumber + "&per_page=100&access_token=" + token,
    dataType: "json",
    success: function(success) {
      collectEvents(success);
    },
    error: function(error) {
      alert("Page Could Not Load")
      }
  })
  .done( function() {
    sortEvents();
    $(".windows8").toggleClass("hidden")
    printGenericEvent(eventList);
    populateCommitHistory();
  });
}


var publicFeed = function() {
  $("#public-feed").on("click", function(){
    $(".event-feed-list").empty();
    $(".event-feed-list").attr("id", "public-feed-list")
    var token = $("#user-page").data("userToken")
    $(".windows8").toggleClass("hidden")
    eventList = []
    $.ajax({
      url: "http://api.github.com/events?page=" + pageNumber + "&per_page=100&access_token=" + token,
      dataType: "json",
      success: function(success) {
        collectEvents(success)
      },
      error: function(error) {
        alert("Page Could Not Load")
        }
    })
  .done( function() {
    $(".windows8").toggleClass("hidden")
    printGenericEvent(eventList);
  });
})
}


var eventList = []

var collectEvents = function(eventsInfo) {
  for (i = 0; i < eventsInfo.length; i ++) {
    eventList.push(eventsInfo[i]);
  }
  searchEvents();
  scroller();
  filterEvents();
  populateCommitHistory();
  publicFeed();
};


////Not sure if ssort works correctly yet

var sortEvents = function() {
  eventList.sort(function(x,y){
    return x - y;
  });
}
