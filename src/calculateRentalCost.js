'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyFee = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  let price = days * dailyFee;

  if (days >= longTerm) {
    return (price -= longTermDiscount);
  }

  if (days >= shortTerm) {
    return (price -= shortTermDiscount);
  }

  return price;
}

module.exports = calculateRentalCost;
