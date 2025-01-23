

window.onload = function() {
    generateRandomNumber();
    console.log("Random number generated:", randomNumber); // Testing
}



let randomNumber;

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}



let validGuess;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;

    userGuess = Number(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    } 
    else {
        validGuess = userGuess;
        compareGuess();
    }

    console.log("User guess is valid:", userGuess); // Testing
}



let attempts = 0;

function compareGuess() {
    const feedbackElement = document.getElementById('feedback');

    if (validGuess === randomNumber) {
        feedbackElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
        feedbackElement.style.color = "green"; 
        generateRandomNumber(); 

        console.log("Random number generated:", randomNumber); // Testing
    } 
    else if (validGuess < randomNumber) {
        feedbackElement.textContent = "Too low! Try again.";
        feedbackElement.style.color = "orange"; 
        attempts++;
    } 
    else {
        feedbackElement.textContent = "Too high! Try again.";
        feedbackElement.style.color = "red"; 
        attempts++;
    }
}

