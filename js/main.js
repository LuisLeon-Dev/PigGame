"use stric";

//varuables
const playerScore0 = document.getElementById("score--0");
const playerScore1 = document.getElementById("score--1");
const playerCurrentScore0 = document.getElementById("current--0");
const playerCurrentScore1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let currentScore = 0;

//set all to start a games
playerScore0.textContent = 0;
playerScore1.textContent = 0;
dice.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  //generate random number between 1 and 6
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `../img/dice-${diceRoll}.png`;

  if (dice != 1) {
    currentScore += diceRoll;
    playerCurrentScore0.textContent = currentScore;
  } else {
    //switch to next player
  }
});
