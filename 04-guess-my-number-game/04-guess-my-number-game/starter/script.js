'use strict';
'use strict';

console.log(` === GAME DEVELOPMENT: GUESS MY NUMBER ===`);
const messageEl = document.querySelector(`.message`);
// console.log(messageEl);
// messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector(`.score`);
//scoreEl.textContent = 15;

const numberEl = document.querySelector(`.number`);
//numberEl.textContent = 10;

const highscoreEl = document.querySelector(`.highscore`);
//highscoreEl.textContent = 18;

//input value
const guessinputEl = document.querySelector(`.guess`);
//guessinputEl.value = 6;

// GAME STATE VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Your Secret number is:`, secretNumber);
let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

/////////////////////////////////////////////////////////////////

//basic game logic
document.querySelector(`.check`).addEventListener(`click`, function () {
  //code block
  console.log(`Check button clicked!!`);
  const guess = Number(document.querySelector(`.guess`).value);
  console.log('Player guessed:', guess);

  if (guess === secretNumber) {
    console.log(`Correct guess!!!`);
    document.querySelector(`.message`).textContent = `Correct Number 🥵🥵🥵`;
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!!!');
    document.querySelector(`.message`).textContent = `Too high!!!☠️☠️☠️`;
  } else if (guess < secretNumber) {
    console.log(`Too low!!!`);
    document.querySelector(`.message`).textContent = `Too low!!!😵😵😵`;
  }
});
