var buzzwords = "immutable secure encrypted open-source public transparent decentralized distributed borderless revolutionary disruptive";
var buzzwordsSplit = buzzwords.split(" ");


read();

function read() {
    var i = 0;
    setInterval(function() {
      if (buzzwordsSplit[i] === undefined) {
        i = 0;
        // read();
      } 
      $("#header-reader").text(buzzwordsSplit[i]);
      i++;
    }, 1250);
    // clearInterval();
  }