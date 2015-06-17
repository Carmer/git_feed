$(function() {
  $.ajax({
    url: "/users/" + $("#user-page").data("userId") + "/received_events",
    dataType: "json",
    success: function(success) {
      collectEvents(success)
    },
    error: function(error) {
      console.log(error) //this needs to change. Just a placeholer currently
      }
  });
  $.ajax({
    url: "/users/" + $("#user-page").data("userId") + "/events",
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

    if ( events[i].type === "CreateEvent") {
      printCreateEvent(events[i])
    }

    else if (events[i].type === "DeleteEvent") {
      printDeleteEvent(events[i])
    }

    else if (events[i].type === "PushEvent") {
      printPushEvent(events[i])
    }

    else if (events[i].type === "PullRequestEvent") {
      printPullRequestEvent(events[i])
    }

    else if (events[i].type === "IssuesEvent") {
      printIssuesEvent(events[i])
    }

    else if (events[i].type === "IssueCommentEvent") {
      printIssueCommentEvent(events[i])
    }

    else if (events[i].type === "ForkEvent") {
      printForkEvent(events[i])
    }

    else if (events[i].type === "WatchEvent") {
      printWatchEvent(events[i])
    }

    else if (events[i].type === "MemberEvent") {
      printMemberEvent(events[i])
    }
    else {
    $("<li>"
    + "<div class='card'>"
    + "<div class='card-content'>"
    + "<span class='card-title activator grey-text text-darken-4 event-title'>"
    + "<i class='mdi-navigation-more-vert right'></i></span>"
    + "<div class='waves-effect waves-block waves-light col s3'>"
    + "<p>"
    + "<a href='"
    + events[i].actor.url
    + "'>"
    + "<img class='circle img-avatar' src="
    + events[i].actor.avatar_url
    + ">"
    + "</a>"
    + "</div>"
    + "</p>"
    + "<div class='col s8 offest-s3'>"
    + "<h5>"
    + events[i].actor.login
    + " - "
    + events[i].type
    + " - "
    + events[i].repo.name.split("/")[1]
    + "</h5>"
    + "<p>"
    + "<a href='"
    + events[i].repo.url
    + "'> Repository: "
    + events[i].repo.name
    + "</a>"
    + "</p>"
    + "</div>"
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
  };
}
