var container = $('.coin-container');
var btn = $('.button');
var coins = ["Heads", "Tails"];

btn.on("click", tossCoin);

function tossCoin () {
  var coin = coins[Math.floor(Math.random() * coins.length)];
  container.append(coin);
}
