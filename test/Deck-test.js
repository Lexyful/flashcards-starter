const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card')
const Turn = require('../src/Turn')


describe('Deck', function() {
  let deck
  let card1
  let card2
  let card3
  let card4
  let card5
  let card6


beforeEach(function() {
  
  card1 = new Card(8, "What do iterator methods take in as their first argument?",
   ["callback function", "current element", "an array"],
   "callback function")
 
 card2 = new Card(26,"shift(), unshift(), pop(), and push() are examples of what type of array property method?",
   ["mutator method", "accessor method", "iteration method"],
    "mutator method")
 
 card3 = new Card(2, "What is a comma-separated list of related values?",
   ["array", "object", "function"],
    "array")
 
 card4 = new Card(16, "What does the callback function for reduce() return?",
   ["the accumulator", "the current element", "the initializer"],
    "the accumulator")
 card5 = new Card(10, "Which iteration method returns the first array element where the callback function returns true",
   ["find()", "filter()", "forEach()"],
    "find()")
 card6 = new Card(30, "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",  ["prototype method", "object", "callback function"], "prototype method")

  const deck = new Deck ([card1, card2, card3, card4, card5, card6])
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })

});