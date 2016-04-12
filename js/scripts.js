// Business Logic

function Machine () {
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.reel3 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
}
 function Player () {
   this.bankRoll = 20
 }
Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  console.log(reelStop);

  return reelStop;
}
// Runs through winningReel arrary to check for winning combinations//
Machine.prototype.winningCombo = function() {
      var winningReel = [];
      winningReel[0] = reel1Result
      for (i = 0; i <= winningReel.length; i++) {
        if ( (winningReel[0] === "pumpkins") || (winningReel[1] === "pumpkins") || (winningReel[2] === "pumpkins") ) {
          this.bankRoll += 2;
      } if ( (winningReel[0] === "pumpkins" && winningReel[1] === "pumpkins") || (winningReel[0] === "pumpkins" && winningReel[2] === "pumpkins") || (winningReel[1] === "pumpkins" && winningReel[2] === "pumpkins") ) {
          this.bankroll += 4;
      } if ( (winningReel[0] === "pumpkins" && winningReel[1] === "pumpkins" && winningReel[2] === "pumpkins") ) {
          this.bankroll += 12;
      } if ( (winningReel[0] === "candy" && winningReel[1] === "candy") || (winningReel[0] === "candy" && winningReel[2] === "candy") || (winningReel[1] === "candy" && winningReel[2] === "candy") ) {
          this.bankroll += 6;
      } if ( (winningReel[0] === "candy" && winningReel[1] === "candy" && winningReel[2] === "candy") ) {
          this.bankroll += 18;
      } if ( (winningReel[0] === "black cat" && winningReel[1] === "black cat") || (winningReel[0] === "black cat" && winningReel[2] === "black cat") || (winningReel[1] === "black cat" && winningReel[2] === "black cat") ) {
          this.bankroll += 12;
      } if ( (winningReel[0] === "black cat" && winningReel[1] === "black cat" && winningReel[2] === "black cat") ) {
          this.bankroll += 36;
      } if ( (winningReel[0] === "witches" && winningReel[1] === "witches" && winningReel[2] === "witches") ) {
          this.bankroll += 64;
      } if ( (winningReel[0] === "ghosts" && winningReel[1] === "ghosts" && winningReel[2] === "ghosts") ) {
          this.bankroll += 100;
      } if ( (winningReel[0] === "bats" && winningReel[1] === "bats" && winningReel[2] === "bats") ) {
          this.bankroll += 175;
      } if ( (winningReel[0] === "werewolf" && winningReel[1] === "werewolf" && winningReel[2] === "werewolf") ) {
          this.bankroll += 250;
      } if ( (winningReel[0] === "vampires" && winningReel[1] === "vampires" && winningReel[2] === "vampires") ) {
          this.bankroll += 500;
      } if ( (winningReel[0] === "zombies" && winningReel[1] === "zombies" && winningReel[2] === "zombies") ) {
          this.bankroll += 1000;
      } if ( (winningReel[0] === "grim reaper" && winningReel[1] === "grim reaper" && winningReel[2] === "grim reaper") ) {
          this.bankroll += 10000;
      } else {
        return (false);
      }
    }

}

// User Interface Logic

$(document).ready(function() {

  var newMachine = new Machine();

  $("#spin").click(function(event) {
    event.preventDefault();

    $(".reel1output").append(newMachine.spinReel(newMachine.reel1));
    $(".reel2output").append(newMachine.spinReel(newMachine.reel2));
    $(".reel3output").append(newMachine.spinReel(newMachine.reel3));

    var reel1Result = newMachine.spinReel(newMachine.reel1);
    var reel2Result = newMachine.spinReel(newMachine.reel2);
    var reel3Result = newMachine.spinReel(newMachine.reel3);

    newMachine.winningCombo(reel1Result, reel2Result, reel3Result);

  });
});
