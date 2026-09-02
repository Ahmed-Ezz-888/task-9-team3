let mount = 0;
yourCharge = Number(prompt("enter your charge "));
mount = mount + yourCharge;
let fee = mount * (2 / 100);
mount = fee + mount;
document.write("after fee is ->" + mount + "<br>");
let VAT = (14 / 100) * mount;
mount = VAT + mount;
document.write("after fee and vat  is ->" + mount);
