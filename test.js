const { expect } = require('chai');
const chai = require('chai');

// compass
//
//     North
// West  <->  East
//     South

// referential
//
// y
// ^
// |
// |
// 0 ----> x


// A test list :
// - starting (1, 1) facing east, got forward,          ending in (2,1) facing east
// - starting (1, 1) facing east, got forward-forward,  ending in (3,1) facing east
// - starting (1, 1) facing east, got backward,         ending in (0,1) facing east
// - starting (2, 2) facing east, got forward,          ending in (3,2) facing east
// - starting (1, 1) facing east, got right,            ending in (1,1) facing south <=
// - starting (1, 1) facing east, got right right,      ending in (1,1) facing west

// Comment on tourne ?
// Points cardinaux dans un tableau, valeur suivante ?

const apply = (commands, state) => {
  if (commands === 'r') {
    return { x: 1, y: 1, direction: 'west'}
  }

  return { x: 1, y: 1, direction: 'south'}
}

it('starting (1, 1) facing east, got right,  ending in (1,1) facing south', () => {
  // given
  const commands = 'r';
  const state = { x: 1, y: 1, direction: 'east'};

  // when
  const result = apply(commands, state)

  // then
  expect(result).to.deep.equal({ x: 1, y: 1, direction: 'south'});
});

it('starting (1, 1) facing south, got right,  ending in (1,1) facing west', () => {
  // given
  const commands = 'r';
  const state = { x: 1, y: 1, direction: 'south'};

  // when
  const result = apply(commands, state)

  // then
  expect(result).to.deep.equal({ x: 1, y: 1, direction: 'west'});
});
