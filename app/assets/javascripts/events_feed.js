$(function() {
  loader();
  scroller();
});

var loader = function() {
  filterEvents();
  if ($("#public-page").html() === "Public Git_Feed") {
    publicFeed();
  }
  else if ($("#explore-page").html() === "Explore Git_Feed") {
    exploreFeed();
  }
  else {
    communityFeed();
  }
}

var communityFeed = function() {
  var token = $("#community-page").data("userToken")
  $(".windows8").toggleClass("hidden")
  $(".event-feed-list").attr("id", "community-feed-list")
  $.ajax({
    url: "http://api.github.com/users/" + $("#community-page").data("userLogin") + "/received_events?page=" + pageNumber + "&per_page=100&access_token=" + token,
    dataType: "json",
    success: function(success) {
      $(".load-more-button").toggleClass("hidden")
      $(".windows8").toggleClass("hidden")
      collectEvents(success);
    },
    error: function(error) {
      $(".load-more-button").toggleClass("hidden")
      $(".windows8").toggleClass("hidden")
      }
  })
  .done( function() {
    sortEvents();
    printGenericEvent(eventList);
    populateCommitHistory();
    filterEvents();
  });
}


var publicFeed = function() {
  // $("#public-feed").on("click", function(){
    // $(".event-feed-list").empty();
    $(".windows8").toggleClass("hidden")
    var token = $("#public-page").data("userToken")
    $(".event-feed-list").attr("id", "public-feed-list")
    eventList = []
    $.ajax({
      url: "http://api.github.com/events?page=" + pageNumber + "&per_page=100&access_token=" + token,
      dataType: "json",
      success: function(success) {
        $(".load-more-button").toggleClass("hidden")
        $(".windows8").toggleClass("hidden")
        collectEvents(success)
      },
        error: function(error) {
        $(".load-more-button").toggleClass("hidden")
        $(".windows8").toggleClass("hidden")
        }
    })
  .done( function() {
    sortEvents();
    printGenericEvent(eventList);
    filterEvents();
    populateCommitHistory();
  });
// })
}


var exploreFeed = function() {
  $(".event-feed-list").attr("id", "explore-feed-list")
  $("#explore-button").on("click", function(){
  $(".event-feed-list").empty();
    exploreFeedCall();
    filterEvents();
  })
}

var exploreFeedCall = function()  {
  $(".windows8").toggleClass("hidden")
  $(".event-feed-list").attr("id", "explore-feed-list")
  var token = $("#explore-page").data("userToken")
  var username = $("#explore-username").val();
  $.ajax({
    url: "http://api.github.com/users/" + username + "/events?page=" + pageNumber + "&per_page=100&access_token=" + token,
    dataType: "json",
    success: function(success) {
      $(".windows8").toggleClass("hidden")
      $(".load-more-button").toggleClass("hidden")
      collectEvents(success);
    },
    error: function(error) {
        $(".load-more-button").toggleClass("hidden")
      $(".windows8").toggleClass("hidden")
      }
  })
  $.ajax({
    url: "http://api.github.com/users/" + username + "/received_events?page=" + pageNumber + "&per_page=100&access_token=" + token,
    dataType: "json",
    success: function(success) {
      collectEvents(success);
    },
    error: function(error) {
      $(".windows8").toggleClass("hidden")
      }
  })
  .done( function() {
    printGenericEvent(eventList);
    populateCommitHistory();
    filterEvents();
    sortEvents();
  });
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
};


////Not sure if ssort works correctly yet

var sortEvents = function() {
  eventList.sort(function(x,y){
    return x - y;
  });
}
