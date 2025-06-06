//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (!preorder.length) return {}
  if (preorder.length === 1) return { value: preorder[0], left: {}, right: {} }
  if (preorder.length != inorder.length) throw new Error('traversals must have the same length')
  if (!preorder.every(value => inorder.includes(value))) throw new Error('traversals must have the same elements')
  if ([...new Set(preorder)].length != preorder.length || [...new Set(inorder)].length != inorder.length) 
    throw new Error('traversals must contain unique items')
  let ROOT = preorder[0], ROOTINDEX = inorder.indexOf(ROOT)
  
  return {
    value: ROOT,
    left: treeFromTraversals(preorder.slice(1, ROOTINDEX + 1), inorder.slice(0, ROOTINDEX)),
    right: treeFromTraversals(preorder.slice(ROOTINDEX + 1), inorder.slice(ROOTINDEX + 1))
  }
};