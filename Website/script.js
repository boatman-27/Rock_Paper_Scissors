document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];
    let userChoice;
    let computerChoice;
    let result;

    const buttons = document.querySelectorAll("button");
    const resultDiv = document.getElementById("result");
    const resetButton = document.getElementById("reset");
    const computerChoiceDiv = document.getElementById("computer-choice");

    function computerPlay() {
        return choices[Math.floor(Math.random() * 3)];
    }

    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return `You win! Computer chose ${computerChoice}.`;
        } else {
            return `Computer wins! Computer chose ${computerChoice}.`;
        }
    }

    function updateDisplay() {
        resultDiv.textContent = result;
        computerChoiceDiv.textContent = "";
        resetButton.style.display = "block";
    }
    

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            userChoice = button.id;
            computerChoice = computerPlay();
            result = playRound(userChoice, computerChoice);
            updateDisplay();
        });
    });

    resetButton.addEventListener("click", function () {
        resultDiv.textContent = "";
        computerChoiceDiv.textContent = "";
        resetButton.style.display = "none";
    });
});
