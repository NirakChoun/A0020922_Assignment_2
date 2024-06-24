let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Enter your guess: ");

while (userGuess != randomNumber) {
    userGuess = Number(prompt("Enter your guess: "));
}

console.log(`You guess the right number, which is ${randomNumber}.`);
