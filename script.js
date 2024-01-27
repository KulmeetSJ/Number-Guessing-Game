const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random Number', randomNumber);

function checkGuess() {
    let myGuess = parseInt(guess.value, 10);
    console.log('My Guess', myGuess);

    if (isNaN(myGuess)) {
        feedback.textContent = "Please enter a valid number!";
    } else if (myGuess === randomNumber) {
        feedback.textContent = "You got it right!";
    } else if (myGuess > randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!";
    } else if (myGuess < randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!";
    }
}

submitGuess.addEventListener('click', checkGuess);
