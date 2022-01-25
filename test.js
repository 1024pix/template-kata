const { expect } = require('chai');

// test list
// command :
// - orientation l, r
// - déplacement : f, b

// \ N /
//  W+E
// / S \

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
  constructor({ x, y, direction }) {
    this.position = {
      x,
      y,
    };

    this.direction = direction;
  }

  evalCommands(commands) {
    if (this.direction === 'N') {
      this.position.y += commands.length;
    } else if (this.direction === 'E') {
      this.position.x += commands.length;
    }
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

it('should go forward when sequence is f', function () {
  // given
  const rover = new Rover({ x: 1, y: 3, direction: 'E' });

  // when
  rover.evalCommands('f');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({ x: 2, y: 3 });
});

// y
//
// ^
// |
// 3..>
// |  .
// |  .
// 0--3-> x

it('should go two steps forward when sequence is ff', function () {
  // given
  const rover = new Rover({ x: 1, y: 3, direction: 'E' });

  // when
  rover.evalCommands('ff');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({ x: 3, y: 3 });
});

it('should go one step forward from x:1, y:1 when sequence is f', function () {
  // given
  const rover = new Rover({ x: 1, y: 1, direction: 'E' });

  // when
  rover.evalCommands('f');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({ x: 2, y: 1 });
});

it('should go one step forward from x:1, y:1 facing north when sequence is f', function () {
  // given
  const rover = new Rover({ x: 1, y: 1, direction: 'N' });

  // when
  rover.evalCommands('f');

  // then
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({ x: 1, y: 2 });
});
