window.onload = function() {
    generateRandomNumber();
    console.log("Random number generated:", randomNumber); // Testing

    // Update input display in real-time
    document.getElementById('userGuess').addEventListener('input', function () {
        const currentInputDisplay = document.getElementById('currentInput');
        currentInputDisplay.textContent = this.value || "0";
    });

    document.getElementById('userGuess').addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            checkGuess();
        }
    });
};


let randomNumber;
let validGuess = null;
let attempts = 0;
let lowGuess = null;
let highGuess = null;

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;

    userGuess = Number(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        document.getElementById('userGuess').value = ""; 
        return;
    } else {
        validGuess = userGuess;
        compareGuess();
    }
}

function compareGuess() {
    const feedbackElement = document.getElementById('feedback');

    if (validGuess === randomNumber) {
        feedbackElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
        feedbackElement.style.color = "green";

        document.getElementById('userGuess').value = ""; 
        document.getElementById('userGuess').blur(); // Remove focus from input field to avoid further input

        // Change button to "Play Again"
        const guessButton = document.getElementById('submitGuess');
        guessButton.textContent = "Play Again";
        guessButton.onclick = resetGame;

        generateRandomNumber();
        console.log("Random number generated:", randomNumber); // Testing

    } else if (validGuess < randomNumber) {
        feedbackElement.textContent = "Too low! Try again.";
        feedbackElement.style.color = "orange";
        attempts++;

        if (!lowGuess || validGuess > lowGuess) {
            lowGuess = validGuess;
        }
        document.getElementById('lowGuess').textContent = `${lowGuess} ↑`;

    } else {
        feedbackElement.textContent = "Too high! Try again.";
        feedbackElement.style.color = "red";
        attempts++;

        if (!highGuess || validGuess < highGuess) {
            highGuess = validGuess;
        }
        document.getElementById('highGuess').textContent = `${highGuess} ↓`;
    }

    document.getElementById('userGuess').value = "";
    document.getElementById('attemptCount').textContent = attempts;
}

function resetGame() {
    attempts = 0;
    lowGuess = null;
    highGuess = null;
    validGuess = null;

    document.getElementById('userGuess').value = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('lowGuess').textContent = "";
    document.getElementById('highGuess').textContent = "";
    document.getElementById('attemptCount').textContent = "0";

    const guessButton = document.getElementById('submitGuess');
    guessButton.textContent = "Submit Guess";
    guessButton.onclick = checkGuess;

    document.getElementById('userGuess').focus(); // Set focus back to input field

    generateRandomNumber();
    console.log("New random number generated:", randomNumber); // Testing
}
