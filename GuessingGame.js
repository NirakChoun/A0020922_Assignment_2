alert("Welcome to the Guessing Number game, where users guess a random number between 1 and 10.");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Enter your guess: ");

while (userGuess != randomNumber) {
    if (user > randomNumber) {
        console.log("Too high, try again");
    } else {
        console.log("Too low, try again");
    }
    userGuess = Number(prompt("Enter your guess: "));
}

alert(`You guess the right number, which is ${randomNumber}.`);
