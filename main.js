let randomNumber = Math.floor(Math.random() * 100) + 1;
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const checkGuess = () => {
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        messageElement.textContent = 'Congratulations! You guessed the right number!';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else {
        messageElement.textContent = 'Too high! Try again.';
    }
    guessInput.value = '';
};

const resetGame = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    messageElement.textContent = '';
    guessInput.value = '';
};

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);