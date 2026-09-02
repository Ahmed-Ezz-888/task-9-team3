let literPrice = 12;
finalPrice = 0;
mountOfLiter = prompt("enter how many liter you want");
finalPrice = mountOfLiter * literPrice;
let cheack = confirm("are you paying cash ?");
if (cheack == true) {
  let discount = (5 / 100) * finalPrice;
  finalPrice = finalPrice - discount;
}
let vat = (14 / 100) * finalPrice;
finalPrice = finalPrice + vat;
document.write("the final price is ->" + finalPrice);
