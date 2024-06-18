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