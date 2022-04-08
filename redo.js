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

console.log(fullDeck)  //Logs full card deck

console.log(typeof(fullDeck));  //Logs Object



function shuffle (fullDeck) {
    for(let i = 0; i < 500; i++){
        let location1 = Math.floor((Math.random()* fullDeck.length));
        let location2 = Math.floor((Math.random() * fullDeck.length));
        let tmp = fullDeck[location1];

        fullDeck[location1] = fullDeck[location2];
        fullDeck[location2] = tmp
    }
}

let shuffledDeck = shuffle(fullDeck);

console.log(shuffledDeck); // why is this coming back as undefined

console.log(typeof(shuffledDeck));  //Undefined

// function shuffledDeck(cardDeck) {
//     document.getElementById("cardDeck").innerHTML = "";
//     for (let i = 0; i < cardDeck.length; i++) {
//         let card = document.createElement("div");
//         let value = document.createElement("div");
//         let suit = document.createElement("div");

//         card.className = "card";
//         value.className = "value";
//         suit.className = "suit" + cardDeck[i].Suit;

//         value.innerHTML = cardDeck[i].Value;
//         card.appendChild(value);
//         card.appendChild(suit);

//         document.getElementById("deck").appendChild(card);
//     }
// }




// Array.from(getCardDeck);

// console.log(Array);



