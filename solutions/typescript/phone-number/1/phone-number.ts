export const clean = (number: string): string => {
  let numberOnly = number.replace(/[\s.\-()+]/g, '')
  let numberOnlyNoCC = numberOnly.slice(-10)
  if (/[a-z]/gi.test(numberOnly)) throw new Error('Letters not permitted')
  if (/\D/gi.test(numberOnly)) throw new Error('Punctuations not permitted')
  if (numberOnly.length < 10) throw new Error('Incorrect number of digits')
  if (numberOnly.length > 11) throw new Error('More than 11 digits')
  if (numberOnly.length === 11 && !numberOnly.startsWith('1')) throw new Error('11 digits must start with 1')
  if (numberOnlyNoCC.startsWith('0')) throw new Error('Area code cannot start with zero');
  if (numberOnlyNoCC.startsWith('1')) throw new Error('Area code cannot start with one');
  if (numberOnlyNoCC[3] === '0') throw new Error('Exchange code cannot start with zero');
  if (numberOnlyNoCC[3] === '1') throw new Error('Exchange code cannot start with one');
  return numberOnlyNoCC
};