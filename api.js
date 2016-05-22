$(document).ready(function() {
  
  var a= prompt("Please enter the github api url you want to query, leave blank to use the default", "https://api.github.com/users/micEnigma");
  var b= "https://api.github.com/users/micEnigma?client_id=7f6f927a60ef13d95b1f&client_secret=24d500632b5d1203eb37a0fa4ed7bcb2e4987f02";
  if(a.length===0){
    a=b;
  };
  
    $.ajax({
        url: a
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