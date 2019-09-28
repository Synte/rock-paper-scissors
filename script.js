function computerPlay() {
    let choice = Math.floor(Math.random() * Math.floor(3));

    if (choice == 0) { return "rock"; }
    else if (choice == 1) { return "paper"; }
    else { return "scissors"; }
}

function announceWinner() {
    let winner = (currentUsrScore == 5) ? "usr" : "cpu";
    totalRoundsPlayed = 0;
    currentUsrScore = 0;
    currentCpuScore = 0;
    
    if (winner == "usr") {
        roundMsg.innerHTML += "<br>You reached 5 points first, you win!";
    } else {
        roundMsg.innerHTML += "<br>The computer reached 5 points first, you lose!";
    }
}

function playRound(playerSelection, computerSelection) {
    let usr = playerSelection.toUpperCase();
    let cpu = computerSelection.toUpperCase();

    switch (true) {
        case (usr == cpu):
                roundMsg.textContent = `You both selected ${usr} - it's a draw!`;
                break;
        case (usr == "ROCK" && cpu == "SCISSORS"):
        case (usr == "SCISSORS" && cpu == "PAPER"):
        case (usr == "PAPER" && cpu == "ROCK"):
            roundMsg.textContent = `You win! ${usr} beats ${cpu}`;
            currentUsrScore += 1;
            break;
        default:
            roundMsg.textContent = `You lose! ${cpu} beats ${usr}`;
            currentCpuScore += 1;
            break;
    }

    usrScore.textContent = currentUsrScore;
    cpuScore.textContent = currentCpuScore;

    totalRoundsPlayed += 1;
    roundsPlayed.textContent = totalRoundsPlayed;
    
    if (currentUsrScore == 5 || currentCpuScore == 5) announceWinner();
}

function buttonClicked(e) {
    playRound(this.getAttribute("id"), computerPlay());
}

const roundsPlayed = document.getElementById("roundsPlayed");
const usrScore = document.getElementById("usrScore");
const cpuScore = document.getElementById("cpuScore");
const roundMsg = document.getElementById("roundMsg");

let totalRoundsPlayed = 0;
let currentUsrScore = 0;
let currentCpuScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClicked));

