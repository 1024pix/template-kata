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

class Rover {
  position ={
    "x": 2,
    "y": 3
  }

  evalCommands(f) {

  }
}

it('should go forward when sequence is f', function() {
  //
  const rover = new Rover();

  // when
  rover.evalCommands('f');

  //
  const actualPosition = rover.position;
  expect(actualPosition).to.deep.equal({x: 2, y: 3});
});

