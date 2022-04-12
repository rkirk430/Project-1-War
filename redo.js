let player1 = []
let player2 = []

let warPlayer1 = []  //Empty arrays for if WAR happens
let warPlayer2 = []  //Empty arrays for if WAR happens

let suits = ['spades','diamonds','clubs','hearts'];
let values = ['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
let score = [14,13,12,11,10,9,8,7,6,5,4,3,2];
const p1Wrapper = document.querySelector(".p1_card_wrapper");
const p2Wrapper = document.querySelector(".p2_card_wrapper");
const p1CardCount = document.getElementById('p1CardCount');
const p2CardCount = document.getElementById('p2CardCount');




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


//Render the deck 
function renderDeck(shuffledDeck)
{
	document.getElementById("deck").innerHTML = '';

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("deck");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon='&hearts';
		else if (deck[i].Suit == 'spades')
		icon = '&spades';
		else if (deck[i].Suit == 'diamonds')
		icon = '&diams';
		else
		icon = '&clubs';

		card.innerHTML = deck[i].Value + '' + icon;
		card.className = 'card';
	document.getElementById("deck").appendChild(card);
	}
    return shuffledDeck;
}

renderDeck();


//Rendering the deck source: https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

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

//Function to display cards
let displayCard = function (card, node) {
    let currentCard = card.Suit + card.Value
    console.log(currentCard);
    let cardNode = document.createElement("p");
    cardNode.innerText = currentCard;
    node.innerHTML = '';
    node.appendChild(cardNode);
}

//Compare Cards 
function compareCards() {
    if(player1.length > 0 && player2.length > 0) {
        p1CardCount.innerHTML=player1.length;
        p2CardCount.innerHTML=player2.length;
        console.log(player1.length);
        let p1card = p1DrawCard();
        let p2card = p2DrawCard();
        displayCard(p1card, p1Wrapper);
        displayCard(p2card, p2Wrapper);
        if(p1card.Score > p2card.Score) {
            console.log('p1 winner') 
            player1.unshift(p2card); 
            player1.unshift(p1card);  //Think i need to do an additional step as its not calcualating correctly
        } else if (p1card.Score < p2card.Score) {
            console.log('p2 winner')
            player2.unshift(p1card);
            player2.unshift(p2card) //Think i need to do an additional step as its not calcualating correctly
        } else {
            console.log('tie')
            player2.unshift(p2card); // Pushes cards back into their respective decks
            player1.unshift(p1card);
        } 
    }
    // p1CardCount();
    // p2CardCount();
}

// console.log(player1[0].Score);

//Function to count the number of cards in a players array
//How to invoke a function each time a click occurs

//Function to count p1 number of cards

// function p1CardCount () {
//     let sum = 0;
//     for (let i = 0; i < player1.length; i++) {
//         sum += player1[i];
//     } console.log(player1);
//     return sum;
// }




//Function to count p2 number of cards

// function p2CardCount () {
//     let sum = 0;
//     for (let i = 0; i < player2.length; i++) {
//         sum += player2[i];
//     } console.log(player2);
//     return sum;
// }






//Attempt 1

// let p1CardCount = function() {
//     for (let i = 0; i < player1.length; i++) {
//         sum = sum + i 
//             return sum;
//         }
//     }


// console.log(p1CardCount());






// document.querySelector("#p1_draw_card").addEventListener('click',p1DrawCard)  //Click & p1 Draws their card.. Not working in console.log
// document.querySelector("#p2_draw_card").addEventListener('click',p2DrawCard)  //Click & p2 draws their card.. Not working in console.log
document.querySelector("#start_game_button").addEventListener('click',compareCards)
// document.querySelector("#start_game_button").addEventListener('click',p1CardCount)
// document.querySelector("#start_game_button").addEventListener('click',p2CardCount)

//document is not defined error????