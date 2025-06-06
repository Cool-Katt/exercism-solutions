//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BASE = 127;
const countBits = num => 1 + ~~(Math.log(num) / Math.log(2));
const BITS = countBits(BASE);

const chunk = ([...array]) => array.length ?
  [array.splice(0, 1 + array.findIndex(byte => !(byte & BASE + 1))), ...chunk(array)] :
  [];

export const encode = (nums = []) => nums.flatMap(num => Array
  .from(Array(Math.ceil(countBits(num) / BITS)), (_, i) => (num >>> BITS * i & BASE) + (i && BASE + 1))
  .reverse());

export const decode = (bytes = []) => {
  if (bytes[bytes.length - 1] & BASE + 1) throw new Error('Incomplete sequence');

  return chunk(bytes).map(byteChunk => byteChunk.reduce((num, byte) => (num << BITS) + (byte & BASE) >>> 0, 0));
};

