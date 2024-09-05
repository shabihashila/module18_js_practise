// 12 bosor er niche baccara free khabe
// 60 bosorer oporer baccara 50% sar pabe
// bakira full price pabe

const age = 45;
const foodBill = 3000;
if (age < 12) {
  console.log("you are get a free food");
} else if (age > 60) {
  // 50% discount
  const discount = (foodBill * 50) / 100;
  const price = foodBill - discount;
  console.log(price);
  console.log("you are get 50% discount");
} else if (age >= 50) {
  // 25% discount
  const discount = (foodBill * 25) / 100;
  const price = foodBill - discount;
  console.log(price);
  console.log("you are get 25% discount");
} else if (age >= 40) {
  const discount = (foodBill * 10) / 100;
  const price = foodBill - discount;
  console.log(price);
  console.log("you have to 10% pay for this");
} else {
  console.log(foodBill);
  console.log("you have to full pay for this");
}
