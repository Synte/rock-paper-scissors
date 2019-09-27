function cpuPlay() {
    let choice = Math.floor(Math.random() * Math.floor(3));

    if (choice == 0) { return "rock"; }
    else if (choice == 1) { return "paper"; }
    else { return "scissors"; }
}

function playRound(usr, cpu) {
    gamesPlayed += 1;
    if (usr === cpu) { return; }

    switch (true) {
        case (usr === "rock" && cpu === "scissors"):
        case (usr === "scissors" && cpu === "paper"):
        case (usr === "paper" && cpu === "rock"):
            usrScore += 1;
            return;
        default:
            cpuScore += 1;
            return;
    }
}

function userClick(e) {
    playRound(this.getAttribute("id"), cpuPlay());
    pGames.textContent = "Games played: " + gamesPlayed;
    pUser.textContent = "Your score: " + usrScore;
    pCpu.textContent = "Computer's score: " + cpuScore;
}

let gamesPlayed = 0;
let usrScore = 0;
let cpuScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", userClick));

const pGames = document.querySelector("#games");
const pUser = document.querySelector("#userScore");
const pCpu = document.querySelector("#cpuScore");