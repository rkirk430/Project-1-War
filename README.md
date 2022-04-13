# Project-1-War

# Introduction to the Project
Game of War. \
Functionality --
Game starts with 52 cards & deck is split evenly between the two players

If Player 1 Card > Player 2 Card, both cards go into Player 1’s deck & goal is to get all 52 cards

Given this is a prototype I currently have a tie just being pushed back to their players respective decks 

# Show/Discuss Code
o	Set empty arrays for player 1 & player 2

o	Created constant variable arrays for suits, values and scores and integrated them into a for loop to get my card deck

o	Created a function with a for loop to shuffle the deck

o	Slice method to split up the shuffled deck into the empty player 1 and player 2 arrays

o	From there I used pop to pull a card out from each players array & created a function to compare the two cards using if else statements

## Subheading

### Link

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
            displayWinner.innerText= 'Player 1 Wins!';
            player1.unshift(p2card); 
            player1.unshift(p1card);  
        } else if (p1card.Score < p2card.Score) {
            console.log('p2 winner')
            displayWinner.innerText= 'Player 2 Wins!';
            player2.unshift(p1card);
            player2.unshift(p2card) 
        } else {
            console.log('tie')
            displayWinner.innerText= 'Its a Tie!';
            player2.unshift(p2card); // Pushes cards back into their respective decks
            player1.unshift(p1card);
        } 
    }
    
  ![image](https://user-images.githubusercontent.com/41478978/163196054-4fb410a8-1aa7-462d-9d85-a404104d5232.png)
  
  ![image](https://user-images.githubusercontent.com/41478978/163199579-842f901a-bd62-4b77-955e-5d2f147b290c.png)
  
  ![image](https://user-images.githubusercontent.com/41478978/163200125-90a0f077-6d9a-48f9-8762-179f0b804815.png)




