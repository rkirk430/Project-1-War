
//Empty arrays for players

let player1 = []
let player2 = []

// Card Deck = Array of Objects

let cardDeck = [
    {
        name: 'Ace',
        suite: 'spades',
        number: 14,
        image: '',
        randnumber: 1,
    },
    {
        name: 'Ace',
        suite: 'hearts',
        number: 14,
        image: '',
        randnumber: 2,
    },
    {
        name: 'Ace',
        suite: 'diamonds',
        number: 14,
        image: '',
        randnumber: 3,
    },
    {
        name: 'Ace',
        suite: 'clubs',
        number: 14,
        image: '',
        randnumber: 4,
    },
    {
        name: 'two',
        suite: 'spades',
        number: 2,
        image: '',
        randnumber: 5,
    },
    {
        name: 'two',
        suite: 'hearts',
        number: 2,
        image: '',
        randnumber: 6,
    },
    {
        name: 'two',
        suite: 'diamonds',
        number: 2,
        image: '',
        randnumber: 7,
    },
    {
        name: 'two',
        suite: 'clubs',
        number: 2,
        image: '',
        randnumber: 8,
    },
]


//Randomly separate cards via random number (ie const randArrayP1 and randArrayP2 = new cardDeck?)
function shuffle(cardDeck) {
    let p1CardDeck = cardDeck.length;
    let p1RandomIndex = undefined
    while(p1CardDeck != 0){
        let p1RandomIndex = Math.floor(Math.random() * p1CardDeck);
        p1CardDeck--;
    [cardDeck[p1CardDeck], cardDeck[p1RandomIndex]] = [cardDeck[p1RandomIndex]], cardDeck[p1CardDeck];
    }
    return cardDeck;
}

shuffle(cardDeck)
console.log(cardDeck);


class randArrayP1 {}

console.log(cardDeck[0].name + ' '+ cardDeck[0].suite);  // Pulls Card


//Push card from array to player1

player1.push(cardDeck[0].name + ' ' + cardDeck[0].suite);

console.log(player1);

//Next step: Remove that card from the remaining CardDeck  pull/remove options?


//Push card from array to player2

player2.push(cardDeck[1].name + ' ' + cardDeck[1].suite);

console.log(player2);

//Next step: Remove that card from the remaining CardDeck pull/remove options?


