let player1 = []
let player2 = []

let warPlayer1 = []  //Empty arrays for if WAR happens
let warPlayer2 = []  //Empty arrays for if WAR happens

let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
let score = [14,13,12,11,10,9,8,7,6,5,4,3,2];

function getCardDeck () {
    let cardDeck = new Array();  
    for (let i = 0; i < suits.length; i++) {
       for (let x = 0; x < values.length; x++) {
           let card = {Value: values[x], Suit: suits[i], Score: score[x]};
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
function p1DrawCard(){
    return player1.pop();
}

// console.log(p1DrawCard());

//Player 2 draws card
function p2DrawCard(){
    return player2.pop();
}

// should i create a new variable for p2DrawCard?
// How to access the "score" part of the array.







//Compare Cards 
function compareCards() {
    if(player1.length > 0 && player2.length > 0) {
        let p1card = p1DrawCard();
        let p2card = p2DrawCard();
        console.log(p1card);
        console.log(p2card);
        if(p1card.Score > p2card.Score) {
            console.log('p1 winner') 
            p2card.unshift(p2card);
    
        } else if (p1card.Score < p2card.Score) {
            console.log('p2 winner')
        } else console.log('tie')
    }
}

console.log(player1[0].Score);



document.querySelector("#start_game_button").addEventListener('click',compareCards)
// console.log(compareCards());
// function compareCards(p1DrawCard,p2DrawCard) {
//     console.log(p1DrawCard.score[0],p2DrawCard.score[0])
// }

// function compareCards() {
//     let player1 = p1DrawCard();
//     let player2 = p2DrawCard();
//     console.log(player1.score,player2.score);
// }













//function compareCards() ** ANOTHER STEP