var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";
var newsKey = "5d34d4f133f84cbcba757cdb7cd169ef";

var modal = $("#main-modal")
var xButton = $("#x-button")
var modalTitle = $(".modal-card-title")

read();

function read() {
    var i = 0;
    setInterval(function() {
      if (buzzwordsSplit[i] === undefined) {
        i = 0;
      }
      $("#header-reader").text(buzzwordsSplit[i]);
      i++;
    }, 500);
  };


  //Ideally, we should be able to have one or two functions. One to interact with the news API and print that information into the modal, and one to interact with the Nomics API to grab price, market cap, volume, etc.

  xButton.on('click', function(){
    modal.removeClass("is-active")
    modalTitle.html("")
  });


  $("#btc-icon").on('click', function(){
    console.log("Testing BTC")
    modal.addClass("is-active")
    modalTitle.html("Bitcoin")
    
  });

  $("#eth-icon").on('click', function(){
    modal.addClass("is-active")
    modalTitle.html("Ethereum")
  });

  $("#xrp-icon").on('click', function(){
    modal.addClass("is-active")
    modalTitle.html("XRP")
  });  

  