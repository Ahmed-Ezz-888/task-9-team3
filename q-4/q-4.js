let price = prompt(" Enter the price ?");
let quantity = prompt(" Enter the quantity ?");
let subtotal = price * quantity;
let shipping;
if (subtotal >= 1000) {
  shipping = 0;
} else {
  shipping = 60;
}
let coupon = true;
let couponprice = 0;
if ((coupon = confirm(" Is there a discount?") === coupon)) {
  coupon = prompt(" Enter the discount?");
  couponprice = subtotal * (coupon / 100);
}
let totalBeforeVAT = subtotal - couponprice + shipping;
let vat = totalBeforeVAT * 0.14;
let finalTotal = totalBeforeVAT + vat;
console.log("Price:", price, "EGP");
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal, "EGP");
console.log("Shipping:", shipping, "EGP");
console.log("Discount:", couponprice, "EGP");
console.log("Total before VAT:", totalBeforeVAT, "EGP");
console.log("VAT 14%:", vat, "EGP");
console.log("Final Total:", finalTotal, "EGP");
