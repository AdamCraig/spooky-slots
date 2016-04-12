// Business Logic

function Machine () {
  this.symbols = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.symbolImages = ["skull.jpg", "candy.jpg", "ghost.jpg"];
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
}

Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  console.log(reelStop);
  return reelStop;
}

Machine.prototype.winningCombo = function() {

}

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();

  $("#spin").click(function(event) {
    event.preventDefault();

    $(".reel1output").empty();
    $(".reel2output").empty();
    $(".reel3output").empty();

    // $(".reel1output").text(newMachine.spinReel(newMachine.reel1));
    // $(".reel2output").text(newMachine.spinReel(newMachine.reel2));
    // $(".reel3output").text(newMachine.spinReel(newMachine.reel3));

    var reel1Result = newMachine.spinReel(newMachine.reel1);
    var reel2Result = newMachine.spinReel(newMachine.reel2);
    var reel3Result = newMachine.spinReel(newMachine.reel3);

    for ( index = 0; index <= newMachine.symbols.length; index++ ) {
      if (reel1Result === newMachine.symbols[index]) {
        for ( i = 0; i < newMachine.symbolImages.length; i++) {
          if ( index === i ) {
            $(".reel1output").append("<img src='img/" + newMachine.symbolImages[index] + "'>");
          }
        }
      }
    }

    newMachine.winningCombo(reel1Result, reel2Result, reel3Result);

  });
});
