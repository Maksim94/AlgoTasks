// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// const reverse =str => str.split('').reverse().join('');
// const reverse = str => str.split('').reduce((rev, char) => char + rev, '');
const reverse = str => [...str].reduceRight((acc, curr) => acc + curr, '');

const reverse = str => {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

module.exports = reverse;
