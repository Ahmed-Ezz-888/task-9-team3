function calculateTicket() {
  // Basic ticket price
  let ticketPrice = 100;

  // Get user choices
  let student = document.getElementById("student").value;
  let threeD = document.getElementById("threeD").value;

  let glasses = 0;
  let discount = 0;

  // Add 3D glasses
  if (threeD === "yes") {
    glasses = 20;
  }

  // Ticket + 3D glasses
  let priceBeforeDiscount = ticketPrice + glasses;

  // Student discount 15%
  if (student === "yes") {
    discount = priceBeforeDiscount * 0.15;
  }

  // Price after discount
  let priceAfterDiscount = priceBeforeDiscount - discount;

  // VAT 14%
  let vat = priceAfterDiscount * 0.14;

  // Final price
  let finalPrice = priceAfterDiscount + vat;

  // Display result
  document.getElementById("result").innerHTML = `
        <p>Ticket Price: ${ticketPrice.toFixed(2)} EGP</p>

        <p>3D Glasses: ${glasses.toFixed(2)} EGP</p>

        <p>Price Before Discount: 
            ${priceBeforeDiscount.toFixed(2)} EGP
        </p>

        <p>Student Discount: 
            ${discount.toFixed(2)} EGP
        </p>

        <p>Price After Discount: 
            ${priceAfterDiscount.toFixed(2)} EGP
        </p>

        <p>VAT (14%): 
            ${vat.toFixed(2)} EGP
        </p>

        <p class="total">
            Final Price: ${finalPrice.toFixed(2)} EGP
        </p>
    `;
}
