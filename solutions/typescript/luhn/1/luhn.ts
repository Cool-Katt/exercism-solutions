export const valid = (digitString: string) => 
  digitString.replace(/\s/g, '')
     .split('')
     .reverse()
     .map(c => parseInt(c))
     .map((v, i) => i % 2 === 0 ? v : (v > 4 ? v * 2 - 9 : v * 2))
     .reduce((acc, curr) => acc + curr, 0) % 10 === 0 && digitString.replace(/\s/g, '').length > 1
