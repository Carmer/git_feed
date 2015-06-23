var scroller = function() {
    pageNumber = 1
    // Removed window scroll load becasue of issues with multiple calls on scroll
    // $(window).on("scroll", function() {
  $(".load-more-button").on("click", function() {
    // if ($(window).scrollTop() > $(document).height() - $(window).height() - 100 && $(".event-feed-list").attr("id") === "public-feed-list") {
    if ($(".event-feed-list").attr("id") === "public-feed-list") {
      pageNumber += 1
      publicFeed();
    }

    // else if ($(window).scrollTop() > $(document).height() - $(window).height() - 100 && $(".event-feed-list").attr("id") === "community-feed-list") {
    else if ($(".event-feed-list").attr("id") === "community-feed-list") {
      pageNumber += 1
      communityFeed();
    }

    // else if ($(window).scrollTop() > $(document).height() - $(window).height() - 100 && $(".event-feed-list").attr("id") === "explore-feed-list") {
    else if ($(".event-feed-list").attr("id") === "explore-feed-list") {
      pageNumber += 1
      exploreFeedCall();
    }
  });
}



var pageNumber = 1
