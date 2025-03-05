// Declare a variable to store the random number
let randomNumber = Math.floor(Math.random() * 10) + 1;
let score = 10;

// Function to check the user's guess
function checknumber() {
    // Get the value entered by the user
    let userGuess = document.getElementById("one").value;

    // Get the result message element
    let resultMessage = document.getElementById("two");

    // Get the score element
    let scoreElement = document.getElementById("score");

    // Check if the user has entered a number
    if (userGuess === "") {
        resultMessage.textContent = "Please enter a number!";
        scoreElement.textContent = score; // Keep score as is
        alert("Game Over! Score is zero as no number was entered.");
        return; // Stop the game if no input is provided
    }

    // Check if the guess is correct or not
    if (userGuess == randomNumber) {
        resultMessage.textContent = "You are right!";
        scoreElement.textContent = score; // Show current score
        alert("You won...");
    } else {
        resultMessage.textContent = "You are wrong!";
        if (score > 0) {
            score--; // Decrease score by 1 only for wrong guesses and if score is greater than 0
        }
        scoreElement.textContent = score; // Update score on screen
    }

    // Reset the random number after each guess
    randomNumber = Math.floor(Math.random() * 10) + 1;
}
