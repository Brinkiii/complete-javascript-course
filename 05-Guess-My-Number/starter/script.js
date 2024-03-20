'use strict';

let newNumber = document.createElement('p');
let messageText = ``;
let numberToGuess = getRandomInt(1, 20);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

console.log(`The number to guess is ${numberToGuess}`);

document.querySelector('.check').addEventListener('click', guess);
document.querySelector('.again').addEventListener('click', restart);

function guess() {
  let guessedNumber = document.querySelector('.guess').value;
  let highscore = Number(document.querySelector('.highscore').textContent);
  let score = Number(document.querySelector('.score').textContent);
  newNumber.remove();
  const existingPara = document.querySelector('.message p');
  if (existingPara) {
    existingPara.remove();
  }

  if (numberToGuess < guessedNumber) {
    displayMessage('📈 Too high!');
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (numberToGuess > guessedNumber) {
    displayMessage('📉 Too low!');
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage("✅ That's correct!");
    score += 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = numberToGuess;
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (score === 0) {
    displayMessage('You lose!');
    document.querySelector('.check').disabled = true;
  }
}

function restart() {
  numberToGuess = getRandomInt(1, 20);
  console.log(`The new number to guess is ${numberToGuess}`);
  let newNumberNode = document.createTextNode('New number generated!');
  document.querySelector('.score').textContent = '20';
  if (newNumber.parentNode) {
    newNumber.parentNode.removeChild(newNumber);
  }
  newNumber = document.createElement('p');
  newNumber.style.opacity = '1';
  newNumber.appendChild(newNumberNode);
  document.querySelector('header').appendChild(newNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = `?`;
  displayMessage('Start guessing...');
}
