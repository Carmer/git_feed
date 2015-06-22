var scroller = function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 300 && $(".event-feed-list").attr("id") === "public-feed-list") {
      pageNumber ++;
      publicFeed();
    }

    else if ($(window).scrollTop() > $(document).height() - $(window).height() - 300 && $(".event-feed-list").attr("id") === "community-feed-list") {
      pageNumber ++;
      pageLoader();
    }
  });
}



var pageNumber = 1
