let Egp = 48;
finalRsualt = 0;
let yourmoney = prompt("enter your money in dolar");
finalRsualt = yourmoney * Egp;
let commission = (3 / 100) * finalRsualt;
finalRsualt = finalRsualt - commission;
document.write("the final rsualt is ->" + finalRsualt);
