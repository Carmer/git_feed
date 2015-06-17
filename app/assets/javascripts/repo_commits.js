$(document).ready( function() {

  function collectCommits(commitInfo) {
  var commitList = []

  for ( i = 0 ; i < commitInfo.length ; i ++) {
    commitList.push(commitInfo[i])
  }
  return commitList
};



function printCommits(data) {

  var commiterCounts = {}

  var commits = collectCommits(data)

  for (i = 0 ; i < commits.length ; i ++) {
    commiterCounts[commits[i].commit.commiter.name] = 1 + (commiterCounts[commits[i]] || 0 )
  };
   commiterCounts.forEach(function (name, count)  {
    $("<tr>"
    + "<td>"
    + name
    + "</td>"
    + "<td>"
    + count
    + "</td>"
    + "<td>"
    + count / commitList.length
    + "</td>"
    + "</tr>").appendTo("table")
  });
};


$( ".repo-data-name" ).on("click", function() {
  $.ajax({
    dataType: "json",
    url: "https://api.github.com/repos/" + $(this).data("repoName") + "/commits",
    success: function(success) {
      printCommits(success)
    },
    error: function(error) {
      alert(error)
    }
  });
});
});
