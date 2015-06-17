var printWatchEvent = function(watchEvent) {
$("<li>"
+ "<div class='card'>"
+ "<div class='card-content'>"
+ "<span class='card-title activator grey-text text-darken-4 event-title'>"
+ "<i class='mdi-navigation-more-vert right'></i></span>"
+ "<div class='waves-effect waves-block waves-light col s3'>"
+ "<p>"
+ "<a href='http://github.com/"
+ watchEvent.actor.login
+ "'>"
+ "<img class='circle img-avatar' src="
+ watchEvent.actor.avatar_url
+ ">"
+ "</a>"
+ "<div class='col s8'>"
+ timeSince(new Date(Date.parse(watchEvent.created_at)))
+ " ago"
+ "</div>"
+ "</div>"
+ "</p>"
+ "<h5>"
+ "<a href='http://github.com/"
+ watchEvent.actor.login
+ "'>"
+ watchEvent.actor.login
+ "</a>"
+ " - "
+ watchEvent.payload.action
+ " watching "
+ watchEvent.repo.name
+ "</h5>"
+ "<div class='col s9 offest-s3 v-align'>"
+ "<p>"
+  "Repository: "
+ "<a href='http://github.com/"
+ watchEvent.repo.name
+ "'>"
+ watchEvent.repo.name
+ "</a>"
+ "</p>"
+ "</div>"
+ "</div>"
+ "<div class='card-reveal'>"
+ "<span class='card-title grey-text text-darken-4'>"
+ "Commit History: "
+ watchEvent.repo.name
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
+ "<tr class='table-commiter-names'>"
+ "</tr>"
+ "<tr class='table-commit-count'>"
+ "</tr>"
+ "<tr class='table-commit-percentage'>"
+ "</tr>"
+ "</tbody>"
+ "</table>"
+ "</div>"
+ "</li>").appendTo(".event-feed-list");
};
