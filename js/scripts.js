// Business Logic

function Machine () {
  this.symbols = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper"];
  //
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "candy", "black cat", "black cat", "bat", "bat"];

  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "candy", "black cat", "witch", "bat", "bat"];

  this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkin", "werewolf", "zombie", "vampire", "black cat", "grim reaper", "skull", "skull", "skull", "pumpkin", "pumpkin", "candy", "black cat", "witch", "zombie", "bat", "bat"];

  // this.reel1 = ["skull"];
  // this.reel2 = ["skull"];
  // this.reel3 = ["skull"];

  // this.reel1 = ["grim reaper"];
  // this.reel2 = ["grim reaper"];
  // this.reel3 = ["grim reaper"];
  //
  // this.reel1 = ["candy"];
  // this.reel2 = ["candy"];
  // this.reel3 = ["candy"];
  //
  // this.reel1 = ["ghost"];
  // this.reel2 = ["ghost"];
  // this.reel3 = ["ghost"];
  // //
  // this.reel1 = ["bat"];
  // this.reel2 = ["bat"];
  // this.reel3 = ["bat"];
  //
  // this.reel1 = ["witch"];
  // this.reel2 = ["witch"];
  // this.reel3 = ["witch"];

  // this.reel1 = ["pumpkin"];
  // this.reel2 = ["pumpkin"];
  // this.reel3 = ["pumpkin"];
  //
  // this.reel1 = ["werewolf"];
  // this.reel2 = ["werewolf"];
  // this.reel3 = ["werewolf"];

  // this.reel1 = ["zombie"];
  // this.reel2 = ["zombie"];
  // this.reel3 = ["zombie"];
  //
  // this.reel1 = ["vampire"];
  // this.reel2 = ["vampire"];
  // this.reel3 = ["vampire"];
  //
  // this.reel1 = ["black cat"];
  // this.reel2 = ["black cat"];
  // this.reel3 = ["black cat"];
}

function Player () {
   this.bankRoll = 20;
}


Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  return reelStop;
}
// Runs through winningReel array to check for winning combinations//
Machine.prototype.winningCombo = function(reel1Result, reel2Result, reel3Result, newPlayer) {
      var winningReel = [];
      var winType = "";
      var audio = new Audio('audio/slot.mp3');
      var spinReelAudio = new Audio('audio/spinreel.mp3');
      var skull = new Audio('audio/skull.mp3');
      var blackCat = new Audio('audio/black cat.mp3');
      var witch = new Audio('audio/witch.mp3');
      var vampire = new Audio('audio/vampire.mp3');
      var zombie = new Audio('audio/zombie.mp3');
      var ghost = new Audio('audio/ghost.mp3');
      var zombie = new Audio('audio/zombie.mp3');
      var pumpkin = new Audio('audio/pumpkin.mp3');
      var candy = new Audio('audio/candy.mp3');
      var grimReaper = new Audio('audio/grimreaper.mp3');
      var devil = new Audio('audio/devil.mp3');
      var voodoo = new Audio('audio/voodoo.mp3');
      var buzzLoss = new Audio('audio/buzzloss.mp3');
      var clip1Loss = new Audio('audio/clip1loss.mp3');
      var clip2Loss = new Audio('audio/clip2loss.mp3');
      var tromboneLoss = new Audio('audio/tromboneloss.mp3');
      var gameShowLoss = new Audio('audio/gameshowloss.mp3');
      var losingLaugh = new Audio('audio/losing laugh.mp3');

      winningReel.push(reel1Result);
      winningReel.push(reel2Result);
      winningReel.push(reel3Result);

      for (i = 0; i < winningReel.length; i++) {
        if (winningReel[0] === "grim reaper" && winningReel[1] === "grim reaper" && winningReel[2] === "grim reaper")  {
           newPlayer.bankRoll += 10000;
           winType = "You won $10000!";
         setTimeout(function() { grimReaper.play(); }, 7300);
           return winType;
        } else if (winningReel[0] === "zombie" && winningReel[1] === "zombie" && winningReel[2] === "zombie")  {
            newPlayer.bankRoll += 1000;
            winType = "You won $1000!";
            setTimeout(function() { zombie.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "vampire" && winningReel[1] === "vampire" && winningReel[2] === "vampire")  {
            newPlayer.bankRoll += 500;
            winType = "You won $500!";
            setTimeout(function() { vampire.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "werewolf" && winningReel[1] === "werewolf" && winningReel[2] === "werewolf") {
            newPlayer.bankRoll += 250;
            winType = "You won $250!";
            setTimeout(function() { devil.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "bat" && winningReel[1] === "bat" && winningReel[2] === "bat") {
            newPlayer.bankRoll += 175;
            winType = "You won $175!";
            setTimeout(function() { voodoo.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "ghost" && winningReel[1] === "ghost" && winningReel[2] === "ghost")  {
            newPlayer.bankRoll += 100;
            winType = "You won $100!";
            setTimeout(function() { ghost.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "witch" && winningReel[1] === "witch" && winningReel[2] === "witch")  {
            newPlayer.bankRoll += 64;
            winType = "You won $64!";
            setTimeout(function() { witch.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "black cat" && winningReel[1] === "black cat" && winningReel[2] === "black cat")  {
            newPlayer.bankRoll += 36;
            winType = "You won $36!";
            setTimeout(function() { blackCat.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "candy" && winningReel[1] === "candy" && winningReel[2] === "candy")  {
            newPlayer.bankRoll += 18;
            winType = "You won $18!";
            setTimeout(function() { candy.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin")  {
            newPlayer.bankRoll += 12;
            winType = "You won $12!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if ((winningReel[0] === "pumpkin" && winningReel[1] === "pumpkin") || (winningReel[0] === "pumpkin" && winningReel[2] === "pumpkin") || (winningReel[1] === "pumpkin" && winningReel[2] === "pumpkin")) {
            newPlayer.bankRoll += 4;
            winType = "You won $4!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if ((winningReel[0] === "pumpkin") || (winningReel[1] === "pumpkin") || (winningReel[2] === "pumpkin")) {
            newPlayer.bankRoll += 2;
            winType = "You won $2!";
            setTimeout(function() { pumpkin.play(); }, 7300);
            return winType;
        } else if (winningReel[0] === "skull" && winningReel[1] === "skull" && winningReel[2] === "skull") {
            newPlayer.bankRoll -= (Math.floor(newPlayer.bankRoll * 0.9));
            setTimeout(function() { skull.play(); }, 7300);
            return winType = "You just lost 90% of your bank roll. Go grab yourself a free coffee from the lounge!";
        } else {
            winType = "No winning matches. Spin again.";

            var randomLoss = Math.floor(Math.random() * 6);

            if (randomLoss === 0) {
              setTimeout(function() { losingLaugh.play(); }, 7300);
            } else if (randomLoss === 1) {
              setTimeout(function() { buzzLoss.play(); }, 7300);
            } else if (randomLoss === 2) {
              setTimeout(function() { clip1Loss.play(); }, 7300);
            } else if (randomLoss === 3) {
              setTimeout(function() { clip2Loss.play(); }, 7300);
            } else if (randomLoss === 4) {
              setTimeout(function() { tromboneLoss.play(); }, 7300);
            } else if (randomLoss === 5) {
              setTimeout(function() { gameShowLoss.play(); }, 7300);
            }
            return winType;
          }
        }
      }

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();
  var newPlayer = new Player();

  var reel1Counter = 0, reel1Cycles = 50;
  var reel2Counter = 0, reel2Cycles = 70;
  var reel3Counter = 0, reel3Cycles = 90;

  function spinFlash1() {
  $(".reel1output").empty();
  $(".reel1output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel1Counter++;
    if( reel1Counter < reel1Cycles ){
      setTimeout( spinFlash1, 70 );
    }
  }

  function spinFlash2() {
  $(".reel2output").empty();
  $(".reel2output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel2Counter++;
    if( reel2Counter < reel2Cycles ){
      setTimeout( spinFlash2, 70 );
    }
  }

  function spinFlash3() {
  $(".reel3output").empty();
  $(".reel3output").append("<img src='img/" + newMachine.symbols[Math.floor(Math.random() * newMachine.symbols.length)] + ".jpg'>");
  reel3Counter++;
    if( reel3Counter < reel3Cycles ){
      setTimeout( spinFlash3, 70 );
    }
  }

  $("#spin").click(function(event) {
    event.preventDefault();

    $("#spin-button").hide().delay(9000).fadeIn();
    $("#total-bank-roll").hide().delay(9000).fadeIn();
    $("#last-spin-winnings").hide().delay(9000).fadeIn();
    $(".container").slideUp().delay(9000).slideDown();
    $(".winningsAlert").delay(7300).fadeIn().delay(1690).slideUp();

    var slotPull = new Audio('audio/slotPull.mp3');
    var wheelStop12 = new Audio('audio/wheel stop 1 2.mp3');
    var wheelStop3 = new Audio('audio/wheel stop 3.mp3');

    slotPull.play();

    setTimeout(function() { wheelStop12.play(); }, 3500);
    setTimeout(function() { wheelStop12.play(); }, 4900);
    setTimeout(function() { wheelStop3.play(); }, 6300);

    if (newPlayer.bankRoll >= 1) {
      newPlayer.bankRoll -= 1;

      reel1Counter = 0;
      reel2Counter = 0;
      reel3Counter = 0;

      var reel1Result = newMachine.spinReel(newMachine.reel1);
      var reel2Result = newMachine.spinReel(newMachine.reel2);
      var reel3Result = newMachine.spinReel(newMachine.reel3);

      // START REEL1 IMAGE DISPLAY

      spinFlash1();
      setTimeout(function() { $(".reel1output").empty(); $(".reel1output").append("<img src='img/" + reel1Result + ".jpg' class='img responsive'>"); }, 3500);

      $(".reel1output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

      // START REEL2 IMAGE DISPLAY

      spinFlash2();
      setTimeout(function() { $(".reel2output").empty(); $(".reel2output").append("<img src='img/" + reel2Result + ".jpg' class='img responsive'>"); }, 4950);

      $(".reel2output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

      // START REEL3 IMAGE DISPLAY

      spinFlash3();
      setTimeout(function() { $(".reel3output").empty(); $(".reel3output").append("<img src='img/" + reel3Result + ".jpg' class='img responsive'>"); }, 6375);

      $(".reel3output").fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn().delay(1).fadeOut().delay(1).fadeIn();

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
