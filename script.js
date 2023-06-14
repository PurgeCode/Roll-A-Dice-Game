//Selecting Elements on the HTML
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //Displaying the Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`;

    //Checking if the rolled dice is 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // this code will switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add first the current score of the active player
    score[activePlayer] += currentScore;

    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // Check if the score is >=100
    if (score[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Swith to the next player
      switchPlayer();
    }
  }
});
