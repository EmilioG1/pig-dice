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
function Player(totalScore, rollScore, turnScore) {
  this.totalScore = totalScore;
  this.rollScore = rollScore;
  this.turnScore = turnScore;
}

// constructors for both players
let player1 = new Player(0, 0, 0);
let player2 = new Player(0, 0, 0);

Player.prototype.rollDice = function() {
  this.rollScore = Math.floor((Math.random() * 6) + 1);
  if (this.rollScore === 1) {
    this.rollScore = 0;
    this.turnScore = 0;
    return this.turnEnd();
  }
  this.turnScore += this.rollScore;
  return this;
};
Player.prototype.turnEnd = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.rollScore = 0;
  win();
  return this;
};

// also throw click functions
function win() {
  if (player1.totalScore >= 100) {
    $("#player1-wins").show();
    $("#game").hide();
  } if (player2.totalScore >= 100) {
    $("#player2-wins").show();
    $("#game").hide();
  }
}


// cascading issue, throw under click functions
function roll(player) {
  $(".dice1").hide();
  $(".dice2").hide();
  $(".dice3").hide();
  $(".dice4").hide();
  $(".dice5").hide();
  $(".dice6").hide();
  $("#diceRow").show();
  if (player.rollScore === 0) {
    $(".dice1").show();
    $("#buttons1").toggle();
    $("#buttons2").toggle();
  } else if (player.rollScore === 2) {
    $(".dice2").show();
  } else if (player.rollScore === 3) {
    $(".dice3").show();
  } else if (player.rollScore === 4) {
    $(".dice4").show();
  } else if (player.rollScore === 5) {
    $(".dice5").show();
  } else if (player.rollScore === 6) {
    $(".dice6").show();
  }
}

$(document).ready(function() {
  $("button#roll1").click(function (event) {
    event.preventDefault();
    player1.rollDice();
    roll(player1);
    $("#p1-total").html(player1.totalScore);
    $("#p1-current").html(player1.turnScore);
  });

  $("button#end1").click(function (event) {
    event.preventDefault;
    player1.turnEnd();
    $("#p1-total").html(player1.totalScore);
    $("#p1-current").html(player1.turnScore)
    $("#buttons1").hide();
    $("#buttons2").show();
    // $("#dicerow").hide();
    // $(".nodice").show();
  });

  $("button#roll2").click(function (event) {
    event.preventDefault();
    player2.rollDice();
    roll(player2);
    $("#p2-total").html(player2.totalScore);
    $("#p2-current").html(player2.turnScore);
  });

  $("button#end2").click(function (event) {
    event.preventDefault;
    player2.turnEnd();
    $("#p2-total").html(player2.totalScore);
    $("#p2-current").html(player2.turnScore)
    $("#buttons2").hide();
    $("#buttons1").show();
    // $("#dicerow").hide();
    // $(".nodice").show();
  });

});