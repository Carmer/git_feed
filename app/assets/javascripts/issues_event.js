var printIssuesEvent = function(issuesEvent) {
$("<li>"
+ "<div class='card'>"
+ "<div class='card-content'>"
+ "<span class='card-title activator grey-text text-darken-4 event-title'>"
+ "<i class='mdi-navigation-more-vert right'></i></span>"
+ "<div class='waves-effect waves-block waves-light col s3'>"
+ "<p>"
+ "<a href='http://github.com/"
+ issuesEvent.actor.login
+ "'>"
+ "<img class='circle img-avatar' src="
+ issuesEvent.actor.avatar_url
+ ">"
+ "</a>"
+ "<div class='col s6'>"
+ "<div class='col s8'>"
+ timeSince(new Date(Date.parse(issuesEvent.created_at)))
+ " ago"
+ "</div>"
+ "</div>"
+ "</p>"
+ "<h5>"
+ "<a href='http://github.com/"
+ issuesEvent.actor.login
+ "'>"
+ issuesEvent.actor.login
+ "</a>"
+ " - "
+ issuesEvent.payload.action
+ " an issue for the repository "
+ issuesEvent.repo.name
+ "</h5>"
+ "<div class='col s9 offest-s3 v-align'>"
+ "<p>"
+  "Repository: "
+ "<a href='http://github.com/"
+ issuesEvent.repo.name
+ "'>"
+ issuesEvent.repo.name
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
