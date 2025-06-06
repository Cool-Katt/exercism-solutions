/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else if (!remainingTime) {
     return 'You forgot to set the timer.'
  } else {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer
}

export function quantities(layers) {
  let noodles = 0
  let sauce = 0
  layers.forEach(l => {
    if (l == 'sauce') {
      sauce += 0.2
    }
    if (l == 'noodles') {
      noodles += 50
    }
  })
  return {
    noodles,
    sauce,
  }
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1])
}

export function scaleRecipe (recipe, scalefactor) {
  let scaledRecipe = {}
  for (let key in recipe) {
    scaledRecipe[key] = (recipe[key] / 2) * scalefactor
  }
  return scaledRecipe
}