// Business Logic

function Machine () {
  this.symbols = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];
  this.symbolImages = ["skull.jpg", "candy.jpg", "ghost.jpg"];
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];
  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];
  this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];
}
 function Player () {
   this.bankRoll = 20;
 }
Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  console.log(reelStop);
  return reelStop;
}
// Runs through winningReel arrary to check for winning combinations//
Machine.prototype.winningCombo = function(reel1Result, reel2Result, reel3Result, newPlayer) {
      var winningReel = [];
      var winType = "";

      winningReel.push(reel1Result);
      winningReel.push(reel2Result);
      winningReel.push(reel3Result);

      for (i = 0; i < winningReel.length; i++) {
        if ( (winningReel[0] === "pumpkin") || (winningReel[1] === "pumpkin") || (winningReel[2] === "pumpkin") ) {
          newPlayer.bankRoll += 2;
          winType = "You won $2!";
          console.log("adding 2");
      } if ( (winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin") || (winningReel[0] === "pumpkin" && winningReel[2] === "pumpkin") || (winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin") ) {
          newPlayer.bankroll += 4;
          winType = "You won $4!";
          console.log("adding 4");
      } if ( (winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin") ) {
          newPlayer.bankroll += 12;
          winType = "You won $12!";
      } if ( (winningReel[0] === "candy" && winningReel[1] === "candy" && winningReel[2] === "candy") ) {
          newPlayer.bankroll += 18;
          winType = "You won $18!";
      } if ( (winningReel[0] === "black cat" && winningReel[1] === "black cat" && winningReel[2] === "black cat") ) {
          newPlayer.bankroll += 36;
          winType = "You won $36!";
      } if ( (winningReel[0] === "witch" && winningReel[1] === "witch" && winningReel[2] === "witch") ) {
          newPlayer.bankroll += 64;
          winType = "You won $64!";
      } if ( (winningReel[0] === "ghost" && winningReel[1] === "ghost" && winningReel[2] === "ghost") ) {
          newPlayer.bankroll += 100;
          winType = "You won $100!";
      } if ( (winningReel[0] === "bat" && winningReel[1] === "bat" && winningReel[2] === "bat") ) {
          newPlayer.bankroll += 175;
          winType = "You won $175!";
      } if ( (winningReel[0] === "werewolf" && winningReel[1] === "werewolf" && winningReel[2] === "werewolf") ) {
          newPlayer.bankroll += 250;
          winType = "You won $250!";
      } if ( (winningReel[0] === "vampire" && winningReel[1] === "vampire" && winningReel[2] === "vampire") ) {
          newPlayer.bankroll += 500;
          winType = "You won $500!";
      } if ( (winningReel[0] === "zombie" && winningReel[1] === "zombie" && winningReel[2] === "zombie") ) {
          newPlayer.bankroll += 1000;
          winType = "You won $1000!";
      } if ( (winningReel[0] === "grim reaper" && winningReel[1] === "grim reaper" && winningReel[2] === "grim reaper") ) {
          newPlayer.bankroll += 10000;
          winType = "You won $10000!";
      } else {
        return false;
        winType = "No matches. Spin again.";
      }
    }

    return winType;
}

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();
  var newPlayer = new Player();

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

    newMachine.winningCombo(reel1Result, reel2Result, reel3Result, newPlayer);
    console.log(newPlayer.bankRoll);

  });
});
