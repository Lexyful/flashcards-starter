
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round', function() {
  let deck;
  let round;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

beforeEach(function() {
  card1 = new Card(8,"What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function");
  card2 = new Card(26,"shift(), unshift(), pop(), and push() are examples of what type of array property method?", ["mutator method", "accessor method", "iteration method"],"mutator method");
  card3 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"], "array");
  card4 = new Card(16,"What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator");
  card5 = new Card(10,"Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"],"find()");
  card6 = new Card(30,"What type of methods are functions that allow you to manipulate the value of a particular data type or class?",  ["prototype method", "object", "callback function"], "prototype method");

    deck = new Deck([card1, card2, card3, card4, card5, card6]);
    round = new Round(deck);
    
  });
  it('should be a funtion', function(){
    expect(Round).to.be.a('function');
  })
  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });  
  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  })
  it('the user should be able to take the turn', function() {
    const userQuestion1 = round.takeTurn('callback function')
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuess).to.deep.equal([]);
    expect(round.returnCurrentCard().id).to.equal(26);
    expect(userQuestion1).to.equal('correct');
  })
  it('should return the percent of the correct guesses', function(){
    round.takeTurn('callback function');
    round.calculatePercentage();
    expect(round.calculatePercentage()).to.equal(100);
  })
  it('the user should recieve the message after the Round has ended',function() {
    round.takeTurn('callback function');
    round.endRound();
   expect(round.endRound()).to.equal(`** Round over! ** You answered ${100}% of the questions correctly!`);
  })
})