var populateCommitHistory = function(){
  $(".repo-data-name").on("click", function(){
    $.ajax({
      url: "https://api.github.com/repos/" + $(this).data("repoName") + "/commits",
      dataType: "json",
      success: function(data) {
        countCommits(data)
      },

    }).done( function(data) {
      appendCommits(countCommits(data))
    })
  })
};

var countCommits = function(commitData) {

  var commitCount = {}

  for ( i = 0 ; i < commitData.length ; i ++ ) {

  commitCount[commitData[i].commit.committer.name] = 1 + (commitCount[commitData[i].commit.committer.name] || 0)
  }
  return commitCount
};

var sumCommits = function(commitData) {

  var totalCommits = 0

  for (i = 0 ; i < Object.keys(commitData).length ; i ++ ) {
    totalCommits += commitData[Object.keys(commitData)[i]]
  }
  return totalCommits
};

var appendCommits = function(commitCount) {
  for (i = 0 ; i < Object.keys(commitCount).length ; i ++ ) {
  $("<tr><td>" + Object.keys(commitCount)[i] + "</td><td>" + commitCount[Object.keys(commitCount)[i]] + "</td><td>" + ( ( commitCount[Object.keys(commitCount)[i]] / sumCommits(commitCount)) * 100) + "</td><tr>" ).appendTo("tbody")
  }
};
