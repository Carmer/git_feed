var populateCommitHistory = function(){
  $(".repo-data-name").on("click", function(){
    var repo = $(this).data("repoName")
    $.ajax({
      url: "https://api.github.com/repos/" + repo + "/commits",
      dataType: "json",
      success: function(xhr) {
      },

    }).done( function(xhr) {
      appendCommits( countCommits(xhr), repo )
    })
  })
};

var countCommits = function(commitData) {

  var commitCount = {}

  for ( x = 0 ; x < commitData.length ; x ++ ) {

  commitCount[commitData[x].commit.committer.name] = 1 + (commitCount[commitData[x].commit.committer.name] || 0)
  }
  return commitCount


};

var sumCommits = function(commitData) {

  var totalCommits = 0

  for (ii = 0 ; ii < Object.keys(commitData).length ; ii ++ ) {
    totalCommits += commitData[Object.keys(commitData)[ii]]
  }
  return totalCommits

  totalCommits = 0
};

var appendCommits = function(commitCount, repoName) {
  var commitInfo = [];

  var table = "table ." + repoName.split("/")[1]

  console.log(table)

  for (i = 0 ; i < (Object.keys(commitCount).length) ; i ++ ) {


    $("<tr><td>" + Object.keys(commitCount)[i] + "</td><td>" + commitCount[Object.keys(commitCount)[i]] + "</td><td>" + ( ( commitCount[Object.keys(commitCount)[i]] / sumCommits(commitCount)) * 100) + "</td><tr>" ).appendTo( table );
  };

};
