var wins = 0;
var losses = 0;
var ties = 0;

function playGame() {

alert("Welcome to the game, Rock, Paper, Scissors! In this game, rock beats scissors, scissors beats paper, and paper beats rock. Please enter r, p, or s to play.");

var userChoice = prompt("Enter r, p, or s");

console.log("userChoice is " + userChoice);

var choice = ["r", "p", "s"];

var randomNumber = Math.floor(Math.random() * 3);

var computerChoice = choice[randomNumber];

console.log("computerChoice is " + computerChoice);

if (userChoice === computerChoice) {
        alert("You tied!");
        ties++;
} else if (
    (userChoice === "r") && (computerChoice === "s") ||
    (userChoice === "p" && computerChoice === "r") ||
    (userChoice === "s" && computerChoice === "p")
) {
        alert("You win!");
        wins++;
} else if (
    (userChoice === "r" && computerChoice === "p") ||
    (userChoice === "p" && computerChoice === "s") ||
    (userChoice === "s" && computerChoice === "r")
) {
        alert("You lose!");
        losses++;
};

console.log("There are: \n" +
wins + " wins + \n" +
losses + " losses + \n " +
ties + " ties");

alert("There are: + \n" +
wins + " wins + \n" +
losses + " losses + \n" +
ties + " ties");

var playAgain = confirm("Do you want to play again?");

if (playAgain) {
    playGame();
}
}

playGame();







