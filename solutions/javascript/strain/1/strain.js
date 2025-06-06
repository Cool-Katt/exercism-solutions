//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (collection, pred, keepFlg = true) => {
  let keep = [], discard = []
  collection.forEach(el => pred(el) ? keep.push(el) : discard.push(el))
  return keepFlg ? keep : discard
};

export const discard = (collection, pred) => {
  return keep(collection, pred, false)
};
