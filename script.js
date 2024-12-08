const coffeShopName = prompt(
  "please enter a name Of Coffe Shop",
  "Adi's Coffe Shop"
); // שם החנות יהיה קבוע ולכן const
console.log("the shop name is: " + coffeShopName);
console.log(typeof coffeShopName);

let amountOfMoneyToday = Number(prompt("enter Amount Of Money Today", 0)); //ישתנה במהלך היום-let
console.log(amountOfMoneyToday);
console.log(typeof amountOfMoneyToday);

let shopIsOpen = Boolean(prompt("enter true or false", true));
console.log(shopIsOpen);
console.log(typeof shopIsOpen);

// דרך נוספת
// const isOpen= true;

let priceOfAdrink = Number(prompt("Please enter Price Of A drink "));
console.log(priceOfAdrink);
console.log(typeof priceOfAdrink);

// דרך נוספת
// const drinkPrice= 5;

let quantityOfAllDrinksSoldToday = Number(
  prompt("please entar a Quantity Of All Drinks Sold Today")
);
console.log(quantityOfAllDrinksSoldToday);
console.log(typeof quantityOfAllDrinksSoldToday);

let largeDrinksSoldToday = Number(
  prompt("please enter a Large Drinks Sold Today")
);
console.log(largeDrinksSoldToday);
console.log(typeof largeDrinksSoldToday);

let dailyRentCost = Number(prompt("please enter a Daily Rent Cost"));
console.log(dailyRentCost);
console.log(typeof dailyRentCost);

console.log(amountOfMoneyToday);
amountOfMoneyToday +=
  priceOfAdrink * quantityOfAllDrinksSoldToday +
  largeDrinksSoldToday * priceOfAdrink * 0.5;
console.log(amountOfMoneyToday);

console.log(MoneyTotal);
MoneyTotal += amountOfMoneyToday - dailyRentCost;
console.log(MoneyTotal);

function dayClassifier(QuantityOfAllDrinksSoldToday) {
  let message = "very busy";
  if (quantityOfAllDrinksSoldToday < 5) {
    message = "slow";
  } else if (quantityOfAllDrinksSoldToday < 10) {
    message = "busy";
  }
  return message;
}
console.log(dayClassifier(quantityOfAllDrinksSoldToday));
console.log(dayClassifier(3));
console.log(dayClassifier(7));
dayClassifier(quantityOfAllDrinksSoldToday);
