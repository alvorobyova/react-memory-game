## Memory game 🔎

✔️ JSX was used to build the game interface<br>
✔️ state and props are used to manage game state, including counting clicks and tracking open cards<br>
✔️ simple CSS-styling of game elements, including animation<br>
✔️ game logic has been implemented, including click processing, card comparison and victory determination<br>
✔️ a modal window with game results is displayed upon completion of all clicks

## Game logic:
🔺 the array with cards in the configuration has 8 cards, but before using the cards, we process the array so that there are 2 times more cards, and they are arranged randomly
🔺 by default all cards are closed
🔺 when you click on a card, it turns over
🔺 no more than 2 cards can be open at the same time, cards are compared by name, if they match, the cards remain open, if they don’t match, they are closed back
🔺 the game continues until all pairs of cards are revealed
🔺 each click on the card is counted, and as a result it is displayed in the modal window
🔺 closing the modal window resets all cards → new game starts
<hr>

run app → `npm start` <br>
run build → `npm run build`
