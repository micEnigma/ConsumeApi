$(document).ready(function() {
  
  var b= prompt("Please enter the github api url you want to query or use the default", "https://api.github.com/users/micEnigma?client_id=7f6f927a60ef13d95b1f&client_secret=24d500632b5d1203eb37a0fa4ed7bcb2e4987f02");
  
    $.ajax({
        url: b
    }).then(function(data) {
       $('.github-id').append(data.id);
       $('.github-html_url').append(data.html_url);
       $('.github-login').append(data.login);
       $('.github-avatar').append(data.avatar_url);
       $('.github-events_url').append(data.events_url);
       $('.github-repos_url').append(data.repos_url);
       $('.github-gists_url').append(data.gists_url);

       

    });
});