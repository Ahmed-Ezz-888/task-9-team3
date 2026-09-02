 let finalprice=20;
 let km=prompt(" please enter km");
 let fare = 20 +(km*6.5)
 let nighttrip=confirm("is it night?")

 if(nighttrip==true){
     nightfare= fare*1.10
 }

 let promocode=prompt("please enter your code")
 if(promocode == "SAV10"){
     fare= fare*1.10

 }

 let vat=(14/100)*finalprice;
 finalprice= fare + vat;
 console.log('vat 14% value=>'+ vat + 'L.E');
 console.log("finalprice=>"+ finalprice+"L.E")