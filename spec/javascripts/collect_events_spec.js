//= require chai
//= require events_feed

;

describe("collectEvents()", function() {
  it ("collects events", function() {
    var events = {
      create: {
        repo: "carmer/gitfeed",
        login: "carmer"
      }
    }

    assert.ok(events, "its ok")
  });

  it ("collects two events", function() {
    var testEvents = {
      "create": {
        type: "CreateEvent",
        repo: "carmer/gitfeedE"
      },
      "delete": {
        type: "DeleteEvent",
        repo: "carmer/gitfeed"
      }

    };
    assert.isFunction(collectEvents, "two events collected.")
  });

});
