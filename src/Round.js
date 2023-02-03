const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck.cards;
    // this.currentCard = this.deck[0];
    this.turns = 0
    this.incorrectGuess = []
    // // console.log(deck)
  }
  returnCurrentCard(){
    return this.deck[0]

  }
  takeTurn(guess){
    const currentCard = this.returnCurrentCard()
    const newTurn = new Turn(guess, currentCard)
    this.turns ++
    const result = newTurn.evaluateGuess()
    if(result === false){
      this.incorrectGuess.push(currentCard.id)
    }
    this.deck.shift()
   
    return newTurn.giveFeedback()
  }
  caluculatePercentage() {
    let correctAnswers = this.turns - this.incorrectGuess.length
    let percentCorrect = correctAnswers * 100 
    return percentCorrect

  }
  }
// }
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’


module.exports = Round