const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    this.turns = 0
    this.incorrectGuess = []
  }
  returnCurrentCard() {
    return this.deck[0];

  }
  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const newTurn = new Turn(guess, currentCard);
    this.turns ++;
    const result = newTurn.evaluateGuess();
    if(result === false){
      this.incorrectGuess.push(currentCard.id);
    }
    this.deck.shift();
   
    return newTurn.giveFeedback();
  }
  calculatePercentage() {
    const correctAnswers = this.turns - this.incorrectGuess.length;
    const percentCorrect = correctAnswers / this.turns * 100;
    return percentCorrect;
  }

  endRound() {
   const message = `** Round over! ** You answered ${this.calculatePercentage()}% of the questions correctly!`;
   return message;
  }
  
  }



module.exports = Round