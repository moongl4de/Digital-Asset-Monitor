var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";
var cryptocontrolAPIKey = "01a022055e3546253ff00081a2996bfd";

var modal = $("#main-modal")
var xButton = $("#x-button")
var modalTitle = $(".modal-card-title")
var DAMheading = $(".heading")

var nomicsURL = `https://api.nomics.com/v1/currencies/ticker?key=${nomicsKey}&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR`

read();

function read() {
    var i = 0;
    setInterval(function() {
      if (buzzwordsSplit[i] === undefined) {
        i = 0;
      }
      $("#header-reader").text(buzzwordsSplit[i]);
      i++;
    }, 1000);
  };



//Ideally, we should be able to have one or two functions. One to interact with the news API and print that information into the modal, and one to interact with the Nomics API to grab price, market cap, volume, etc.

$("#btc-icon").on('click', function(){
    console.log("Testing BTC")
    modal.addClass("is-active")
    modalTitle.html("Bitcoin")
    DAMheading.attr("style", "opacity: 0")
    
  });

  $("#eth-icon").on('click', function(){
    modal.addClass("is-active")
    modalTitle.html("Ethereum")
    DAMheading.attr("style", "opacity: 0")
  });

  $("#xrp-icon").on('click', function(){
    modal.addClass("is-active")
    modalTitle.html("XRP")
    DAMheading.attr("style", "opacity: 0")
  });  

  xButton.on('click', function(){
    modal.removeClass("is-active")
    modalTitle.html("")
    DAMheading.removeAttr("style", "opacity: 1")

  });

//method to create request URL based on the event and respective searchParameter
function createURL(searchParam) {
  var cryptoURL = `https://cryptocontrol.io/api/v1/public/news/coin/${searchParam}?key=${cryptocontrolAPIKey}&limit=5`;
  return cryptoURL;
}

//method to create articles HTML modal by taking advantage of Ajax API response data 
function newsArticle(cryptoURL) {
  $.ajax({
    url: cryptoURL,
    method: "GET",
  }).then(function (response) {
    var $articlediv = $(".article-div");

    for (var i = 0; i < response.length; i++) {

      var $article = $("<article>");
      $article.addClass("message is-small");
      $articlediv.append($article);

      var $link = $("<a>");
      
      $link.attr("href",response[i].url);
      $article.append($link);

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
