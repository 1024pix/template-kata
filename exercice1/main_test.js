import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
import users from  './fixtures/users.json';
import { attributeGrade } from "./main.js";

chai.use(sinonChai);

describe('#attributeGrade',function() {
  it('should attribute a grade to a user', function() {
    // given

    // when
    const gradedUser = attributeGrade(users)

    // then
    expect(gradedUser).to.equal({
      firstname: "Bob",
      lastname: "Morane",
      age: 26,
      note: 8,
      grade: "not so good",
    });
  });
})
