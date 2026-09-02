
function calculateFee() {

    let hours = Number(document.getElementById("hours").value);

    if (hours <= 0 || isNaN(hours)) {
   document.getElementById("result").innerHTML =
  "Please enter a valid number of hours.";
    return;
    }

    let fee;

    // First 2 hours = 10 EGP total
    if (hours <= 2) {
        fee = 10;
    } 
    // Each extra hour = 5 EGP
    else {
        fee = 10 + (hours - 2) * 5;
    }

    // VAT = 14%
    let vat = fee * 0.14;

    // Total after VAT
    let total = fee + vat;

    document.getElementById("result").innerHTML = `
        <p>Parking Fee: ${fee.toFixed(2)} EGP</p>
        <p>VAT (14%): ${vat.toFixed(2)} EGP</p>
        <p><strong>Total: ${total.toFixed(2)} EGP</strong></p>`}