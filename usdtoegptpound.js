let usd = 5;
const conversionToEgypt = 0.54;

function calcCurrency(usd, conversionToEgypt) {
  return usd * conversionToEgypt;
}

console.log(
  `${usd} in USD is ${calcCurrency(usd, conversionToEgypt)} Egyptian Pound.`
);
