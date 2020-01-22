var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary verifiable collective peer-to-peer disruptive collaborative innovative";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";
//Switches for determining which data to pull. I know there are better ways to do this, will continue working this out. In the mean time, it is 100% functional.
//The number (0,1,2) is the index of the respective data inside the ajax response
var bitcoinResponse = 0;
var ethResponse = 1;
var xrpResponse = 2;

// var coinlayerKey = "1bf97333fc25678c49ef405b1ae1b52b"

var cryptocontrolAPIKey = "01a022055e3546253ff00081a2996bfd";

var modal = $("#main-modal")
var xButton = $("#x-button")
var modalTitle = $(".modal-card-title")
var DAMheading = $(".heading")
var nomicsURL = `https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=${nomicsKey}`

var cryptoCompareKey = "a588e6bd4c1f59b4d02ac7c3cb0418340411b08e5522208552fe2449cabdedd6"

var cryptoCompareUrl =



bitcoinDataCall()
function bitcoinDataCall() {
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10&api_key=${cryptoCompareKey}`,
    method: "GET",
  }).then(function (response) {
    console.log(response)

    var day7 = response.Data.Data[10].high
    var day6 = response.Data.Data[9].high
    var day5 = response.Data.Data[8].high
    var day4 = response.Data.Data[7].high
    var day3 = response.Data.Data[6].high
    var day2 = response.Data.Data[5].high
    var day1 = response.Data.Data[4].high

    dataChartPrice7()
    function dataChartPrice7() {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          datasets: [{
            label: 'Price Action / Past 7 Days',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [day1, day2, day3, day4, day5, day6, day7]
          }]
        },

        // Configuration options go here
        options: {}
      })
    }
    dataChartPriceLogarithmic()
    function dataChartPriceLogarithmic() {
      var ctx = document.getElementById('myChart2').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
          datasets: [{
            label: 'Price Action / Past 10 Years',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [0.08, 4.38, 716, 443, 15527, 11186]
          }]
        },

        // Configuration options go here
        options: {}
      })
    }
  })
};

var logChartObject = {
  bitcoin : [2.83, 10.86, 204, 443, 457, 218],
  ethereum : [2.83, 10.86, 204, 443, 457, 218],
  xrp : [2.83, 10.86, 204, 443, 457, 218]
}

function ethereumDataCall() {
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=10&api_key=${cryptoCompareKey}`,
    method: "GET",
  }).then(function (response) {

    var day7 = response.Data.Data[10].high
    var day6 = response.Data.Data[9].high
    var day5 = response.Data.Data[8].high
    var day4 = response.Data.Data[7].high
    var day3 = response.Data.Data[6].high
    var day2 = response.Data.Data[5].high
    var day1 = response.Data.Data[4].high

    dataChartPrice7()
    function dataChartPrice7() {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          datasets: [{
            label: 'Price Action / Past 7 Days',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [day1, day2, day3, day4, day5, day6, day7]
          }]
        },

        // Configuration options go here
        options: {}
      })
    }
    dataChartPriceLogarithmic()
    function dataChartPriceLogarithmic() {
      var ctx = document.getElementById('myChart2').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            label: 'Price Action / Past 5 Years',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [2.83, 10.86, 204, 443, 457, 218]
          }]
        },
        // Configuration options go here
        options: {}
      })
    }
  })
};


var chartDiv = $("#chartDiv")

function xrpDataCall() {
  $.ajax({
    url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=10&api_key=${cryptoCompareKey}`,
    method: "GET",
  }).then(function (response) {
    var day7 = response.Data.Data[10].high
    var day6 = response.Data.Data[9].high
    var day5 = response.Data.Data[8].high
    var day4 = response.Data.Data[7].high
    var day3 = response.Data.Data[6].high
    var day2 = response.Data.Data[5].high
    var day1 = response.Data.Data[4].high

    dataChartPrice7()
    function dataChartPrice7() {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          datasets: [{
            label: 'Price Action / Past 7 Days',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [day1, day2, day3, day4, day5, day6, day7]
          }]
        },
        // Configuration options go here
        options: {}
      })
    }
    dataChartPriceLogarithmic()
    function dataChartPriceLogarithmic() {
      var ctx = document.getElementById('myChart2').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
          datasets: [{
            label: 'Price Action / Past 5 Years',
            backgroundColor: 'rgb(71, 71, 71, 0.308) ',
            borderColor: 'rgb(120, 50, 255)',
            data: [0.02, .006, .006, 2.30, .35]
          }]
        },

        // Configuration options go here
        options: {}
      })
    }
  })
};

//Function for the changing text at the top of the page
function readBuzzwords() {
  var i = 0;
  setInterval(function () {
    if (buzzwordsSplit[i] === undefined) {
      i = 0;
    }
    $("#header-reader").text(buzzwordsSplit[i]);
    i++;
  }, 1000);
};

//Click event to close modal
xButton.on('click', function () {
  modal.removeClass("is-active")
  modalTitle.html("")
  // $(".article-div").html("")
  DAMheading.removeAttr("style", "opacity: 0")
  $("article-div").empty()
});

//Click event to open BTC modal
$("#btc-icon").on('click', function () {
  chartDiv.empty()
  bitcoinDataCall();
  getPriceData(bitcoinResponse)
  modal.addClass("is-active")
  modalTitle.html("Bitcoin")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("bitcoin"));
  toggleTwitterSource("btc", btcTwitterSources);
});
//Click event to open ETH modal
$("#eth-icon").on('click', function () {
  chartDiv.empty()
  ethereumDataCall()
  getPriceData(ethResponse)
  modal.addClass("is-active")
  modalTitle.html("Ethereum")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("ethereum"));
  toggleTwitterSource("eth", ethTwitterSources);
});
//Click event to open XRP modal
$("#xrp-icon").on('click', function () {
  chartDiv.empty()
  xrpDataCall()
  getPriceData(xrpResponse)
  modal.addClass("is-active")
  modalTitle.html("XRP")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("ripple"));
  toggleTwitterSource("xrp", xrpTwitterSources);
});


//div container to hold all contents associated with articles
var $articlediv = $(".article-container");

//method to create request URL based on the event and respective searchParameter
function createURL(searchParam) {
  var cryptoURL = ""
  cryptoURL = `https://cors-anywhere.herokuapp.com/https://cryptocontrol.io/api/v1/public/news/coin/${searchParam}?key=${cryptocontrolAPIKey}&limit=5`;
  return cryptoURL;
}

//method to create articles HTML modal by taking advantage of Ajax API response data 
//cryptoURL - is a callBack function
function newsArticle(cryptoURL) {
  console.log(cryptoURL);
  $.ajax({
    url: cryptoURL,
    method: "GET",
  }).then(function (response) {
    console.log("got response");
    console.log(response);
    $articlediv.empty()
    $articlediv.addClass("is-scrollable");
    for (var i = 0; i < response.length; i++) {
      console.log("loop");
      var $link = $("<a>");
      // $link.addClass("column")
      $link.attr("href", response[i].url);
      $link.attr("target", "_blank");
      $articlediv.append($link);

      var $article = $("<article>");
      $article.addClass("message is-small");
      $link.append($article);

      var $articleHeader = $("<div>");
      $articleHeader.addClass("message-header");
      $article.append($articleHeader);

      var $title = $("<p>");
      $title.text(response[i].title);
      $articleHeader.append($title);

      var $iconContainer = $("<div>");
      $iconContainer.addClass("media-left columns is-mobile articleContainer");
      $article.append($iconContainer);

      var $articleImgCol = $("<div>");
      $articleImgCol.addClass("column is-one-quarter");
      $iconContainer.append($articleImgCol);

      var $imgContainer = $("<img>");
      $imgContainer.attr("src", response[i].thumbnail);
      $articleImgCol.append($imgContainer);


      var $articleContent = $("<div>");
      $articleContent.addClass("column is-black is-link");
      $iconContainer.append($articleContent);

      var $description = $("<p>");
      $description.text(response[i].description);
      $articleContent.append($description);
      if (i === 4) {
        break;
      }
    }
  })
}

var btcTwitterSources = [`<a class="twitter-timeline" data-lang="en" href="https://twitter.com/Bitcoin?ref_src=twsrc%5Etfw">Tweets by Bitcoin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  `<a class="twitter-timeline" href="https://twitter.com/BitcoinMagazine?ref_src=twsrc%5Etfw">Tweets by BitcoinMagazine</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" href="https://twitter.com/BTCTN?ref_src=twsrc%5Etfw">Tweets by BTCTN</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];

var xrpTwitterSources = [`<a class="twitter-timeline" href="https://twitter.com/Ripple?ref_src=twsrc%5Etfw">Tweets by Ripple</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  `<a class="twitter-timeline" href="https://twitter.com/Ripple?ref_src=twsrc%5Etfw">Tweets by Ripple</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" href="https://twitter.com/bgarlinghouse?ref_src=twsrc%5Etfw">Tweets by bgarlinghouse</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];

var ethTwitterSources = [`<a class="twitter-timeline" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
  `<a class="twitter-timeline" href="https://twitter.com/evan_van_ness?ref_src=twsrc%5Etfw">Tweets by evan_van_ness</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" href="https://twitter.com/ETHNews_?ref_src=twsrc%5Etfw">Tweets by ETHNews_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];

var defaultTwitterSource = [`<a class="twitter-timeline" href="https://twitter.com/crypto?ref_src=twsrc%5Etfw">Tweets by crypto</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];


//IIFE 
function toggleTwitterSource(cryptoType, twitterSources) {
  setInterval(function toggleTwitterTimeline() {
    var randomNumb = Math.floor(Math.random() * 3) + 1;
    switch (cryptoType) {
      case "btc":
        $(".tweeterFeed-container").html(twitterSources[randomNumb - 1]);
        break;
      case "xrp":
        $(".tweeterFeed-container").html(twitterSources[randomNumb - 1]);
        break;
      case "eth":
        $(".tweeterFeed-container").html(twitterSources[randomNumb - 1]);
        break;
      default:
        $(".tweeterFeed-container").html(defaultTwitterSource[0]);
    }
    return toggleTwitterTimeline;
  }(), 10000)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function for grabbing price data for chosen cryptocurrency
function getPriceData(cryptoParameter) {
  $.ajax({
    url: nomicsURL,
    method: "GET",
  }).then(function (response) {

    var priceResponse = parseFloat(response[cryptoParameter].price)
    var fixedPrice = priceResponse.toFixed(2)
    $("#price").text("Price: " + "$" + fixedPrice)

    var marketCapResponse = parseFloat(response[cryptoParameter].market_cap)
    var commaMarketCap = marketCapResponse.toLocaleString()
    $("#marketCap").text("Market Cap: " + "$" + commaMarketCap)

    var circulatingSupplyResponse = parseFloat(response[cryptoParameter].circulating_supply)
    var commaCirculatingSupply = circulatingSupplyResponse.toLocaleString()
    $("#circSupply").text("Circulating Supply: " + commaCirculatingSupply)

    var marketCapResponse = parseFloat(response[cryptoParameter].max_supply)
    var commaMarketCap = marketCapResponse.toLocaleString()
    $("#maxSupply").text("Max Supply: " + commaMarketCap)

    //Formula for calculating total crypto market cap to a reasonably accurate degree. (Top 3000 cryptocurrencies)
    var totalMarketCap = 0
    for (i = 0; i < 3000; i++) {
      var marketCapLoopIndex = response[i].market_cap
      var index = Number(marketCapLoopIndex)
      totalMarketCap += index
      return totalMarketCap
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
  )
}



readBuzzwords();

