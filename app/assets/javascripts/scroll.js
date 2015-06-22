var scroller = function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 100){
      pageNumber ++;
      pageLoader();
    };
  });
}



var pageNumber = 1
