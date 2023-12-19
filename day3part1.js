import * as input from './input.js';

const testInput = input.getInput();

// parcourir le tableau avec les nbres
// chaque nbre on va regarder autour s'il y a un symbole autre que .
// Si le nbre est ok, on le retient.



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

export { getNumbers, isDigit, isSymbol };

