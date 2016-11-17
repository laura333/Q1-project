'use strict';

var human = prompt("Select rock, paper, or scissors.");
var computer = Math.random();

if(computer < .33){
  computer = "rock";
} else if (computer > .33 && computer < .66){
  computer = "paper";
} else {
  computer = "scissors";
}

function compareChoices (human) {
  var winner;
if(human === "rock"){
  if(computer === "rock"){
    console.log("Tie!");
    winner = "It's a tie. No one wins.";
  } else if(computer === "paper"){
    winner = "You chose rock. Computer chose paper. Computer wins.";
  } else {
    winner = "You chose rock. Computer chose scissors. You wins!";
  }
} else if(human === "paper"){
  if(computer === "paper"){
    console.log("Tie!");
    winner = "It's a tie. No one wins.";
  } else if(computer === "scissors"){
    winner = "You chose paper. Computer chose scissors. Computer wins.";
  } else {
    winner = "You chose paper. Computer chose rock. You win!";
  }
} else if(human === "scissors"){
  if(computer === "scissors"){
    console.log("Tie!");
    winner = "It's a tie. No one wins.";
  } else if(computer === "rock"){
    winner = "You chose scissors. Computer chose rock. Computer wins.";
  } else {
    winner = "You chose scissors. Computer chose paper. You win!";
  }
} else {
  alert("Can't you read? You were supposed to choose rock, paper or scissors.");
  winner = "No one"
}
}
