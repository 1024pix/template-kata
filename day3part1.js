import * as input from './input.js';

const testInput = input.getInput();

const isDigit = (char) => {
    if (char.match(/\d/g)) {
        return true;
    } else {
        return false
    }
};

const isSymbol = (char) => {
    const parsedChar = parseInt(char);
    if(isNaN(parsedChar) && char !== '.') return true;
    return false
};

const isAdjacentSymbol = (lines, indexOfChar) => {
    const x = indexOfChar[0];
    const y = indexOfChar[1];

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (lines?.[i]?.[j] === undefined) break
        if (isSymbol(lines[i][j])) {
          return true;
        }
      }
    }
    return false;
}

const getNumbers = (line) => {
  const chars = line.split('');
  let numbers = [];
  let number = '';
  for (let i = 0; i < chars.length; i++) {
    if(isDigit(chars[i])) {
      number += chars[i];
    } else {
      numbers.push(number);
      number = '';
    }
  }
  return numbers.filter((element) => element);
}

const sumEngineParts = (input) => {
  let sum = 0;
  const lines = input.flatMap(array => array.split('\n'));
  const splittedLines = lines.map(line => line.split(''));
   let numbers = [];

  for (let i = 0; i < lines.length; i ++) {
    let number = '';
    let isAdjacent = false;
    for (let j = 0; j < splittedLines.length; j++) {
      if (isDigit(splittedLines[i][j])) {
        number += splittedLines[i][j];
        if (isAdjacentSymbol(splittedLines, [i, j])) {
          isAdjacent = true;
        }
      } else {
        if (isAdjacent === true) {
          numbers.push(number);
          number = '';
          isAdjacent = false;
        }
      }
    }
  }

  return numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
}

export { getNumbers, isAdjacentSymbol, isDigit, isSymbol, sumEngineParts };

