/* eslint-disable mocha/no-empty-description */
import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

function printStatement() {
  return "Date        Amount  Balance"
}

describe('#printStatement',function() {
  context('given an empty account', function() {
    it("should return only the headers", function() {
      // given
      // when
      const statement = printStatement();
      // then
      expect(statement).to.equal("Date        Amount  Balance");
    });
  });

})

