let kwh = prompt(" Enter the kwh ?");

let electricityCost = 0;
if (kwh <= 100) {
  electricityCost = kwh * 0.75;
} else {
  electricityCost = 100 * 0.75 + ((kwh - 100) * 1.2);
}
let totalBeforeVAT = electricityCost;
let hasServiceFee = true;
let serviceFee = 0;
if ((serviceFee = confirm(" IS there a serviceFee") === hasServiceFee)) {
  serviceFee = prompt(" Enter the serviceFee ?");
  totalBeforeVAT = totalBeforeVAT + serviceFee;
}
let vat = totalBeforeVAT * 0.14;
let finalBill = totalBeforeVAT + vat;
console.log("Consumption:", kwh, "kWh");
console.log("Electricity Cost:", electricityCost, "EGP");
console.log("Service Fee:", hasServiceFee ? serviceFee : 0, "EGP");
console.log("Total before VAT:", totalBeforeVAT, "EGP");
console.log("VAT 14%:", vat, "EGP");
console.log("Final Bill:", finalBill, "EGP");
