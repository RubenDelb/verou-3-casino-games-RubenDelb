const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const allWeapons = document.querySelector(".weaponChoice");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const weaponArray = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * weaponArray.length);
const playButton = document.getElementById("playButton");
const userScore = document.getElementById("userScore");
const pcScore = document.getElementById("pcScore");
const changeBgcolor = document.getElementById("changeBgcolor");
const extraWeaponsButtons = document.getElementById("extraWeaponsButtons");
let oppScore = 0;
let myScore = 0;

for (let weapon of allWeapons.children) {
    weapon.addEventListener('click', (event) => {

        if (weapon.id == "rock") {
            message1.innerHTML = "Your weapon: Rock";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "#9e3208";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "white";
            lizard.style.backgroundColor = "white";
            spock.style.backgroundColor = "white";
        } else if (weapon.id === "paper") {
            message1.innerHTML = "Your weapon: Paper";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "#9e3208";
            scissors.style.backgroundColor = "white";
            lizard.style.backgroundColor = "white";
            spock.style.backgroundColor = "white";
        } else if (weapon.id === "scissors") {
            message1.innerHTML = "Your weapon: Scissors";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "#9e3208";
            lizard.style.backgroundColor = "white";
            spock.style.backgroundColor = "white";
        }
        else if (weapon.id === "lizard") {
            message1.innerHTML = "Your weapon: Lizard";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "white";
            lizard.style.backgroundColor = "#9e3208";
            spock.style.backgroundColor = "white";
        }
        else {
            message1.innerHTML = "Your weapon: Spock";
            message2.innerHTML = "Opponent's weapon: "
            message3.innerHTML = ""
            rock.style.backgroundColor = "white";
            paper.style.backgroundColor = "white";
            scissors.style.backgroundColor = "white";
            lizard.style.backgroundColor = "white";
            spock.style.backgroundColor = "#9e3208";
        }
    })

}

const play = () => {
    const randomWeapon = weaponArray[Math.floor(Math.random() * weaponArray.length)];
    message2.innerHTML = "Opponent's weapon: " + randomWeapon;
    playButton.innerHTML = "Play again!"

    if ((randomWeapon == "Paper" && (message1.innerHTML == "Your weapon: Rock" || message1.innerHTML == "Your weapon: Spock"))  || 
        (randomWeapon == "Scissors" && (message1.innerHTML == "Your weapon: Paper" || message1.innerHTML == "Your weapon: Lizard")) || 
        (randomWeapon == "Rock" && (message1.innerHTML == "Your weapon: Scissors" || message1.innerHTML == "Your weapon: Lizard")) ||   
        (randomWeapon == "Lizard" && (message1.innerHTML == "Your weapon: Spock" || message1.innerHTML == "Your weapon: Paper")) || (randomWeapon == "Spock" && (message1.innerHTML == "Your weapon: Scissors" || message1.innerHTML == "Your weapon: Rock"))) {
        oppScore += 1;
        pcScore.innerHTML = "Opp. Score: " + oppScore
        message3.style.color = "#ffffff"
        message3.style.textShadow = "0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00, 7px 7px 7px #CE5937";
        message3.innerHTML = "YOU LOSE"
    }
    else if ((randomWeapon == "Rock" && (message1.innerHTML == "Your weapon: Paper" || message1.innerHTML == "Your weapon: Spock")) || (randomWeapon == "Paper" && (message1.innerHTML == "Your weapon: Scissors" || message1.innerHTML == "Your weapon: Lizard")) || (randomWeapon == "Scissors" && (message1.innerHTML == "Your weapon: Rock" || message1.innerHTML == "Your weapon: Spock")) || (randomWeapon == "Lizard" && (message1.innerHTML == "Your weapon: Rock" || message1.innerHTML == "Your weapon: Scissors")) || (randomWeapon == "Spock" && (message1.innerHTML == "Your weapon: Paper" || message1.innerHTML == "Your weapon: Lizard"))) {
        myScore += 1;
        userScore.innerHTML = "Score: " + myScore
        message3.style.color = "#ffffff"
        message3.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 0px 0px 0px rgba(206,89,55,0)";
        message3.innerHTML = "YOU WIN"
    }
    else {
        message3.style.color = "#ffffff"
        message3.style.textShadow = "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c";
        message3.innerHTML = "DRAW!"
    }
}

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
    userScore.innerHTML = "Score: " + myScore;
    pcScore.innerHTML = "Opp. Score: " + oppScore;
    playButton.innerHTML = "Play !"
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

const addLizardSpock = document.getElementById("addLizardSpock");
const noLizardSpock = document.getElementById("noLizardSpock");
const weaponDiv = document.getElementById("weaponChoice");


const extraWeapons = () => {
    weaponArray.push('Lizard', 'Spock');
    addLizardSpock.style.display = "none";
    noLizardSpock.style.display = "block";
    lizard.style.display = "block";
    spock.style.display = "block";
}

const removeExtraWeapons = () => {
    weaponArray.length = 3;
    addLizardSpock.style.display = "block";
    noLizardSpock.style.display = "none";
    lizard.style.display = "none";
    spock.style.display = "none";
}

addLizardSpock.addEventListener("click", extraWeapons);
noLizardSpock.addEventListener("click", removeExtraWeapons);