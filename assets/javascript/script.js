var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");

var nomicsKey = "6573705ad8ac4ca5c1f81d04c4c13346";
var newsKey = "5d34d4f133f84cbcba757cdb7cd169ef";

read();

function read() {
    var i = 0;
    setInterval(function() {
      if (buzzwordsSplit[i] === undefined) {
        i = 0;
      } 
      $("#header-reader").text(buzzwordsSplit[i]);
      i++;
    }, 1250);
  }