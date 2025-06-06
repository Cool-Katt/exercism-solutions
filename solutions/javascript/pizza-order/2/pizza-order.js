/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    return MENU[pizza]
  } else {
    return MENU[extras.shift()] + pizzaPrice(pizza, ...extras)
  }
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, cur) => {return acc += pizzaPrice(cur.pizza, ...cur.extras)}, 0)
}

const MENU = {
  Margherita: 7, 
  Caprese: 9,
  Formaggio: 10,
  ExtraSauce: 1,
  ExtraToppings: 2,
}