const cards = document.querySelectorAll(".memory-card");

let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(event) {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // FIRST CLICK
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // SECOND CLICK
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    // Do Cards match?
    if (firstCard.dataset.name === secondCard.dataset.name) {
        // MATCH!!!
        disableCards();
    } else {
        // NO MATCH!
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard))