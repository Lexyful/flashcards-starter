const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe('Deck', function() {
  let card1
  let card2
  let card3
  let card4
  let card5
  let card6


beforeEach(function() {

  const deck = [{
    "id": 8,
    "question": "What do iterator methods take in as their first argument?",
    "answers": ["callback function", "current element", "an array"],
    "correctAnswer": "callback function"
  }, {
    "id": 26,
    "question": "shift(), unshift(), pop(), and push() are examples of what type of array property method?",
    "answers": ["mutator method", "accessor method", "iteration method"],
    "correctAnswer": "mutator method"
  }, {
    "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answers": ["array", "object", "function"],
    "correctAnswer": "array"
  },{
    "id": 16,
    "question": "What does the callback function for reduce() return?",
    "answers": ["the accumulator", "the current element", "the initializer"],
    "correctAnswer": "the accumulator"
  },{
    "id": 10,
    "question": "Which iteration method returns the first array element where the callback function returns true",
    "answers": ["find()", "filter()", "forEach()"],
    "correctAnswer": "find()"
  }, {
    "id": 30,
    "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
    "answers": ["prototype method", "object", "callback function"],
    "correctAnswer": "prototype method"
  }]

  const newDeck = new Deck ([card1, card2, card3, card4, card5, card6])
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })
});