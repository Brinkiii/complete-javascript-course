'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
let activePlayer = 0;
let winText = document.createElement('p');
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');

function newGame() {
  activePlayer = 0;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  btnRoll.disabled = false;
  btnHold.disabled = false;
}

function rollDice() {
  const thrownNumber = Math.trunc(Math.random() * 6) + 1;
  const imageName = 'dice-' + thrownNumber + '.png';
  imgDice.src = imageName;

  if (thrownNumber !== 1) {
    const currentPlayerScore =
      activePlayer === 0 ? playerOneCurrentScore : playerTwoCurrentScore;
    const currentScore =
      parseInt(currentPlayerScore.textContent) + thrownNumber;
    currentPlayerScore.textContent = currentScore;
    console.log(currentPlayerScore);
  } else {
    if (activePlayer === 0) {
      playerOneCurrentScore.textContent = 0;
      activePlayer = 1;
      playerTwo.classList.add('player--active');
      playerOne.classList.remove('player--active');
    } else {
      playerTwoCurrentScore.textContent = 0;
      activePlayer = 0;
      playerTwo.classList.remove('player--active');
      playerOne.classList.add('player--active');
    }
  }
}

function hold() {
  if (activePlayer === 0) {
    playerTwo.classList.add('player--active');
    playerOne.classList.remove('player--active');
    playerOneScore.textContent =
      parseInt(playerOneScore.textContent) +
      parseInt(playerOneCurrentScore.textContent);
    playerOneCurrentScore.textContent = 0;
    activePlayer = 1;
  } else {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
    playerTwoScore.textContent =
      parseInt(playerTwoScore.textContent) +
      parseInt(playerTwoCurrentScore.textContent);
    playerTwoCurrentScore.textContent = 0;
    activePlayer = 0;
  }
  if (parseInt(playerOneScore.textContent) >= 100) {
    winText.textContent = 'Wins!';
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
    document.getElementById('name--0').appendChild(winText);
    disableButtons();
  } else if (parseInt(playerTwoScore.textContent) >= 100) {
    winText.textContent = 'Wins!';
    playerTwo.classList.add('player--active');
    playerOne.classList.remove('player--active');
    document.getElementById('name--1').appendChild(winText);
    disableButtons();
  }
}

function switchPlayers() {
  if (thrownNumber === 1 && activePlayer === 0) {
    playerOneCurrentScore.textContent = 0;
    activePlayer = 1;
    playerTwo.classList.add('player--active');
    playerOne.classList.remove('player--active');
  } else if (thrownNumber === 1 && activePlayer === 1) {
    playerTwoCurrentScore.textContent = 0;
    activePlayer = 0;
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
  }
}

function disableButtons() {
  document.querySelector('.btn--roll').disabled = true;
  document.querySelector('.btn--hold').disabled = true;
}

btnRoll.addEventListener('click', rollDice);
btnNewGame.addEventListener('click', newGame);
btnHold.addEventListener('click', hold);
