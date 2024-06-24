console.log("Welcome to Multiplication Table Generator! \nEnter a number and the program will display the multiplication table from 1 to 10.");
let inputNumber = prompt("Enter a number: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);
}
