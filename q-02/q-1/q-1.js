// small=45
// medium=55
// large=65
// extra milk +5
// extra syrub +7
// extra shot + 10
// student discount 20%
// VAT 14%

let finalprice = 0;
let cupsize = prompt("please choose cupsize  sm , md , lg");
if (cupsize == 'sm') {
  finalprice = finalprice + 45;
  console.log("cupsize:sm=>45 L.E");
} else if (cupsize == 'md') {
  finalprice = finalprice + 55;
  console.log("cupsize:md =>55 L.E");
} else if (cupsize == 'lg') {
  finalprice = finalprice + 65;
  console.log("cupsize:lg =>65 L.E")
} else {
  document.write("invalid cupsize");
}

let extramilk = confirm("Do you want extra milk");
if (extramilk == true) {
  finalprice = finalprice + 5;
  console.log("extra milk=>5L.E");
}

let extrasyrub = confirm("Do you want extra syrub");
if (extrasyrub == true) {
  finalprice = finalprice + 7;
  console.log("extrasyrub=>7L.E");
}
let extrashot = confirm("Do you want extra shot");
if (extrashot == true) {
  finalprice = finalprice + 10;
  console.log("extrashot=>10L.E");
}
let isstudent = confirm("Are you student?");
if (isstudent == true) {
  let discountvalue = (20 / 100) * finalprice;
  finalprice = finalprice - discountvalue;
  console.log("studentdiscount=>-" + discountvalue + "L.E");
}
let VAT = (14 / 100) * finalprice;
finalprice = finalprice + VAT;
console.log("VAT14% value=>" + VAT + "L.E");
console.log("finalprice is:" + finalprice + "L.E");

// let finalprice=20;
// let km=prompt(" please enter km");
// let fare = 20 +(km*6.5)
// let nighttrip=confirm("is it night?")

// if(nighttrip==true){
//     nightfare= fare*1.10
// }

// let promocode=prompt("please enter your code")
// if(promocode == "SAV10"){
//     fare= fare*1.10

// }

// let vat=(14/100)*finalprice;
// finalprice= fare + vat;
// console.log('vat 14% value=>'+ vat + 'L.E');
// console.log("finalprice=>"+ finalprice+"L.E")
