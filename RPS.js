/*  Some ideas for fixing and expanding:

What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?

What if players in the game could also choose Rope in this game?

In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices? */

// Defining initial variables.
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

// Outlining the logic for the Computer opponent's potential choices.
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log ("Your computer overlord has chosen " + computerChoice + ".");

// Function to compare the User and Computer results, and then choose a victor.
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock wins!";
        }
        else {
            return "Paper wins!"
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper wins!";
        }
        else {
            return "Scissors wins!";
        }
    }
};

// Announce the winner.
compare (userChoice, computerChoice);
