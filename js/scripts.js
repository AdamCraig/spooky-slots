// Business Logic

function Machine () {
  this.symbols = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];

  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "candy", "black cat", "black cat"];

  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "black cat", "witch"];

  this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "skull", "skull", "skull", "pumpkin", "pumpkin", "candy", "black cat", "witch", "zombie"];
}

 function Player () {
   this.bankRoll = 20;
 }

Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  console.log(reelStop);
  return reelStop;
}
// Runs through winningReel array to check for winning combinations//
Machine.prototype.winningCombo = function(reel1Result, reel2Result, reel3Result, newPlayer) {
      var winningReel = [];
      var winType = "";

      winningReel.push(reel1Result);
      winningReel.push(reel2Result);
      winningReel.push(reel3Result);

      for (i = 0; i < winningReel.length; i++) {
        if (winningReel[0] === "grim reaper" && winningReel[1] === "grim reaper" && winningReel[2] === "grim reaper")  {
           newPlayer.bankRoll += 10000;
           winType = "You won $10000!";
           return winType;
        } else if (winningReel[0] === "zombie" && winningReel[1] === "zombie" && winningReel[2] === "zombie")  {
            newPlayer.bankRoll += 1000;
            winType = "You won $1000!";
            return winType;
        } else if (winningReel[0] === "vampire" && winningReel[1] === "vampire" && winningReel[2] === "vampire")  {
            newPlayer.bankRoll += 500;
            winType = "You won $500!";
            return winType;
        } else if (winningReel[0] === "werewolf" && winningReel[1] === "werewolf" && winningReel[2] === "werewolf") {
            newPlayer.bankRoll += 250;
            winType = "You won $250!";
            return winType;
        } else if (winningReel[0] === "bat" && winningReel[1] === "bat" && winningReel[2] === "bat") {
            newPlayer.bankRoll += 175;
            winType = "You won $175!";
            return winType;
        } else if (winningReel[0] === "ghost" && winningReel[1] === "ghost" && winningReel[2] === "ghost")  {
            newPlayer.bankRoll += 100;
            winType = "You won $100!";
            return winType;
        } else if (winningReel[0] === "witch" && winningReel[1] === "witch" && winningReel[2] === "witch")  {
            newPlayer.bankRoll += 64;
            winType = "You won $64!";
            return winType;
        } else if (winningReel[0] === "black cat" && winningReel[1] === "black cat" && winningReel[2] === "black cat")  {
            newPlayer.bankRoll += 36;
            winType = "You won $36!";
            return winType;
        } else if (winningReel[0] === "candy" && winningReel[1] === "candy" && winningReel[2] === "candy")  {
            newPlayer.bankRoll += 18;
            winType = "You won $18!";
            return winType;
        } else if (winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin")  {
            newPlayer.bankRoll += 12;
            winType = "You won $12!";
            return winType;
        } else if ((winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin") || (winningReel[0] === "pumpkin" && winningReel[2] === "pumpkin") || (winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin")) {
            newPlayer.bankRoll += 4;
            winType = "You won $4!";
            return winType;
        } else if ((winningReel[0] === "pumpkin") || (winningReel[1] === "pumpkin") || (winningReel[2] === "pumpkin")) {
            newPlayer.bankRoll += 2;
            winType = "You won $2!";
            return winType;
        } else if (winningReel[0] === "skull" && winningReel[1] === "skull" && winningReel[2] === "skull") {
          newPlayer.bankRoll -= (Math.floor(newPlayer.bankRoll * 0.9));
          return winType = "You just lost 90% of your bank roll. Go grab yourself a free coffee from the lounge!";
        } else {
            winType = "No matches. Spin again.";
            return winType;
          }
        }
      }

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();
  var newPlayer = new Player();

  $("#spin").click(function(event) {
    event.preventDefault();

    if (newPlayer.bankRoll >= 1) {
      newPlayer.bankRoll -= 1;

      $(".reel1output").empty();
      $(".reel2output").empty();
      $(".reel3output").empty();

      var reel1Result = newMachine.spinReel(newMachine.reel1);
      var reel2Result = newMachine.spinReel(newMachine.reel2);
      var reel3Result = newMachine.spinReel(newMachine.reel3);

      for ( index = 0; index <= newMachine.symbols.length; index++ ) {
        if (reel1Result === newMachine.symbols[index]) {
          $(".reel1output").append("<img src='img/" + reel1Result + ".jpg'>");
        }
      }

      for ( index = 0; index <= newMachine.symbols.length; index++ ) {
        if (reel2Result === newMachine.symbols[index]) {
          $(".reel2output").append("<img src='img/" + reel2Result + ".jpg'>");
        }
      }

      for ( index = 0; index <= newMachine.symbols.length; index++ ) {
        if (reel3Result === newMachine.symbols[index]) {
          $(".reel3output").append("<img src='img/" + reel3Result + ".jpg'>");
        }
      }

      if (newPlayer.bankRoll >= 1) {
        var checkCurrentWinAmount = newMachine.winningCombo(reel1Result, reel2Result, reel3Result, newPlayer);
        $(".total-bank-roll").text("$" + newPlayer.bankRoll);
        $(".last-spin-winnings").text(checkCurrentWinAmount);
      } else {
        $(".hideWhenCashoutOrBust").hide();
        $("#results").show();
        $(".resultCashOut").hide();
      }
    }
  });

  $("#play-again").click(function(event) {
    location.reload();
  });

  $("#cash-out").click(function(event) {
    $(".hideWhenCashoutOrBust").hide();
    $("#results").show();
    $(".resultBust").hide();
    $(".finalBankRoll").text("$" + newPlayer.bankRoll);
    $(".finalBankRoll").show();
  });

});
