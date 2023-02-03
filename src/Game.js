const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
  }
  createCards(){
    let cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    return cards;
    }
    
  createDeck(){
    this.deck = new Deck(this.createCards())
    return this.deck;
    };

  createNewRound(){
 
  this.currentRound = new Round(this.createDeck());
  return this.currentRound;
}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
  start(){
   const deck = this.createDeck();
    const round = this.createNewRound();
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;