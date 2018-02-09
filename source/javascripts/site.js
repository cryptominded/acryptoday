$("#signup").on('submit', function(e) {
  e.preventDefault();

  $(".signup .submit").addClass("loading").val("Joining");

  var data = {
    "client_id": "naeMWwsfXqO5NqNcFOr4Jsy2OUpZsTxB",
    "connection": "Username-Password-Authentication",
    "email": $(".signup .email").val(),
    "password": $(".signup .password").val(),
    "username": $(".signup .username").val(),
    "user_metadata": {      
      "description": $(".signup .description").val()
    }
  };

  var settings = {
    "crossDomain": true,
    "url": "https://cryptominded.auth0.com/dbconnections/signup",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": JSON.stringify(data)
  };

  $.ajax(settings)
    .done(function (response) {
      if (response._id.length > 0) {
        window.location = "https://discuss.cryptominded.com/login"
      }
    }).fail(function(error) {
      var message = error.responseJSON.error ? error.responseJSON.error : error.responseJSON.description;        
      $(".signup .error").text(message).addClass("show");
      $(".signup .submit").val("Join the community").removeClass("loading");
    });

});