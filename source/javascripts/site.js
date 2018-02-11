window.onload = function() {
  var socket = io.connect('https://socket.coincap.io');
  var previousPrice = 0;

  var coin = 'BTC';

  $.get({
    url: 'https://coincap.io/page/' + coin,
    data: {},
    success: function(result) {
      document.getElementById("price").innerHTML = '<div id="newprice">$' + result.price_usd + "</div>";
    }
  });

  socket.on('trades', function (tradeMsg) {
    if(tradeMsg.message.coin == coin){
      var variation = (previousPrice < tradeMsg.message.msg.price) ? 'MediumSeaGreen' : 'red';
      console.log(variation, previousPrice, tradeMsg.message.msg.price);
      
      previousPrice = tradeMsg.message.msg.price;
      document.getElementById("price").innerHTML = '<div id="newprice" style="color: ' + variation + ';">$' + tradeMsg.message.msg.price + "</div>";
    }
  });
};

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