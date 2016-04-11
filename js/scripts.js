function Machine (reel1, reel2, reel3) {
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch"];
}

Machine.prototype.spinReel = function() {
  var reelStop = this.reel1[Math.floor(Math.random() * this.reel1.length)];
  console.log(reelStop);
  return reelStop;
}


$(document).ready(function() {

  var newMachine = new Machine();

  $("#spin").click(function(event) {
    event.preventDefault();

    $(".reel1output").text(newMachine.spinReel());

  });
});
