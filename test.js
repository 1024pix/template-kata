const { expect } = require('chai');

// test list
// command :
// - orientation l, r
// - déplacement : f, b

// scenari:
// "ffrlff'
// "f"
// "ff"
// "rr"
// "l"
// "f" mais d'un autre point de départ

// le point de départ et la direction sont implicites. Comment on les explicite ?

// y
//
// ^
// |
// 3>
// |.
// |.
// 01---> x

class Rover {

  constructor({x, y}) {
    this.position = {
      x,
      y,
    }
  }

  evalCommands(commands) {
    this.position.x += commands.length;
  }
}

// y
//
// ^
// |
// 3.>
// | .
// | .
// 0-2--> x

it('should go forward when sequence is f', function() {
  // given
  const rover = new Rover({x: 1, y: 3});

  // when
  rover.evalCommands('f');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({x: 2, y: 3});
});

// y
//
// ^
// |
// 3..>
// |  .
// |  .
// 0--3-> x

it('should go two steps forward when sequence is ff', function() {
  // given
  const rover = new Rover({x: 1, y: 3});

  // when
  rover.evalCommands('ff');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({x: 3, y: 3});
});

it('should go one step forward from x:1, y:1 when sequence is f', function() {
  // given
  const rover = new Rover({x: 1, y: 1});

  // when
  rover.evalCommands('f');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({x: 2, y: 1});
});
