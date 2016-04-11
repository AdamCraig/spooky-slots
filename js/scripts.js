function Machine () {
  this.reel1 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
  this.reel2 = ["skull", "candy", "ghost", "bat", "witch", "pumpkins", "werewolf", "zombies", "vampires", "black cat", "grim reaper"];
}

Machine.prototype.spinReel = function(reel) {
  var reelStop = reel[Math.floor(Math.random() * reel.length)];
  console.log(reelStop);

  return reelStop;
}

Machine.prototype.winningCombo = function() {

}

$(document).ready(function() {

  var newMachine = new Machine();

  $("#spin").click(function(event) {
    event.preventDefault();

    $(".reel1output").append(newMachine.spinReel(newMachine.reel1));
    $(".reel2output").append(newMachine.spinReel(newMachine.reel2));
    // $(".reel3output").append(newMachine.spinReels(reel3));

  });
});
