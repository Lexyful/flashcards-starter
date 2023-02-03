const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    this.currentRound
    this.deck
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  createCards(){
    let cards = prototype.map(function(){
    new Card(card.id, card.question, card.answers, card.correctAnswer)
    return cards
  })
}

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;