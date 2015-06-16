var printDeleteEvent = function(deleteEvent) {
  $("<li>"
  + "<div class='card'>"
  + "<div class='card-content'>"
  + "<span class='card-title activator grey-text text-darken-4 event-title'>"
  + "<i class='mdi-navigation-more-vert right'></i></span>"
  + "<div class='waves-effect waves-block waves-light col s3'>"
  + "<p>"
  + "<a href='http://github.com/"
  + deleteEvent.actor.login
  + "'>"
  + "<img class='circle img-avatar' src="
  + deleteEvent.actor.avatar_url
  + ">"
  + "</a>"
  + "<div class='col s6 offset-s1'>"
  + new Date(Date.parse(deleteEvent.created_at)).getMonth()
  + "/"
  + new Date(Date.parse(deleteEvent.created_at)).getDate()
  + "/"
  + new Date(Date.parse(deleteEvent.created_at)).getFullYear()
  + "</div>"
  + "</div>"
  + "</p>"
  + "<h5>"
  + deleteEvent.actor.login
  + " - "
  + "Created a "
  + deleteEvent.payload.ref_type
  + "</h5>"
  + "<div class='col s9 offest-s3 v-align'>"
  + "<p>"
  +  "Repository: "
  + "<a href='http://github.com/"
  + deleteEvent.repo.name
  + "'>"
  + deleteEvent.repo.name
  + "</a>"
  + "<br>"
  + "This is where event data from event types will go" //fix this
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
