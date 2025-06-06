//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//new solution inspired by a student
export const encode = (text, key) => {
  const railFence = Array.from({ length: key }, () => [])
  let direction = 1, row = 0
  for (let i = 0; i < text.length; i++) {
    railFence[row].push(text[i])
    if (row === 0) direction = 1
    if (row === key - 1) direction = -1
    row += direction
  }
  return railFence.flat().join('')
}

export const decode = (cipher, key) => {
  let chunkSizeRaw = cipher.length / (2 * (key - 1))
  let chunkSize = Math.ceil(chunkSizeRaw), chunkSizeX2 = Math.floor(chunkSizeRaw * 2)
  let rails = Array.from({ length: key }, () => [])
  let index = 0, kindex = 0
  while (index < cipher.length) {
    if (index < chunkSize || index > cipher.length - chunkSize) {
      rails[kindex].push(cipher.slice(index, index + chunkSize))
      index += chunkSize
    } else {
      rails[kindex].push(cipher.slice(index, index + chunkSizeX2))
      index += chunkSizeX2
    }
    kindex++
  }
  rails = rails.map(r => [...r[0]])
  let result = '', row = 0, direction = 1
  for (let i = 0; i < cipher.length; i++) {
    result += rails[row].shift()
    if (row == 0) direction = 1;
    if (row == key - 1) direction = -1;
    row += direction
  }
  return result
}
