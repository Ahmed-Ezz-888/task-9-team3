// gym membership
// Monthly price = 350 EGP
// Ask the user: How many months?
// Give a Discount:
// 6+ monthes : 10% discount
// 12+ monthes: 15% discount
// less than +6 manthes : no discount
// if customer need personal trainning : Add 200 EGP
// Add VAT 14%
  
 let months=Number(prompt("please Enter number of month"))
 let price= months*350
 console.log("originalprice is:",price,"EGP")
 if(months >= 6){
    price=price-(price*0.10)
    console.log("After disscount 6months",price,"EGP")
 }else if(months>= 12){
    price=price-(price*0.15)
    console.log("After disscount 12months",price,"EGP")
 }
 let personaltrainning=confirm("Do you want personal trainning")
 if(personaltrainning){
    price=price+200
    console.log("Add personaltrainning",price,"EGP")
 }
 let VAT=price*0.14
 price = price + VAT
 console.log("After 14%VAT:",price,"EGP")
 console.log(" total membership cost:" + price + "EGP")