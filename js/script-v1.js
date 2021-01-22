// Redirect the user to the game page when he click start button
$(function () {
    $("#start-button").click(function () {
        window.open("game.html", "_self");
    });

    const gameOptionsDiv = document.getElementsByClassName("col");
    $(gameOptionsDiv[0]).click(function () {
        $("#results").text(playGameWithComputer("paper"));
    });
    $(gameOptionsDiv[1]).click(function () {
        $("#results").text(playGameWithComputer("rock"));
    });
    $(gameOptionsDiv[2]).click(function () {
        $("#results").text(playGameWithComputer("pascissorsper"));
    });
});

const playGameWithComputer = (player) => {
    let rockPaperScissors = ["paper", "scissors", "rock"];
    let computer = rockPaperScissors[Math.floor(Math.random() * 2)];

    if (player === "paper" && computer === "scissors") {
        return "You lose! The computer picked scissors";
    }
    else if (player === "paper" && computer === "rock") {
        return "You win! The computer picked rock";
    }
    else if (player === "rock" && computer === "scissors") {
        return "You win! The computer picked scissors";
    }
    else if (player === "rock" && computer === "paper") {
        return "You lose! The computer picked paper";
    }
    else if (player === "scissors" && computer === "paper") {
        return "You win! The computer picked paper";
    }
    else if (player === "scissors" && computer === "rock") {
        return "You lose! The computer picked rock";
    }
    else {
        return "Tie!"
    }
}