let randomNumber = Math.floor(Math.random() * 2); // 0 hoặc 1
let userGuess;

do {
    userGuess = prompt("Đoán số (0 hoặc 1):");
    userGuess = Number(userGuess);
} while (userGuess !== randomNumber);

alert(" Bạn đã đoán đúng số " + randomNumber + "!");
