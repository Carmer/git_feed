
var printGenericEvent = function(events) {
  for (i = 0; i < events.length; i ++ ) {
    $("<li data-event-type='"
    + events[i].type
    +"' class="
    + events[i].type
    + ">"
    + "<div class='card'>"
    + "<div class='card-content'>"
    + "<span class='card-title activator grey-text text-darken-4 event-title'>"
    + "<i class='mdi-navigation-more-vert right repo-data-name' data-repo-name='"
    + events[i].repo.name
    + "'></i></span>"
    + "<div class='waves-effect waves-block waves-light col s3'>"
    + "<p>"
    + "<a href='http://github.com/"
    + events[i].actor.login
    + "'>"
    + "<img class='circle img-avatar' src="
    + events[i].actor.avatar_url
    + ">"
    + "</a>"
    + "<div class='col s8'>"
    + timeSince(new Date(Date.parse(events[i].created_at)))
    + " ago"
    + "</div>"
    + "</div>"
    + "</p>"
    + "<h5>"
    + "<a href='http://github.com/"
    + events[i].actor.login
    + "'>"
    + events[i].actor.login
    + "</a>"
    + " - "
    + naturalLanguageEventInfo(events[i])
    + "</h5>"
    + "<div class='col s9 offest-s3 v-align'>"
    + "<p>"
    +  "Repository: "
    + "<a class='repo-link' href='http://github.com/"
    + events[i].repo.name
    + "'>"
    + events[i].repo.name
    + "</a>"
    + "</p>"
    + "</div>"
    + "</div>"
    + "<div class='card-reveal'>"
    + "<span class='card-title grey-text text-darken-4'>"
    + "Commit History: "
    + events[i].repo.name
    + "<i class='mdi-navigation-close right'></i>"
    + "</span>"
    + "<table class='hoverable'>"
    + "<thead>"
    + "<tr>"
    + "<th data-field='name'>Commiter's Name</th>"
    + "<th data-field='number commits'>Number of Commits</th>"
    + "<th data-field='pertage commits'>Percent Total Contribution</th>"
    + "</tr>"
    + "</thead>"
    + "<tbody class='commit-table'>"
    + "</tbody>"
    + "</table>"
    + "</div>"
    + "</li>").appendTo(".event-feed-list");
  }
};


var naturalLanguageEventInfo = function(eventType) {

    if ( eventType.type === "CreateEvent") {
      return "created a " + eventType.payload.ref_type
    }

    else if (eventType.type === "DeleteEvent") {
      return "deleted a " + eventType.payload.ref_type
    }

    else if (eventType.type === "PushEvent") {
      return "pushed " + eventType.payload.size + " commits to the " + eventType.payload.ref.split("/")[2] + " branch"
    }

    else if (eventType.type === "PullRequestEvent") {
      return "submited a pull request for: " + eventType.payload.pull_request.title + " to the repository " + eventType.repo.full_name
    }

    else if (eventType.type === "IssuesEvent") {
      return eventType.payload.action + " an issue for the repository " + eventType.repo.name
    }

    else if (eventType.type === "IssueCommentEvent") {
      return "commented on the issue: " + eventType.payload.issue.title + " for the repository " + eventType.repo.name
    }

    else if (eventType.type === "ForkEvent") {
      return "forked the repository: " + eventType.repo.name
    }

    else if (eventType.type === "WatchEvent") {
      return eventType.payload.action + " watching " + eventType.repo.name
    }

    else if (eventType.type === "MemberEvent") {
      return "added " + "<a href='http://github.com/" + eventType.payload.member.login + "'>" + eventType.payload.member.login + "</a>" + " as a member of the " + eventType.repo.name + " repository"
    }
  };
