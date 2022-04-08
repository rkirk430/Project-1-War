
//Empty arrays for players

let player1 = []
let player2 = []

// Card Deck = Array of Objects

let cardDeck = [
    {
        name: 'Ace',
        suite: 'spades',
        number: '14',
        image: '',
    },
    {
        name: 'Ace',
        suite: 'hearts',
        number: '14',
        image: '',
    },
    {
        name: 'Ace',
        suite: 'diamonds',
        number: '14',
        image: '',
    },
    {
        name: 'Ace',
        suite: 'clubs',
        number: '14',
        image: '',
    },
    {
        name: 'two',
        suite: 'spades',
        number: '2',
        image: '',
    },
    {
        name: 'two',
        suite: 'hearts',
        number: '2',
        image: '',
    },
    {
        name: 'two',
        suite: 'diamonds',
        number: '2',
        image: '',
    },
    {
        name: 'two',
        suite: 'clubs',
        number: '2',
        image: '',
    },
]

console.log(cardDeck[0].name + ' '+ cardDeck[0].suite);


//Push card from array to player1

player1.push(cardDeck[0].name + ' ' + cardDeck[0].suite);

console.log(player1);

//Next step: Remove that card from the remaining CardDeck  pull/remove options?


//Push card from array to player2

player2.push(cardDeck[1].name + ' ' + cardDeck[1].suite);

console.log(player2);

//Next step: Remove that card from the remaining CardDeck pull/remove options?


