
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {
  let turn
  let turn2
  let card  

beforeEach(function() {
    card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
    turn = new Turn('sort()', card)
    turn2= new Turn('join()', card)
  });
  
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('sort()');

  })
  
  it('should return a card', function(){
    expect(turn.returnCard()).to.deep.equal(card)
  })

it('should evaluate the user guess', function() {
  expect(turn.evaluateGuess()).to.deep.equal(true)
})
 
it('should give the user feedback', function(){
  expect(turn.giveFeedback()).to.equal('correct')
  expect(turn2.giveFeedback()).to.equal('incorrect')
})

});
