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
    var events = {
        create: {
          repo: "carmer/gitfeed",
          login: "carmer"
        },

        delete: {
          repo: "carmer/flick_treck",
          login: "carmer"
        }
      };

    assert.lengthOf(collectEvents(events), 2, "two events collected.")
  });

});
