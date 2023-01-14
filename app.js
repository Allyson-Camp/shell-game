/* Imports */

/* Get DOM Elements */

//buttons
const orangeShellButton = document.getElementById('orange-shell-button');
const blueShellButton = document.getElementById('blue-shell-button');
const pinkShellButton = document.getElementById('pink-shell-button');


//divs
const orangeShellElement = document.getElementById('orangeShell-element');
const blueShellElement = document.getElementById('blueShell-element');
const pinkShellElement = document.getElementById('pinkShell-element');

//spans
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

/* State */
let totalWins = 0;
let totalLosses = 0;
let totalGuesses = 0;

/* Events */

    // eventListeners for buttons
orangeShellButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('orangeShell', correctSpot);
});

blueShellButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('blueShell', correctSpot);
});

pinkShellButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('pinkShell', correctSpot);
});

function getRandomHidingSpot() {
    const hidingSpots = [
        'orangeShell',
        'blueShell',
        'pinkShell'
    ];
    const index = Math.floor(Math.random() * hidingSpots.length);
    const hidingSpotString = hidingSpots[index];
    return hidingSpotString;
}
// total wins not incrementing, come back
function handleGuess(userGuess, correctSpot) {
    orangeShellElement.classList.remove('harold');
    blueShellElement.classList.remove('harold');
    pinkShellElement.classList.remove('harold');
// hide/move the crab after a guess
    totalGuesses++;
console.log(userGuess, correctSpot);

    const correctHidingSpot = document.getElementById(`${correctSpot}-element`);
// add the crab to the correct guess
    correctHidingSpot.classList.add('harold');

    if (userGuess === correctSpot) {
        totalWins++;
    } else {
        totalLosses++;
    }
    totalEl.textContent = totalGuesses;
    winsEl.textContent = totalWins;
    lossesEl.textContent = totalLosses;
}

    // add the crab to the correct guess

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
