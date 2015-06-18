var filterEvents = function() {
  $(".filter-button").on("click", function() {
    var filteredEvent = $(this).data("eventType")

    $("." + filteredEvent).toggle()

  })

  $(".filter-button")
  .mouseenter(function() {
    $("#" + $(this).data("eventType")).html($(this).data("eventType"))  ;
  })
  .mouseleave(function() {
    $("#" + $(this).data("eventType")).parent().remove(($(this).data("eventType")));
  })
}
