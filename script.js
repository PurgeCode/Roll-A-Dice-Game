//Selecting Elements on the HTML
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting the conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Displaying the Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./img/dice-${dice}.png`;

  //Checking if the rolled dice is 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    current0El.textContent = currentScore; //Change later
  }
});
