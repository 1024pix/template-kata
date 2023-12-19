import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import * as input from './input.js'
import {isDigit, isSymbol, getNumbers} from './day3part1.js';

describe('When you have an input file',function() {
  it('should return array of int for each line', function() {
    const result = input.getInput();

    expect(result[0]).to.equal('467..114..')
  });

  describe('When you loop on the input', function() {
    describe('#isDigit', function () {
      it('should return true if character is a digit', function() {
        // given
        const char = '4';

        // when
        const result = isDigit((char));

        // then
        expect(result).to.equal(true);
      });

      it('should return false if character is not a digit', function() {
        // given
        const char = 'b';

        // when
        const result = isDigit((char));

        // then
        expect(result).to.equal(false);
      });
    });

    describe('#isSymbol', function () {
      it('should return true if character is a symbol other than a dot', function () {
        // given
        const char = '*';

        // when
        const result = isSymbol(char);

        // then
        expect(result).to.be.true;
      });

      it('should return false if character is a dot', function () {
        // given
        const char = '.';

        // when
        const result = isSymbol(char);

        // then
        expect(result).to.be.false;
      });
    });

    describe('#getNumbers', function () {
      it('should return an array of numbers from a line', function () {
        // given
        const inputText = input.getInput();
        const line = inputText[0];

        // when
        const result = getNumbers(line);

        // then
        expect(result).to.deep.equal(['467', '114']);
      })
    });
  });
});
