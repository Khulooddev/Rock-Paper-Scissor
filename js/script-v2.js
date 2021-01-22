const imgArray = [
  '/assests/noun_Hand_rock.svg',
  '/assests/noun_five_fingers.svg',
  '/assests/noun_two_fingers.svg',
];
const gameOptionsDiv = document.getElementsByClassName("col");
let result = [];
result[2] = 0;
let loseCount = 0;
let winingCount = 0;

$(function () {
  $(gameOptionsDiv[0]).click(function () {
    result = playGameWithComputer("rock");
    $(".col").off("click");
    gameOptionsDiv[1].innerHTML = `<p id="game-paragraph">Score: ${result[2]}<br><span id="game-result">${result[0]}</span><br><a href="javascript:window.location.reload();" id="game-restart">Try Again?</a></br><a href="javascript:window.open('game-results.html', '_self')" id="go-game-results">Check Results</a></p><br>`;
    gameOptionsDiv[2].innerHTML = `<img src= ${result[1]} />`;
    console.log(result[1]);
  });
  $(gameOptionsDiv[1]).click(function () {
    result = playGameWithComputer("paper");
    $(".col").off("click");
    gameOptionsDiv[0].innerHTML = `<img src= ${imgArray[1]} />`;
    gameOptionsDiv[1].innerHTML = `<p id="game-paragraph">Score: ${result[2]}<br><span id="game-result">${result[0]}</span><br><a href="javascript:window.location.reload();" id="game-restart">Try Again?</a></br><a href="javascript:window.open('game-results.html', '_self')" id="go-game-results">Check Results</a></p><br>`;
    gameOptionsDiv[2].innerHTML = `<img src= ${result[1]} />`;
  });
  $(gameOptionsDiv[2]).click(function () {
    result = playGameWithComputer("scissors");
    $(".col").off("click");
    gameOptionsDiv[0].innerHTML = `<img src= ${imgArray[2]} />`;
    gameOptionsDiv[1].innerHTML = `<p id="game-paragraph">Score: ${result[2]}<br><span id="game-result">${result[0]}</span><br><a href="javascript:window.location.reload();" id="game-restart">Try Again?</a></br><a href="javascript:window.open('game-results.html', '_self')" id="go-game-results">Check Results</a></p><br>`;
    gameOptionsDiv[2].innerHTML = `<img src= ${result[1]} />`;
  });
});

// function
const playGameWithComputer = (player) => {
  const rockPaperScissors = ["paper", "scissors", "rock"];
  let computer = rockPaperScissors[Math.floor(Math.random() * 2)];

  if (player === "paper" && computer === "scissors") {
    result[0] = "lose";
    result[1] = imgArray[2];
    result[2] = -1;
    loseCount = Number(sessionStorage.getItem("lose-counter"));
    loseCount++;
    sessionStorage.setItem("lose-counter", loseCount);
    return result;
  } else if (player === "paper" && computer === "rock") {
    result[0] = "win";
    result[1] = imgArray[0];
    result[2] = 1;
    winingCount = Number(sessionStorage.getItem("wining-counter"));
    winingCount++;
    sessionStorage.setItem("wining-counter", winingCount);
    return result;
  } else if (player === "rock" && computer === "scissors") {
    result[0] = "win";
    result[1] = imgArray[2];
    result[2] = 1;
    winingCount = Number(sessionStorage.getItem("wining-counter"));
    winingCount++;
    sessionStorage.setItem("wining-counter", winingCount);
    return result;
  } else if (player === "rock" && computer === "paper") {
    result[0] = "lose";
    result[1] = imgArray[1];
    result[2] = -1;
    loseCount = Number(sessionStorage.getItem("lose-counter"));
    loseCount++;
    sessionStorage.setItem("lose-counter", loseCount);
    return result;
  } else if (player === "scissors" && computer === "paper") {
    result[0] = "win";
    result[1] = imgArray[1];
    result[2] = 1;
    winingCount = Number(sessionStorage.getItem("wining-counter"));
    winingCount++;
    sessionStorage.setItem("wining-counter", winingCount);
    return result;
  } else if (player === "scissors" && computer === "rock") {
    result[0] = "lose";
    result[1] = imgArray[0];
    result[2] = -1;
    loseCount = Number(sessionStorage.getItem("lose-counter"));
    loseCount++;
    sessionStorage.setItem("lose-counter", loseCount);
    return result;
  } else {
    if (player === "scissors") {
      result[0] = "tie";
      result[1] = imgArray[2];
      return result;
    } else if (player === "rock") {
      result[0] = "tie";
      result[1] = imgArray[0];
      return result;
    } else if (player === "paper") {
      result[0] = "tie";
      result[1] = imgArray[1];
      return result;
    }
  }
};


