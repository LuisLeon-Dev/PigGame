"use stric";

//varuables
const playerSection0 = document.querySelector(".player--0");
const playerSection1 = document.querySelector(".player--1");
const playerScore0 = document.getElementById("score--0");
const playerScore1 = document.getElementById("score--1");
const playerCurrentScore0 = document.getElementById("current--0");
const playerCurrentScore1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore, activePlayer, playing, scores;

const startGame = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerScore0.textContent = 0;
  playerScore1.textContent = 0;
  playerCurrentScore0.textContent = 0;
  playerCurrentScore1.textContent = 0;
  dice.classList.add("hidden");

  playerSection0.classList.remove("player--winner");
  playerSection1.classList.remove("player--winner");
  playerSection0.classList.add("player--active");
  playerSection1.classList.remove("player--active");
};

startGame();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerSection0.classList.toggle("player--active");
  playerSection1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (playing) {
    //generate random number between 1 and 6
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `../img/dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      document.getElementById(`name--${activePlayer}`).textContent = "WINNER!";
    }

    switchPlayer();
  }
});

btnNew.addEventListener("click", startGame);
