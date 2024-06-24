console.log("Welcome to the Password Validator program! \nUsers must enter and re-enter their password twice to set their password successfully.");

let setPassword;
let confirmPassword;

do {
    setPassword = prompt("Enter a password: ");
    confirmPassword = prompt("Re-enter your password: ");
    if (setPassword != confirmPassword) {
        console.log("Passwords do not match. Please try again.");
    }
} while (setPassword !== confirmPassword);

console.log("Password set successfully!");
