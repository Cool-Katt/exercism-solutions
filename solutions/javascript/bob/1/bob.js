//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let trimmed = message.trim()
  switch (true) {
    case isEmpty(trimmed):
      return bob.empty
    case isQuestionAndShout(trimmed):
      return bob.questionAndShout
    case isQuestion(trimmed):
      return bob.question
    case isShout(trimmed):
      return bob.shout
    default:
      return bob.default
  }
};

const isEmpty = m => m.length === 0
const isQuestion = m => m.endsWith('?')
const isShout = m => /[a-z]/i.test(m) && m === m.toUpperCase()
const isQuestionAndShout = m => isQuestion(m) && isShout(m)

const bob = {
  empty: 'Fine. Be that way!',
  questionAndShout: 'Calm down, I know what I\'m doing!',
  question: 'Sure.',
  shout: 'Whoa, chill out!',
  default: 'Whatever.',
}