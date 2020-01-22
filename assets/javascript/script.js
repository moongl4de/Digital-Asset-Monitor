var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";

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
  console.log("testingDATACALL")
  $.ajax({
    url: "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10",
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
function dataChartPrice7(){
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
function dataChartPriceLogarithmic(){
  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
          datasets: [{
              label: 'Price Action / Past 7 Days',
              backgroundColor: 'rgb(71, 71, 71, 0.308) ',
              borderColor: 'rgb(120, 50, 255)',
              data: [0.08, 4.38, 716, 443, 15527, 11186]
          }]
      },
  
      // Configuration options go here
      options: {}
  })
  }



  })};

ethereumDataCall()
function ethereumDataCall() {
  console.log("testingDATACALL")
  $.ajax({
    url: "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10",
    method: "GET",
  }).then(function (response) {
    console.log(response)
  })};

xrpDataCall()
function xrpDataCall() {
  console.log("testingDATACALL")
  $.ajax({
    url: "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10",
    method: "GET",
  }).then(function (response) {
    console.log(response)
  })};





read();

function read() {

  var i = 0;
  setInterval(function () {
    if (buzzwordsSplit[i] === undefined) {
      i = 0;
    }
    $("#header-reader").text(buzzwordsSplit[i]);
    i++;
  }, 1000);
};


//Ideally, we should be able to have one or two functions. One to interact with the news API and print that information into the modal, and one to interact with the Nomics API to grab price, market cap, volume, etc.

xButton.on('click', function () {
  modal.removeClass("is-active")
  modalTitle.html("")
//  $(".article-div").html("")
  DAMheading.removeAttr("style", "opacity: 0")
});


$("#btc-icon").on('click', function () {
  bitcoinDataCall()
  
  modal.addClass("is-active")
  modalTitle.html("Bitcoin")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("bitcoin"));
  toggleTwitterSource("btc", btcTwitterSources);
});

$("#eth-icon").on('click', function () {
  ethereumDataCall()
  modal.addClass("is-active")
  modalTitle.html("ethereum")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("ethereum"));
  toggleTwitterSource("eth", ethTwitterSources);
});

$("#xrp-icon").on('click', function () {
  xrpDataCall()
  modal.addClass("is-active")
  modalTitle.html("XRP")
  DAMheading.attr("style", "opacity: 0")
  newsArticle(createURL("ripple"));
  toggleTwitterSource("xrp", xrpcTwitterSources);
});


//div container to hold all contents associated with articles
var $articlediv = $(".article-container");

//method to create request URL based on the event and respective searchParameter
function createURL(searchParam) {
  var cryptoURL = `https://cryptocontrol.io/api/v1/public/news/coin/${searchParam}?key=${cryptocontrolAPIKey}&limit=5`;
  return cryptoURL;
}

//method to create articles HTML modal by taking advantage of Ajax API response data 
//cryptoURL - is a callBack function
function newsArticle(cryptoURL) {
  $.ajax({
    url: cryptoURL,
    method: "GET",
  }).then(function (response) {

$articlediv.addClass("is-scrollable");
    for (var i = 0; i < response.length; i++) {
      var $link = $("<a>");
      // $link.addClass("column")
      $link.attr("href",response[i].url);
      $link.attr("target","_blank");
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



var btcTwitterSources = [`<a class="twitter-timeline" data-lang="en" data-height="500" href="https://twitter.com/Bitcoin?ref_src=twsrc%5Etfw">Tweets by Bitcoin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
 `<a class="twitter-timeline" data-height="500" href="https://twitter.com/BitcoinMagazine?ref_src=twsrc%5Etfw">Tweets by BitcoinMagazine</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" data-height="500" href="https://twitter.com/BTCTN?ref_src=twsrc%5Etfw">Tweets by BTCTN</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];


 var xrpTwitterSources = [`<a class="twitter-timeline" data-height="500" href="https://twitter.com/Ripple?ref_src=twsrc%5Etfw">Tweets by Ripple</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
 `<a class="twitter-timeline" data-height="500" href="https://twitter.com/Ripple?ref_src=twsrc%5Etfw">Tweets by Ripple</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" data-height="500" href="https://twitter.com/bgarlinghouse?ref_src=twsrc%5Etfw">Tweets by bgarlinghouse</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];

 var ethTwitterSources = [`<a class="twitter-timeline" data-height="500" href="https://twitter.com/ethereum?ref_src=twsrc%5Etfw">Tweets by ethereum</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
 `<a class="twitter-timeline" data-height="500" href="https://twitter.com/evan_van_ness?ref_src=twsrc%5Etfw">Tweets by evan_van_ness</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`, `<a class="twitter-timeline" data-height="500" href="https://twitter.com/ETHNews_?ref_src=twsrc%5Etfw">Tweets by ETHNews_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];

 var defaultTwitterSource = [`<a class="twitter-timeline" data-height="500" href="https://twitter.com/crypto?ref_src=twsrc%5Etfw">Tweets by crypto</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`];


 var twitterToggler ;

//IIFE 
function toggleTwitterSource (cryptoType, twitterSources){
   twitterToggler = setInterval(function toggleTwitterTimeline(){
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
}(), 10000);

$(".tweeterFeed-container").mouseover(function(){
  clearInterval(twitterToggler);
}).mouseout(function(){
  twitterToggler;
})


}


function getMarketDominanceData(createChart) {

  var data = [];
  var labels;
  var chartRequiredData;

  $.ajax({
    url: nomicsURL,
    method: "GET"
  }).then(function(response) {
    var totalMarketCap = 0
    //set the label names for the top 3 based on the crypto market cap
     labels = [response[0].symbol,response[1].symbol, response[2].symbol, "Others"];

    for(i=0; i < 3000; i++){
      var marketCapLoopIndex = response[i].market_cap; 
      var index = Number(marketCapLoopIndex);
      totalMarketCap += index

    }
    var firstPlacePercentage = (response[0].market_cap/totalMarketCap)*100;
    var secondPlacePercentage = (response[1].market_cap/totalMarketCap)*100;
    var thirdPlacePercentage = (response[2].market_cap/totalMarketCap)*100;
    var othersPercentage = 100 - (firstPlacePercentage + secondPlacePercentage + thirdPlacePercentage );
    data.push(firstPlacePercentage.toFixed());
    data.push(secondPlacePercentage.toFixed());
    data.push(thirdPlacePercentage.toFixed());
    data.push(othersPercentage.toFixed());

    chartRequiredData = {
      label: labels,
      data: data,
    };
    // callbackFunction
    createChart(chartRequiredData);

  });
}


getMarketDominanceData(function (chartRequiredData){
new Chart($("#dougnut_chart_01"), {
  "type": "doughnut",
  "data": {
    // create an array representing "labels": ["BTC","ETH","XRP","Others"],
     "labels": chartRequiredData.label,

     "datasets": [{
        "label": "Market Share",
    //create an array representing "data":["66","8","4","22"],
         "data": chartRequiredData.data,
        "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
     }]
  }
});
});
