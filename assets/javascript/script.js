var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";
var cryptocontrolAPIKey = "01a022055e3546253ff00081a2996bfd";

var modal = $("#main-modal")
var xButton = $("#x-button")
var modalTitle = $(".modal-card-title")

read();

function read() {
  var i = 0;
  setInterval(function () {
    if (buzzwordsSplit[i] === undefined) {
      i = 0;
    }
    $("#header-reader").text(buzzwordsSplit[i]);
    i++;
  }, 500);
};


//Ideally, we should be able to have one or two functions. One to interact with the news API and print that information into the modal, and one to interact with the Nomics API to grab price, market cap, volume, etc.

xButton.on('click', function () {
  modal.removeClass("is-active")
  modalTitle.html("")
  $(".article-div").html("")
});


$("#btc-icon").on('click', function () {
  modal.addClass("is-active")
  modalTitle.html("Bitcoin")

  newsArticle(createURL("bitcoin"));
});

$("#eth-icon").on('click', function () {
  modal.addClass("is-active")
  modalTitle.html("ethereum")
  newsArticle(createURL("ethereum"));
});

$("#xrp-icon").on('click', function () {
  modal.addClass("is-active")
  modalTitle.html("XRP")
  newsArticle(createURL("ripple"));
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
    console.log("response = "+JSON.stringify(response));

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

var $twitterFeed = $("<a>");
$twitterFeed.addClass("column")
$twitterFeed.attr({"href":"https://twitter.com/TwitterDev", "data-width":"300",
"data-height":"300"});
$twitterFeed.text("Tweets by @TwitterDev")
$(".tweeterFeed-container").append($twitterFeed);

{/* <a class="twitter-timeline"
  href="https://twitter.com/TwitterDev"
  data-width="300"
  data-height="300">
Tweets by @TwitterDev
</a> */}

