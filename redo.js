let player1 = []
let player2 = []

let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A','K','Q','J','10','9','8','7','6','5','4','3','2','1']

function getCardDeck () {
    let cardDeck = new Array();  
    for (let i = 0; i < suits.length; i++) {
       for (let x = 0; x < values.length; x++) {
           let card = {Value: values[x], Suit: suits[i]};
           cardDeck.push(card);
       } 
    }
    return cardDeck;
}

let fullDeck = getCardDeck()  // Converting function to an object

console.log(fullDeck)

console.log(typeof(fullDeck));





function shuffle (cardDeck) {
    for(let i = 0; i < 500; i++){
        let location1 = Math.floor((Math.random()* cardDeck.length));
        let location2 = Math.floor((Math.random() * cardDeck.length));
        let tmp = cardDeck[location1];

        cardDeck[location1] = cardDeck[location2];
        cardDeck[location2] = tmp
    }
}

function shuffledDeck(cardDeck) {
    document.getElementById("cardDeck").innerHTML = "";
    for (let i = 0; i < cardDeck.length; i++) {
        let card = document.createElement("div");
        let value = document.createElement("div");
        let suit = document.createElement("div");
    }
}




// Array.from(getCardDeck);

// console.log(Array);



