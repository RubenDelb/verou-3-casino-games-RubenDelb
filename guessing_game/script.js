const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

const randomNumber = Math.floor(Math.random() * 23) + 1;
let totalGuesses = 0;
const guessedNumbers = [];

const play = (event) => {
    event.preventDefault();
    const userGuess = document.getElementById("mynumber").value;
    if (userGuess < 1 || userGuess > 24) {
        alert("Enter a number between 1 and 23 please!")
    }
    else {
        guessedNumbers.push(userGuess);
        totalGuesses+= 1;

        if (userGuess < randomNumber) {
            message1.innerHTML = "Your guess is too low."
            message2.innerHTML = "Number of guesses: " + totalGuesses;
            message3.innerHTML = "Guessed numbers: " + guessedNumbers;
        } else if (userGuess > randomNumber) {
            message1.innerHTML = "Your guess is too high."
            message2.innerHTML = "Number of guesses: " + totalGuesses;
            message3.innerHTML = "Guessed numbers: " + guessedNumbers;
        } else if (userGuess == randomNumber && totalGuesses < 2) {
            message1.innerHTML = "You win the game &#127881; AND the pastry &#127854; YUMMM!"
            message2.innerHTML = "The secret number was: " + randomNumber;
            message3.innerHTML = "You only needed 1 guess, good job!";
        }
        else if (userGuess == randomNumber && totalGuesses > 2) {
            message1.innerHTML = "You win the game &#127881;, but definitely forget about that pastry!&#128169;"
            message2.innerHTML = "The secret number was: " + randomNumber;
            message3.innerHTML = "you needed " + totalGuesses + " guesses to win.";
        }
    }
}

const playButton = document.getElementById("playButton");
playButton.addEventListener("click", play);