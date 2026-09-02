function splitBill() {
  // Get values from inputs
  let bill = Number(document.getElementById("bill").value);
  let people = Number(document.getElementById("people").value);

  // Validate input
  if (bill <= 0 || people <= 0) {
    document.getElementById("result").innerHTML =
      "<p>Please enter valid values.</p>";
    return;
  }

  // Service charge = 12%
  let serviceCharge = bill * 0.12;

  // Bill after service charge
  let afterService = bill + serviceCharge;

  // VAT = 14%
  let vat = afterService * 0.14;

  // Total bill after VAT
  let totalBill = afterService + vat;

  // Amount per person
  let eachPerson = totalBill / people;

  // Display result
  document.getElementById("result").innerHTML = `
        <p>Original Bill: ${bill.toFixed(2)} EGP</p>

        <p>Service Charge (12%): 
            ${serviceCharge.toFixed(2)} EGP
        </p>

        <p>After Service Charge: 
            ${afterService.toFixed(2)} EGP
        </p>

        <p>VAT (14%): 
            ${vat.toFixed(2)} EGP
        </p>

        <p>Total Bill: 
            ${totalBill.toFixed(2)} EGP
        </p>

        <p class="total">
            Each Person: ${eachPerson.toFixed(2)} EGP
        </p>
    `;
}
