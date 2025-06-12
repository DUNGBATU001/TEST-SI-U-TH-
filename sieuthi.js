function updateCart() {
  const rows = document.querySelectorAll("#cart-table tr");
  let total = 0;

  rows.forEach((row, index) => {
    const priceCell = row.querySelector(".price");
    const quantityInput = row.querySelector(".quantity");
    const subtotalCell = row.querySelector(".subtotal");

    if (priceCell && quantityInput && subtotalCell) {
      const price = parseFloat(priceCell.textContent);
      const quantity = parseInt(quantityInput.value);
      const subtotal = price * quantity;
      subtotalCell.textContent = subtotal.toFixed(2);
      total += subtotal;
    }
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

// Gọi khi thay đổi số lượng
document.querySelectorAll(".quantity").forEach(input => {
  input.addEventListener("input", updateCart);
});

// Gọi khi trang vừa load
window.addEventListener("DOMContentLoaded", updateCart);
