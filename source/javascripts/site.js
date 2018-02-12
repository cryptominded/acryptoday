window.onload = function() {
  var socket = io.connect('https://socket.coincap.io');
  var previousPrice = 0;
  var  reducePrecision = function(number) {
    return parseFloat(Number(number).toFixed(3));
  }

  var coin = 'OMG';

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
      var updown = (previousPrice < tradeMsg.message.msg.price) ? 'up' : 'down';
      console.log(variation, previousPrice, tradeMsg.message.msg.price);
      
      previousPrice = tradeMsg.message.msg.price;
      document.getElementById("price").innerHTML = '<div id="newprice" style="color: ' + variation + ';" class="' +updown+ '">$' + reducePrecision(tradeMsg.message.msg.price); + "</div>";
    }
  });


};

 var items = Array(
      "Keeps Roger Ver at bay",
      "Keeps bankruptcy away",
      "Will never get you an MBA",
      "... Where's my f-ing lambo!?",
      "Will eventually pay for your latte",
      "Because your mom asks you to repay",
      "Will keep you from experiencing doomsday",
      "Will help you average it out through DCA",
      "Except on Satur.. nevermind",
      "Gets you some headway",
      "Because your boss keeps forgetting your payday",
      "Keeps Vitalik Buterin coding day-to-day",
      "Is it already friday?!",
      "Until we drive away",
      "Is just part of the foreplay",
      "Don't disobey",
      "May get you some lingerie",
      "Can't pay for your chinese takeaway",
      "Without delay",
      "Keeps your sleep rhytm in decay",
      "Is better than your partners foreplay",
      "Even on a bank holiday",
      "Thanks to Cryptominded.com, okay?",
      "mmmkay"
    );

$('.js-sentence').mouseover(function() { 
  $(this).text(items[Math.floor(Math.random()*items.length)]);
});
$('.js-sentence').mouseleave(function() {
  $(this).text("A crypto a day...");
});


// $("#signup").on('submit', function(e) {
//   e.preventDefault();

//   $(".signup .submit").addClass("loading").val("");

//   var data = {
//     "email": $(".signup .email").val(),
//     // "redirect-url": "https://acryptoaday.com/?signup=success"
//   };

//   var settings = {
//     // "crossDomain": true,
//     "url": "https://emailoctopus.com/lists/2b3e91d2-0fd6-11e8-a98f-06b2d989fe84/members/external-add",
//     "method": "POST",
//     "headers": {
//       "content-type": "application/x-www-form-urlencoded"
//     },
//     "processData": false,
//     // "data": JSON.stringify(data)
//   };

//   $.ajax(settings)
//     .done(function (response) {
//       window.location = "https://acryptoaday.com/?signup=success"
//     }).fail(function(error) {
//       var message = error.responseJSON.error ? error.responseJSON.error : error.responseJSON.description;        
//       $(".signup .error").text(message).addClass("show");
//       $(".signup .submit").val("Subscribe").removeClass("loading");
//     });

// });

