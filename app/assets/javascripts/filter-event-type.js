var filterEvents = function() {
  $(".filter-button").on("click", function() {
    var filteredEvent = $(this).data("eventType")

    $("." + filteredEvent).toggle();

  })

};
