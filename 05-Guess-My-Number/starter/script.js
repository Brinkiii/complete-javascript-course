'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberToGuess = getRandomInt(1, 20);
console.log(`The number to guess is ${numberToGuess}`);

document.querySelector('.check').addEventListener('click', guess);
document.querySelector('.again').addEventListener('click', restart);

function restart() {
  let newNumber = document.createElement('p');
  numberToGuess = getRandomInt(1, 20);
  console.log(`The new number to guess is ${numberToGuess}`);
  let newNumberNode = document.createTextNode('New number generated!');
  newNumber.appendChild(newNumberNode);
  document.querySelector('header').appendChild(newNumber);
  document.querySelector('.guess').value = '';
}

function guess() {
  let messageText = ``;
  let guessedNumber = document.querySelector('.guess').value;
  let highscore = Number(document.querySelector('.highscore').textContent);
  let score = Number(document.querySelector('.score').textContent);
  // Entferne das vorherige <p>-Element, falls vorhanden
  const existingPara = document.querySelector('.message p');
  if (existingPara) {
    existingPara.remove();
  }

  if (numberToGuess < guessedNumber) {
    messageText = `📈 Too high!`;
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (numberToGuess > guessedNumber) {
    messageText = `📉 Too low!`;
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    messageText = `✅ That's correct!`;
    score += 1;
    document.querySelector('.score').textContent = score;
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  const para = document.createElement('p');
  const parent = document.querySelector('.message');
  para.textContent = messageText;
  parent.appendChild(para);
}
