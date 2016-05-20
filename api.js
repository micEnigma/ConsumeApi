$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/micEnigma?client_id&client_secret=24d500632b5d1203eb37a0fa4ed7bcb2e4987f02"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-html_url').append(data.html_url);
       $('.greeting-login').append(data.login);
       $('.greeting-avatar').append(data.avatar_url);

       

    });
});

