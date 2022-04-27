'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Initializing Score variables

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  Math.trunc(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ No Number Entered !';

    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? ' 📈 Too High ! ' : ' 📉 Too low ! ';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = ' 💥 Game Over ! ';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
