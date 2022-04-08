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

console.log(getCardDeck());
