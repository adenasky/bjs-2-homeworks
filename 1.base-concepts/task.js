"use strict"

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;

	let arr = [];

	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths) || percent < 0 || contribution < 0 || amount <= 0 || countMonths <= 0) {
      return false;
  }

  let monthlyPercent = percent / 100 / 12;

  let loanBody = amount - contribution;

  let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1));

  let totalAmount = monthlyPayment * countMonths;

  totalAmount = Math.round(totalAmount * 100) / 100;

  return totalAmount;
}