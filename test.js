import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

// Lorsque je donne 3 je reçois Fizz
// Lorsque je donne 5 je reçois Buzz
// Lorsque je donne 15 je reçois FizzBuzz
// Lorsque je donne 2 je reçois 2
// Lorsque je donne undefined je reçois ''
// Lorsque je donne 'a' je reçois une Error
function fizzbuzz () {
  return '';
}
describe('FizzBuzz',function() {
  it("given undefined, should return empty string", function() {
    // given
    const input = undefined;

    // when
    const result = fizzbuzz(input);



    // then
    expect(result).to.equal('');
  });
})

