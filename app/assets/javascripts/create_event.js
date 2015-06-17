var printCreateEvent = function(createEvent) {
$("<li>"
+ "<div class='card'>"
+ "<div class='card-content'>"
+ "<span class='card-title activator grey-text text-darken-4 event-title'>"
+ "<i class='mdi-navigation-more-vert right repo-data-name' data-repo-name='"
+ createEvent.repo.name
+ "'></i></span>"
+ "<div class='waves-effect waves-block waves-light col s3'>"
+ "<p>"
+ "<a href='http://github.com/"
+ createEvent.actor.login
+ "'>"
+ "<img class='circle img-avatar' src="
+ createEvent.actor.avatar_url
+ ">"
+ "</a>"
+ "<div class='col s8'>"
+ timeSince(new Date(Date.parse(createEvent.created_at)))
+ " ago"
+ "</div>"
+ "</div>"
+ "</p>"
+ "<h5>"
+ "<a href='http://github.com/"
+ createEvent.actor.login
+ "'>"
+ createEvent.actor.login
+ "</a>"
+ " - "
+ "created a "
+ createEvent.payload.ref_type
+ "</h5>"
+ "<div class='col s9 offest-s3 v-align'>"
+ "<p>"
+  "Repository: "
+ "<a href='http://github.com/"
+ createEvent.repo.name
+ "'>"
+ createEvent.repo.name
+ "</a>"
+ "</p>"
+ "</div>"
+ "</div>"
+ "<div class='card-reveal'>"
+ "<span class='card-title grey-text text-darken-4'>"
+ "Commit History: "
+ createEvent.repo.name
+ "<i class='mdi-navigation-close right'></i>"
+ "</span>"
+ "<table>"
+ "<thead>"
+ "<tr>"
+ "<th data-field='name'>Name</th>"
+ "<th data-field='number commits'>Number of Commits</th>"
+ "<th data-field='pertage commits'>Percent Total Contribution</th>"
+ "</tr>"
+ "</thead>"
+ "<tbody>"
+ "</tbody>"
+ "</table>"
+ "</div>"
+ "</li>").appendTo(".event-feed-list");
};
