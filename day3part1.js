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

export default isDigit;

