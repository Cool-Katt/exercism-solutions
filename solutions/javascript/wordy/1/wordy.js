//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (text) => {
  const isOp = o => ['+', '-', '*', '/', '**'].includes(o)
  const isNum = n => !isNaN(Number(n))
  const calc = (A, operation, B) => {
    let a = Number(A)
    let b = Number(B)
    switch (operation) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        case '**':
            return a ** b
      }
  }

  let newText = text.replaceAll('plus', '+')
                    .replaceAll('minus', '-')
                    .replaceAll('multiplied by', '*')
                    .replaceAll('divided by', '/')
                    .replaceAll('raised to', '**')
                    .replaceAll(/What is|\?/g, '')
                    .trim().split(' ')
  
  newText.forEach(s => {if (!isNum(s) && !isOp(s)) throw new Error('Unknown operation')})
  
  while (newText.length > 1) {
        newText = [calc(...newText.slice(0, 3)), ...newText.slice(3)]
    }

  let result = Number(newText)
  if(!result) throw new Error('Syntax error')
  return result
}