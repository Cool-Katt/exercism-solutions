//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let trimmed = message.trim()

  const isEmpty = trimmed.length === 0
  const isQuestion = trimmed.endsWith('?')
  const isShout = /[a-z]/i.test(trimmed) && trimmed === trimmed.toUpperCase()
  
  switch (true) {
    case isQuestion && isShout:
      return "Calm down, I know what I'm doing!";
    case isShout:
      return 'Whoa, chill out!';
    case isQuestion:
      return 'Sure.';
    case isEmpty:
      return 'Fine. Be that way!'
    default:
      return 'Whatever.';
  }
};