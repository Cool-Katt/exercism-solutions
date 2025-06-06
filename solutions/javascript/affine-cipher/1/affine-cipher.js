const START = 'a'.charCodeAt();
const NUM_LETTERS = 26;
const CHUNK = 5;

const checkCoPrimes = (a, b) => {
  if([...Array(Math.min(a, b) - 1).keys()].map(n => n + 2).some(n => a % n === 0 && b % n === 0)){
    throw new Error('a and m must be coprime.');
  }
}

const findMMI = (a, m) => {
  return [...Array(m - 1).keys()].map(n => n + 1).find(n => n * a % m === 1)
}

const transpose = encryptFn => char => String.fromCharCode(encryptFn(char) % NUM_LETTERS + START)

export const encode = (phrase, { a, b }) => {
  checkCoPrimes(a, NUM_LETTERS)
  return phrase.toLowerCase().replace(/\W/g, '').replace(
      /[a-z]/g,transpose(char => a * (char.charCodeAt() - START) + b))
    .match(new RegExp(`.{1,${CHUNK}}`, 'g'))
    .join(' ')
};

export const decode = (phrase, { a, b }) => {
  checkCoPrimes(a, NUM_LETTERS)
  const mmi = findMMI(a, NUM_LETTERS);
  return phrase.replace(/\W/g, '').replace(
    /[a-z]/g, transpose(char => mmi * (char.charCodeAt() - START - b) % NUM_LETTERS + NUM_LETTERS))
};
