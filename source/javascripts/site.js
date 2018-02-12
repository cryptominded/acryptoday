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
      "Keeps bankruptcy away",
      "Will never get you an MBA",
      "... Where's my f-ing lambo!?",
      "Will eventually pay for your latte",
      "Because your mom asks for that student loan repay",
      "Will keep you from experiencing doomsday",
      "Will help you average it out through DCA",
      "Gets you some financial headway",
      "Because your boss keeps forgetting your payday",
      "Keeps Vitalik Buterin coding day-to-day",
      "Is it already friday?!",
      "Until we drive away",
      "Is just part of the foreplay",
      "And don't disobey",
      "Can't pay for your chinese takeaway",
      "Without a delay",
      "Keeps your sleep rhytm in decay",
      "Is better than your partners foreplay",
      "Even on a bank holiday",
      "Thanks to Cryptominded.com, okay?",
    );

$('.js-sentence').mouseover(function() { 
  $(this).text(items[Math.floor(Math.random()*items.length)]);
});
$('.js-sentence').mouseleave(function() {
  $(this).text("A crypto a day...");
});