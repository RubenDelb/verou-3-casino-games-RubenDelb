const playBtn = document.getElementById("playBtn");
const hitBtn = document.getElementById("hitBtn");
const stayBtn = document.getElementById("stayBtn");
const dealerCards = document.getElementById("dealerList");
const playerCards = document.getElementById("playerList");
const deck = [];
let totalValuePlayer = [];
let totalDealerValue = [];
const valueDealerParagraph = document.getElementById("valueDealerParagraph");
const valuePlayerParagraph = document.getElementById("valuePlayerParagraph");

function sum(array) {
    let sum = 0; // initialize sum 
    for (let i = 0; i < array.length; i++)
        sum += array[i];
    return sum;
}

const createDeck = () => {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    const realValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push({
                realValue: realValues[x],
                suits: suits[i],
                value: values[x],
                image: "./cards/" + values[x] + "_of_" + suits[i] + ".png",
                picked: false
            });
        }
    }
    return deck;
}

const shuffleDeck = (deck) => {
    for (let i = 0; i < 52; i++) {
        let tempCard = deck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard
    }
}

const myDeck = createDeck();
shuffleDeck(myDeck);
// console.log(myDeck);

const drawCard = (event) => {
    hitBtn.addEventListener("click", hit);
    dealerCards.innerHTML = "";
    playerCards.innerHTML = "";
    totalValuePlayer = [];
    for (i = 0; i < 2; i++) {
        // const newPlayerCard = document.createElement("li");
        const newPlayerImg = document.createElement("img");
        newPlayerImg.src = myDeck[i].image;
        newPlayerImg.className = "cardImg";
        playerCards.appendChild(newPlayerImg);
        totalValuePlayer.push(myDeck[i].realValue);
        valuePlayerParagraph.innerHTML = "Player's total value: " + sum(totalValuePlayer);
    }
    let newDealerCard = document.createElement("img");
    newDealerCard.src = myDeck[2].image;
    newDealerCard.className = "cardImg";
    dealerCards.appendChild(newDealerCard);
    let DealerCardBack = document.createElement("img");
    DealerCardBack.src = "./cards/card_back.png"
    DealerCardBack.className = "cardImg";
    dealerCards.appendChild(DealerCardBack);
    totalDealerValue.push(myDeck[2].realValue);
}

playBtn.addEventListener("click", drawCard);
const myAlert = () => {
    alert("BUST, you have more than 21, You Lose MoFoooo muhaha")
}

let hitCard = 3;
const hit = (event) => {
    const newPlayerImg = document.createElement("img");
    newPlayerImg.src = myDeck[hitCard].image;
    newPlayerImg.className = "cardImg";
    playerCards.appendChild(newPlayerImg);
    totalValuePlayer.push(myDeck[hitCard].realValue);
    valuePlayerParagraph.innerHTML = "Player's total value: " + sum(totalValuePlayer);
    if (sum(totalValuePlayer) > 21) {
        if (totalValuePlayer.includes(11)) {
            let aceIndex = totalValuePlayer.indexOf(11); //get  "ace" index
            totalValuePlayer.splice(aceIndex, 1); //remove ace from the array
            totalValuePlayer.push(1); //replace the value 11 and replace it by 1
            valuePlayerParagraph.innerHTML = "Player's total value: " + sum(totalValuePlayer);
        } else {
            setTimeout(myAlert, 1000)
            hitBtn.removeEventListener("click", hit);
            shuffleDeck(myDeck);
            playBtn.innerHTML = "Play Again!"
        }
    }
    hitCard += 1;
}

const stay = () => {
    for (i = 51; i < 52; i--) {
        let newDealerCard = document.createElement("img");
        newDealerCard.src = myDeck[i].image;
        newDealerCard.className = "cardImg";
        dealerCards.appendChild(newDealerCard);
        totalDealerValue.push(myDeck[i].realValue);
        valueDealerParagraph.innerHTML = "Dealer's total value: " + sum(totalDealerValue);
        if (sum(totalDealerValue) > 15){
            return
        }
    }
}

stayBtn.addEventListener("click", stay)