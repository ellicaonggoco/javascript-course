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

  if (!guess) {
    document.querySelector(`.message`).textContent = `Please input a number!`;
    return;
  }

  //input validation label
  if (guess < 1 || guess > 20) {
    document.querySelector(
      `.message`
    ).textContent = `Number must be between 1 and 20!`;
    return;
  }

  if (guess === secretNumber) {
    console.log(`Correct guess!!!`);
    document.querySelector(`.message`).textContent = `Correct Number 🥵🥵🥵`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    document.querySelector(`.guess`).disabled = true;
    document.querySelector(`.check`).disabled = true;
    document.querySelector(`.message`).textContent = `You won G🤑🤑🤑!`;
    document.body.style.backgroundColor = 'green';
    document.querySelector(`.guess`).value = ``;
  } else if (guess > secretNumber) {
    console.log('Too high!!!');
    document.querySelector(`.message`).textContent = `Too high!!!☠️☠️☠️`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(
        `.message`
      ).textContent = `GAME OVER! Please Press 'AGAIN' Button!😭😭😭`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = 'red';
      document.querySelector(`.guess`).value = ``;
    }
  } else if (guess < secretNumber) {
    console.log(`Too low!!!`);
    document.querySelector(`.message`).textContent = `Too low!!!😵😵😵`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(
        `.message`
      ).textContent = `GAME OVER! Please Press 'AGAIN' Button!😭😭😭`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
      document.body.style.backgroundColor = 'red';
      document.querySelector(`.guess`).value = ``;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  //block
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Your Secret Number is:', secretNumber);
  document.querySelector(`.message`).textContent = `Start guessing....🧐🧐🧐`;
  //restart secret number display
  document.querySelector(`.number`).textContent = '?';
  // restart score
  document.querySelector(`.score`).textContent = score;
  //empty the guess input value
  document.querySelector(`.guess`).value = ``;
  //enable guess and check input buttons
  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
  document.body.style.backgroundColor = '';
});
