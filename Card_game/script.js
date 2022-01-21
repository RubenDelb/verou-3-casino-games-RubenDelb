const playBtn = document.getElementById("playBtn");
const hitBtn = document.getElementById("hitBtn");
const stayBtn = document.getElementById("stayBtn");
const dealerCards = document.getElementById("dealerList");
const playerCards = document.getElementById("playerList");
const deck = [];
const createDeck = () => {
    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    const realValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
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
console.log(myDeck);

const drawCard = (event) => {
    dealerCards.innerHTML = "";
    playerCards.innerHTML = "";
    for (i = 0; i < 2; i++) {
        // const newPlayerCard = document.createElement("li");
        const newPlayerImg = document.createElement("img");
        newPlayerImg.src = myDeck[i].image;
        newPlayerImg.className = "cardImg";
        playerCards.appendChild(newPlayerImg);
    }
    let newDealerCard = document.createElement("img");
    newDealerCard.src = myDeck[2].image;
    newDealerCard.className = "cardImg";
    dealerCards.appendChild(newDealerCard);
    let DealerCardBack = document.createElement("img");
    DealerCardBack.src = "./cards/card_back.png"
    DealerCardBack.className = "cardImg";
    dealerCards.appendChild(DealerCardBack);
}

playBtn.addEventListener("click", drawCard);

const hit = (event) => {
    const newPlayerImg = document.createElement("img");
    newPlayerImg.src = myDeck[3].image;
    newPlayerImg.className = "cardImg";
    playerCards.appendChild(newPlayerImg);
}

hitBtn.addEventListener("click", hit);