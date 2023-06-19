/* eslint-disable mocha/no-empty-description */
import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
import sinon from "sinon";
chai.use(sinonChai);

function printStatement(accountRepository) {
  const account = accountRepository.getAccount()
  if (account) {
    return ["Date        Amount  Balance", `01.06.2023 +30 30`]
  }
  return ["Date        Amount  Balance"]
}

describe('#printStatement',function() {
  context('given an empty account', function() {
    it("should return only the headers", function() {
      // given
      const getAccount = sinon.stub()
      const accountRepository = { getAccount }
      // when
      const statement = printStatement(accountRepository);
      // then
      expect(statement).to.deep.equal(["Date        Amount  Balance"]);
    });
  });

  context('given a new Account with a deposit of $30 on the 1st June 2023', function() {
    it('should return the headers and 01.06.2023 +30 30', function() {
      // given
      const getAccount = sinon.stub()
      getAccount.returns([{ date: "01.06.2023", amount: 30, balance: 30 }])
      const accountRepository = { getAccount }

      // when
      const statement = printStatement(accountRepository);

      // then
      expect(statement).to.deep.equal(["Date        Amount  Balance", "01.06.2023 +30 30"]);
    });
  });
})


