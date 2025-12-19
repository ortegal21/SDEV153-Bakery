<script>
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Helper functions
  const showError = (input, message) => {
    const error = input.nextElementSibling;
    error.textContent = message;
    input.classList.add("invalid");
    isValid = false;
  };

  const clearError = (input) => {
    const error = input.nextElementSibling;
    error.textContent = "";
    input.classList.remove("invalid");
  };

  // Inputs
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const product = document.getElementById("product");
  const quantity = document.getElementById("quantity");
  const pickupDate = document.getElementById("pickupDate");

  // Name
  clearError(name);
  if (name.value.trim().length < 2) {
    showError(name, "Please enter your full name.");
  }

  // Email
  clearError(email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "Please enter a valid email address.");
  }

  // Phone
  clearError(phone);
  const phonePattern = /^[0-9+\-\s]{7,15}$/;
  if (!phonePattern.test(phone.value)) {
    showError(phone, "Please enter a valid phone number.");
  }

  // Product
  clearError(product);
  if (product.value === "") {
    showError(product, "Please select a product.");
  }

  // Quantity
  clearError(quantity);
  if (quantity.value < 1) {
    showError(quantity, "Quantity must be at least 1.");
  }

  // Pickup Date
  clearError(pickupDate);
  const today = new Date().setHours(0, 0, 0, 0);
  const selectedDate = new Date(pickupDate.value).setHours(0, 0, 0, 0);

  if (!pickupDate.value || selectedDate < today) {
    showError(pickupDate, "Pickup date must be today or later.");
  }

  // Submit if valid
  if (isValid) {
    alert("Order submitted successfully! 🍰");
    this.reset();
  }
});
</script>
