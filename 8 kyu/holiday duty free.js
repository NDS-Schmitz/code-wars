// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol) {
	const decimal = discount / 100; //convert number to decimal to make it easier to math
	const totaldiscount = normPrice * decimal; //multiplying the normal price by the decimal to get the total discount
	const vacationMoney = hol / totaldiscount; //dividing total holiday cost by the discount amount to get sum
	return Math.floor(vacationMoney); //using math.floor to round down
}
