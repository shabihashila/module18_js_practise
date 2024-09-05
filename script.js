// multilevel condition

// const price = 9000;
// if (price >= 5000) {
//   // 10% discount
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(discount);
//   console.log(payAmount);
// } else {
//   console.log(price);
// }

const priceShoe = 4400;

if (priceShoe >= 2500) {
  const discount = (priceShoe * 20) / 100;
  const presentPrice = priceShoe - discount;
  console.log(discount);
  console.log(presentPrice);
  //   another condition
} else if (priceShoe >= 2000) {
  const discount = (2000 * 5) / 100;
  const presentPrice = priceShoe - discount;
  console.log(presentPrice);
  console.log(discount);
} else {
  console.log(priceShoe);
}
