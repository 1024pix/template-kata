import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as input from './input.js'
import isDigit from './day3part1.js';

describe('When you have an input file',function() {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).to.equal('467..114..')
  })
});

describe('When you loop on the input', function() {
  it('should return true if character is a digit', () => {
    // given
    const char = '4';
    
    // when
    const result = isDigit((char));

    // then
    expect(result).to.equal(true);
  });
});