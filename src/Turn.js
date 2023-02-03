class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correct;

  }
  returnGuess() {
  return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return this.guess === this.card.correctAnswer;
  }
  giveFeedback(){
     if(this.guess === this.card.correctAnswer){ this.correct = true;
        return 'correct';
    } else {
      return 'incorrect';
    }
  }
}

module.exports = Turn;