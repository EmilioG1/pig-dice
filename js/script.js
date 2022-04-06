/*
-two users take turns rolling dice (dice roll is a click event)
-each gets to roll until a one is rolled or they hold (perhaps include a hold button?)
-each turn if a user holds they keep their recent tally, if they roll one they lose the score for that turn
-score each turn is added to a running total
-first user to reach 100 pts wins
-player1, player2, roll, score, win (return bool)
*/

// business logic
// constructor function blueprint for each player turn
let player1 = "sam";
let player2 = "bill";

function PigDice() {
  this.player1 = {};
  this.player2 = {};
}

PigDice.prototype.addPlayer = function(player) {
  if (player != undefined) {
    player1 = this.player;
  } else if (player != player1) {
    player2 = this.player;
  }
};

// ui logic

let pigDiceGame = new PigDice();


$(document).ready(function() {
  $("form#player-one").submit(function(event) {
    event.preventDefault();
    const inputtedPlayerOne = $("input#new-player-one").val();
    console.log(inputtedPlayerOne);
    const inputtedPlayerTwo = $("input#new-player-two").val();
    console.log(inputtedPlayerTwo);
  });
});