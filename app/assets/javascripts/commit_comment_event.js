var printCommitCommentEvent = function(commitCommentEvent){
$("<li>"
+ "<div class='card'>"
+ "<div class='card-content'>"
+ "<span class='card-title activator grey-text text-darken-4 event-title'>"
+ "<i class='mdi-navigation-more-vert right'></i></span>"
+ "<div class='waves-effect waves-block waves-light col s3'>"
+ "<p>"
+ "<a href='"
+ commitCommentEvent.actor.url
+ "'>"
+ "<img class='circle img-avatar' src="
+ commitCommentEvent.actor.avatar_url
+ ">"
+ "</a>"
+ "<div class='col s8'>"
+ timeSince(new Date(Date.parse(commitCommentEvent.created_at)))
+ " ago"
+ "</div>"
+ "</div>"
+ "</p>"
+ "<div class='col s8 offest-s3'>"
+ "<h5>"
+ "<a href='http://github.com/"
+ commitCommentEvent.actor.login
+ "'>"
+ commitCommentEvent.actor.login
+ "</a>"
+ " - "
+ "made a comment on a commit in the"
+ commitCommentEvent.repo.name.split("/")[1]
+ "repository"
+ "</h5>"
+ "<p>"
+ "<a href='"
+ commitCommentEvent.repo.url
+ "'> Repository: "
+ commitCommentEvent.repo.name
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
