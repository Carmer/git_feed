$(function() {
  $.ajax({
    url: "https://api.github.com/users/" + $("#user-page").data("userLogin") + "/received_events?page=1&per_page=100",
    dataType: "json",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
      }
  });
  $.ajax({
    url: "https://api.github.com/users/" + $("#user-page").data("userLogin") + "/events?page=1&per_page=100",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
    }
  })
  .done( function() {
    printEvents(eventList)
  });
});

var eventList = []

var collectEvents = function(eventsInfo) {

  for (i = 0; i < eventsInfo.length; i ++) {
    eventList.push(eventsInfo[i])
  }
};


var printEvents = function(events) {
  for (i = 0; i < events.length; i ++ ){
    $("<li>"
    + "<div class='card'>"
    + "<div class='card-content'>"
    + "<span class='card-title activator grey-text text-darken-4 event-title'>"
    + "<i class='mdi-navigation-more-vert right'></i></span>"
    + "<h5>"
    + events[i].actor.login
    + " - "
    + events[i].type
    + " - "
    + events[i].repo.name.split("/")[1]
    + "</h5>"
    + "<a href='"
    + events[i].repo.url
    + "'> Repository: "
    + events[i].repo.name
    + "</a>"
    + "</div>"
    + "<div class='waves-effect waves-block waves-light col s3'>"
    + "<p>"
    + "<a href='"
    + events[i].actor.url
    + "'>"
    + "<img class='circle img-avatar' src="
    + events[i].actor.avatar_url
    + ">"
    + "</a>"
    + "</p>"
    + "</div>"
    + "<div class='col s8 offest-s3'>"
    + "<p>"
    + "This is where event data from event types will go" //fix this
    + "</p>"
    + "</div>"
    + "<div class='card-reveal'>"
    + "<span class='card-title grey-text text-darken-4'>"
    + "Card event info placeholder" //fix this
    + "<i class='mdi-navigation-close right'></i>"
    + "</span>"
    + "<p>"
    + "Here is a placeholder paragraph. And another sentence. And another sentence. And another sentence. And another sentence."
    + "</p>"
    + "</div>"
    + "</li>").appendTo(".event-feed-list");
  };
}
