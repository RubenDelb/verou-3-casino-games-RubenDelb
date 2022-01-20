const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const weaponz = document.querySelector(".weaponChoice")
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const weaponArray = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * weaponArray.length);
const userScore = document.getElementById("userScore");
const pcScore = document.getElementById("pcScore");
const changeBgcolor = document.getElementById("changeBgcolor");
let oppScore = 0;
let myScore = 0;

for (let weapon of weaponz.children) {
    weapon.addEventListener('click', (event) => {

        if (weapon.id == "rock") {
            message1.innerHTML = "Your weapon: Rock";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "#9e3208";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "white";
        } else if (weapon.id === "paper") {
            message1.innerHTML = "Your weapon: Paper";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "#9e3208";
            scissors.style.backgroundColor = "white";
        } else if (weapon.id === "scissors") {
            message1.innerHTML = "Your weapon: Scissors";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "#9e3208";
        }
    })

}

const play = (event) => {
    const randomWeapon = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    message2.innerHTML = "Opponent's weapon: " + randomWeapon;
    if (randomWeapon == "Paper" && message1.innerHTML == "Your weapon: Rock") {
        oppScore += 1;
        pcScore.innerHTML = "Opp. Score: " + oppScore
        message3.innerHTML = "YOU LOSE"
    }
    if (randomWeapon == "Scissors" && message1.innerHTML == "Your weapon: Paper") {
        oppScore += 1;
        pcScore.innerHTML = "Opp. Score: " + oppScore
        message3.innerHTML = "YOU LOSE"
    }
    if (randomWeapon == "Rock" && message1.innerHTML == "Your weapon: Scissors") {
        oppScore += 1;
        pcScore.innerHTML = "Opp. Score: " + oppScore
        message3.innerHTML = "YOU LOSE"
    }
    if (randomWeapon == "Rock" && message1.innerHTML == "Your weapon: Paper") {
        myScore += 1;
        userScore.innerHTML = "Score: " + myScore
        message3.innerHTML = "YOU WIN"
    }
    if (randomWeapon == "Paper" && message1.innerHTML == "Your weapon: Scissors") {
        myScore += 1;
        userScore.innerHTML = "Score: " + myScore
        message3.innerHTML = "YOU WIN"
    }
    if (randomWeapon == "Scissors" && message1.innerHTML == "Your weapon: Rock") {
        myScore += 1;
        userScore.innerHTML = "Score: " + myScore
        message3.innerHTML = "YOU WIN"
    }
    if (randomWeapon == "Rock" && message1.innerHTML == "Your weapon: Rock") {
        message3.innerHTML = "DRAW!"
    }
    if (randomWeapon == "Paper" && message1.innerHTML == "Your weapon: Paper") {
        message3.innerHTML = "DRAW!"
    }
    if (randomWeapon == "Scissors" && message1.innerHTML == "Your weapon: Scissors") {
        message3.innerHTML = "DRAW!"
    }
}

const playButton = document.getElementById("playButton");
playButton.addEventListener("click", play);

const reset = () => {
    oppScore = 0
    myScore = 0
    message1.innerHTML = "Your weapon: ";
    message2.innerHTML = "Opponent's weapon: "
    message3.innerHTML = ""
    rock.style.backgroundColor = "white";
    paper.style.backgroundColor = "white";
    scissors.style.backgroundColor = "white";
    userScore.innerHTML = "Score: " + myScore ;
    pcScore.innerHTML = "Opp. Score: " + oppScore ;
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    const randomDegree = Math.floor(Math.random() * 360) + "deg"; 
    document.body.style.background = "linear-gradient(" + randomDegree + ", #" + randomColor + ", #" + randomColor2 + ")";
}

changeBgcolor.addEventListener("click", setBg);