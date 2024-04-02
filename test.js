import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
import {main} from "./main.js";
chai.use(sinonChai);

describe('When a test is written',function() {
  it('should fail', function() {
    // given

    // when
    const result = main()
    // then
    expect(result).to.equal(true);
  });
})

