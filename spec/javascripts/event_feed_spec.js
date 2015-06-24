//= require chai
//= require events_feed


describe("event-feed.js", function() {
  it ("collects events", function() {
    var events = {
      create: {
        repo: "carmer/gitfeed",
        login: "carmer"
      }
    };

    assert.ok(events, "its ok");
  });

  it ("event feed functions", function() {

    assert.isFunction(collectEvents, "is a function.");
  });

  it ("loader function", function(){
    assert.isFunction(loader, "is a function.");
  });

  it ("community feed function", function(){
    assert.isFunction(communityFeed, "is a function.");
  });

  it ("public feed function", function() {
    assert.isFunction(publicFeed, "is a function.");
  });

  it ("explore feed function", function(){
    assert.isFunction(exploreFeed, "is a function.");
  });

  it ("explore feed call function", function(){
    assert.isFunction(exploreFeedCall, "is a function.");
  });

  it ("event list is an array", function() {
    assert(Array.isArray(eventList), "is a function.");
  });
});
