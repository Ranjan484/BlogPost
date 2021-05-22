"use strict";
// 1. Define secret number
// 2. Score matched
// 3. Score too low
// 4. Score too high
// 5. Update Score

// event is happening at check button
// we will use add event listner method

const guessNumber = document.querySelector(".number");
const check = document.querySelector(".check");
let message = document.querySelector(".message");
let domScore = document.querySelector(".score");
let domHighScore = document.querySelector(".highscore");
const reset = document.querySelector(".again");
let input = document.querySelector(".guess");
let score = 20;
let highScore = 0;
let number = 0;

// RANDOM VALUE

number = Math.trunc(Math.random() * 20 + 1);
// CHECK FUNC
check.addEventListener("click", function () {
  const guess = Number(input.value);
  if (!guess) {
    message.textContent = "🚩 No number";
  } else if (guess === number) {
    message.textContent = "✔️ Correct Number";
    document.body.style.background = "Green";
    guessNumber.textContent = number;
    if (highScore < score) {
      highScore = score;
      domHighScore.textContent = score;
    }
  } else if (guess > number) {
    evaulate("high");
  } else if (guess < number) {
    evaulate("low");
  }
  function evaulate(value) {
    if (score > 1) {
      message.textContent = `📉 Guess is too ${value}`;
      score--;
      domScore.textContent = score;
    } else {
      message.textContent = "You lost the game";
      domScore.textContent = 0;
    }
  }
});

// reset func
reset.addEventListener("click", () => {
  number = Math.trunc(Math.random() * 20 + 1);
  guessNumber.textContent = "?";
  message.textContent = "Start guessing...";
  document.body.style.background = "#222";
  score = 20;
  domScore.textContent = score;
  input.value = "";
});
