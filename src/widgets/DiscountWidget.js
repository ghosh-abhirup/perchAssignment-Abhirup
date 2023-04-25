var costArr = [100, 500, Infinity];
var minAmount = 20;
var discountArr = [20, 30, 40];

const discountedAmount = (amount) => {
  if (amount < minAmount) {
    return [amount, 0];
  } else {
    for (var i = 0; i < costArr.length; i++) {
      if (amount < costArr[i]) {
        return [amount - (amount * discountArr[i]) / 100, discountArr[i]];
      }
    }
  }
};

export default discountedAmount;
