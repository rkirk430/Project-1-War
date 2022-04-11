let player1 = []
let player2 = []

let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A','K','Q','J','10','9','8','7','6','5','4','3','2']

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

let deck = getCardDeck()  // Converting function to an object

// console.log(fullDeck)  //Logs full card deck

// console.log(typeof(fullDeck));  //Logs Object


function shuffle (fullDeck) {
    for(let i = 0; i < 500; i++){
        let location1 = Math.floor((Math.random()* fullDeck.length));
        let location2 = Math.floor((Math.random() * fullDeck.length));
        let tmp = fullDeck[location1];

        fullDeck[location1] = fullDeck[location2];
        fullDeck[location2] = tmp
    }
    return fullDeck;
    // console.log(fullDeck);
}

let shuffledDeck = shuffle(deck);  // returns object

// console.log(typeof(shuffledDeck));  // returns object

// //Split shuffled cards into player1 & player2 variables: slice method 

let p1ShuffledDeck = shuffledDeck.slice(0,26)
player1 = p1ShuffledDeck;

let p2ShuffledDeck = shuffledDeck.slice(26,52);
player2 = p2ShuffledDeck;

// console.log(player1);
// console.log(player2);

//Player 1 draws card
function drawCard(){
    return player1.pop();
}

console.log(drawCard());

//Player 2 draws card
function drawCard(){
    return player2.pop();
}
console.log(drawCard());

//Compare Cards













//function compareCards() ** ANOTHER STEP